import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { db } = await connectToDatabase()

    // Get the post
    const post = await db.collection("posts").findOne({
      _id: new ObjectId(params.id),
    })

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    // Get all comments for this post
    const comments = await db
      .collection("comments")
      .find({ postId: new ObjectId(params.id) })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({ post, comments })
  } catch (error) {
    console.error("Error fetching post:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
