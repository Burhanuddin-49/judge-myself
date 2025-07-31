// MongoDB setup script
// This script creates the necessary collections and indexes

const { MongoClient } = require("mongodb")

async function setupDatabase() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db("judge-myself")

    // Create collections
    await db.createCollection("posts")
    await db.createCollection("feedback")
    await db.createCollection("comments")

    // Create indexes for better performance
    await db.collection("posts").createIndex({ createdAt: -1 })
    await db.collection("posts").createIndex({ "votes.honest": -1 })
    await db.collection("posts").createIndex({ "votes.toxic": -1 })
    await db.collection("posts").createIndex({ "votes.smart": -1 })
    await db.collection("posts").createIndex({ "votes.kind": -1 })
    await db.collection("posts").createIndex({ "votes.confident": -1 })
    await db.collection("posts").createIndex({ "votes.confused": -1 })
    await db.collection("posts").createIndex({ "votes.fake": -1 })

    await db.collection("feedback").createIndex({ postId: 1 })
    await db.collection("feedback").createIndex({ createdAt: -1 })

    await db.collection("comments").createIndex({ postId: 1 })
    await db.collection("comments").createIndex({ createdAt: -1 })

    console.log("Database setup complete!")
    console.log("Collections created: posts, feedback, comments")
    console.log("Indexes created for optimal performance")
  } catch (error) {
    console.error("Error setting up database:", error)
  } finally {
    await client.close()
  }
}

setupDatabase()
