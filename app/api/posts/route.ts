import { type NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { text, isAnonymous } = await request.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    const post = {
      text: text.trim(),
      isAnonymous: Boolean(isAnonymous),
      createdAt: new Date(),
      votes: {
        honest: 0,
        toxic: 0,
        smart: 0,
        kind: 0,
        confident: 0,
        confused: 0,
        fake: 0,
      },
    };

    const result = await db.collection("posts").insertOne(post);

    return NextResponse.json(
      {
        _id: result.insertedId,
        ...post,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sort = searchParams.get("sort") || "newest";

    const { db } = await connectToDatabase();

    // Get posts with comment counts
    const pipeline: any = [
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "postId",
          as: "comments",
        },
      },
      {
        $addFields: {
          commentCount: { $size: "$comments" },
          totalVotes: {
            $add: [
              "$votes.honest",
              "$votes.toxic",
              "$votes.smart",
              "$votes.kind",
              "$votes.confident",
              "$votes.confused",
              "$votes.fake",
            ],
          },
        },
      },
      {
        $project: {
          text: 1,
          isAnonymous: 1,
          createdAt: 1,
          votes: 1,
          commentCount: 1,
          totalVotes: 1,
        },
      },
    ];

    // Add sorting
    if (sort === "most-judged") {
      pipeline.push({ $sort: { totalVotes: -1, createdAt: -1 } });
    } else {
      pipeline.push({ $sort: { createdAt: -1 } });
    }

    const posts = await db.collection("posts").aggregate(pipeline).toArray();

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
