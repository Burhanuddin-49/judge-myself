// This is a MongoDB seed script (JavaScript format)
// Run this in MongoDB shell or use a MongoDB client

use('judge-myself');

// Clear existing data
db.posts.deleteMany({});
db.comments.deleteMany({});

// Insert sample posts with vote counts
const samplePosts = [
  {
    text: "I think I'm a good friend but sometimes I get jealous when my friends hang out without me. I try to be supportive but I can be passive-aggressive when I'm hurt.",
    isAnonymous: true,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    votes: {
      honest: 3,
      toxic: 1,
      smart: 0,
      kind: 2,
      confident: 0,
      confused: 2,
      fake: 0
    }
  },
  {
    text: "I work really hard and I'm dedicated to my job, but I think I might be too blunt with my coworkers. I say what I think without sugar-coating it.",
    isAnonymous: true,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    votes: {
      honest: 5,
      toxic: 2,
      smart: 1,
      kind: 0,
      confident: 3,
      confused: 0,
      fake: 0
    }
  },
  {
    text: "I love making people laugh and I think I'm pretty funny, but sometimes I wonder if I use humor to avoid serious conversations. I might be avoiding real intimacy.",
    isAnonymous: false,
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    votes: {
      honest: 4,
      toxic: 0,
      smart: 2,
      kind: 1,
      confident: 1,
      confused: 3,
      fake: 1
    }
  },
  {
    text: "I'm very organized and I like things done properly, but my family says I'm controlling. I just want things to be done right - is that so wrong?",
    isAnonymous: true,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    votes: {
      honest: 2,
      toxic: 1,
      smart: 1,
      kind: 0,
      confident: 2,
      confused: 1,
      fake: 1
    }
  },
  {
    text: "I try to be there for everyone and help whenever I can, but I feel like people take advantage of my kindness. I have trouble saying no.",
    isAnonymous: true,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    votes: {
      honest: 6,
      toxic: 0,
      smart: 0,
      kind: 8,
      confident: 0,
      confused: 2,
      fake: 0
    }
  }
];

const insertedPosts = db.posts.insertMany(samplePosts);
console.log('Inserted posts:', insertedPosts.insertedIds);

// Insert sample comments
const postIds = Object.values(insertedPosts.insertedIds);

const sampleComments = [
  // Comments for first post
  {
    postId: postIds[0],
    comment: "We all get jealous sometimes. The fact that you recognize it shows self-awareness.",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
  },
  {
    postId: postIds[0],
    comment: "Maybe try talking to your friends about how you feel instead of being passive-aggressive?",
    createdAt: new Date(Date.now() - 20 * 60 * 60 * 1000)
  },
  
  // Comments for second post
  {
    postId: postIds[1],
    comment: "Being direct isn't always bad, but maybe consider the delivery?",
    createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000)
  },
  {
    postId: postIds[1],
    comment: "Sounds like you might be hurting people's feelings without realizing it.",
    createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000)
  },
  
  // Comments for third post
  {
    postId: postIds[2],
    comment: "Self-reflection is good! Maybe try having one serious conversation this week?",
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000)
  },
  
  // Comments for fourth post
  {
    postId: postIds[3],
    comment: "There's a difference between having standards and being controlling.",
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000)
  },
  
  // Comments for fifth post
  {
    postId: postIds[4],
    comment: "Learning to set boundaries is hard but necessary. You got this!",
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000)
  },
  {
    postId: postIds[4],
    comment: "I relate to this so much. It's okay to put yourself first sometimes.",
    createdAt: new Date(Date.now() - 30 * 60 * 60 * 1000)
  }
];

db.comments.insertMany(sampleComments);
console.log('Inserted sample comments');

console.log('Database seeded successfully!');
