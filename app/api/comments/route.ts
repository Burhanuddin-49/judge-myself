import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function POST(request: NextRequest) {
  try {
    const { postId, comment } = await request.json()

    if (!postId) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 })
    }

    if (!comment || comment.trim().length === 0) {
      return NextResponse.json({ error: "Comment is required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Verify post exists
    const post = await db.collection("posts").findOne({
      _id: new ObjectId(postId),
    })

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    const commentDoc = {
      postId: new ObjectId(postId),
      comment: comment.trim(),
      createdAt: new Date(),
    }

    const result = await db.collection("comments").insertOne(commentDoc)

    return NextResponse.json(
      {
        _id: result.insertedId,
        ...commentDoc,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
