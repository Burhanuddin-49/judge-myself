import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

const VALID_TAGS = ["honest", "toxic", "smart", "kind", "confident", "confused", "fake"]

export async function POST(request: NextRequest, { params }: { params: { postId: string } }) {
  try {
    const { tag } = await request.json()

    if (!tag || !VALID_TAGS.includes(tag.toLowerCase())) {
      return NextResponse.json({ error: "Invalid tag" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Verify post exists
    const post = await db.collection("posts").findOne({
      _id: new ObjectId(params.postId),
    })

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    // Increment the vote count for the specific tag
    const result = await db
      .collection("posts")
      .updateOne({ _id: new ObjectId(params.postId) }, { $inc: { [`votes.${tag.toLowerCase()}`]: 1 } })

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Failed to update vote" }, { status: 500 })
    }

    // Return updated post
    const updatedPost = await db.collection("posts").findOne({
      _id: new ObjectId(params.postId),
    })

    return NextResponse.json({ success: true, post: updatedPost })
  } catch (error) {
    console.error("Error voting:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
