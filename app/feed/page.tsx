"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  MessageCircle,
  Clock,
  TrendingUp,
  FlameIcon as Fire,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/footer";

interface Post {
  _id: string;
  text: string;
  isAnonymous: boolean;
  createdAt: string;
  votes: {
    honest: number;
    toxic: number;
    smart: number;
    kind: number;
    confident: number;
    confused: number;
    fake: number;
  };
  commentCount?: number;
  totalVotes?: number;
}

const TAGS = [
  {
    name: "honest",
    emoji: "✅",
    label: "Honest",
    color: "from-green-400 to-green-600",
  },
  {
    name: "toxic",
    emoji: "❌",
    label: "Toxic",
    color: "from-red-400 to-red-600",
  },
  {
    name: "smart",
    emoji: "💡",
    label: "Smart",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "kind",
    emoji: "🟢",
    label: "Kind",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    name: "confident",
    emoji: "🔥",
    label: "Confident",
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "confused",
    emoji: "⚠️",
    label: "Confused",
    color: "from-amber-400 to-amber-600",
  },
  {
    name: "fake",
    emoji: "🎭",
    label: "Fake",
    color: "from-purple-400 to-purple-600",
  },
];

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [isLoading, setIsLoading] = useState(true);
  const [votingPost, setVotingPost] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [sortBy]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/api/posts?sort=${sortBy}`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTagVote = async (postId: string, tag: string) => {
    setVotingPost(postId);
    try {
      const response = await fetch(`/api/posts/postId/${postId}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tag }),
      });

      if (response.ok) {
        // Add visual feedback
        const button = document.querySelector(`[data-vote="${postId}-${tag}"]`);
        if (button) {
          button.classList.add("animate-bounce-in");
          setTimeout(() => {
            button.classList.remove("animate-bounce-in");
          }, 600);
        }

        // Refresh posts to update counts
        fetchPosts();
      }
    } catch (error) {
      console.error("Error voting:", error);
    } finally {
      setVotingPost(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">
            Loading amazing posts...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-slide-up">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">
                  Judge Others{" "}
                  <Fire className="inline w-8 h-8 text-orange-400" />
                </h1>
                <p className="text-white/90 text-lg">
                  Vote on posts using tags and leave honest comments
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {posts.length} Active Posts
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-400 to-red-500 text-white">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Live Voting
                  </Badge>
                </div>
              </div>

              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">🕒 Newest</SelectItem>
                    <SelectItem value="most-judged">🔥 Most Judged</SelectItem>
                  </SelectContent>
                </Select>
                <Link href="/create">
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-200">
                    ✨ Post About Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.length === 0 ? (
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="text-center py-16">
                  <div className="text-6xl mb-4">🎭</div>
                  <p className="text-gray-500 text-xl mb-6">
                    No posts yet. Be the first to share!
                  </p>
                  <Link href="/create">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold"
                    >
                      Create First Post
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              posts.map((post: any, index) => (
                <Card
                  key={post._id}
                  className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock className="w-4 h-4" />
                          {formatDate(post.createdAt)}
                        </div>
                        {post?.totalVotes && post?.totalVotes > 10 ? (
                          <Badge className="bg-gradient-to-r from-red-400 to-pink-500 text-white animate-pulse">
                            🔥 HOT
                          </Badge>
                        ) : (
                          ""
                        )}
                      </div>
                      <Badge
                        variant="secondary"
                        className={
                          post.isAnonymous
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }
                      >
                        {post.isAnonymous ? "🎭 Anonymous" : "👤 Public"}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-900 leading-relaxed text-lg font-medium">
                      {post.text}
                    </p>

                    {/* Tag Voting */}
                    <div>
                      <p className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                        <span>Judge this person:</span>
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {TAGS.map((tag) => (
                          <Button
                            key={tag.name}
                            data-vote={`${post._id}-${tag.name}`}
                            variant="outline"
                            size="sm"
                            onClick={() => handleTagVote(post._id, tag.name)}
                            disabled={votingPost === post._id}
                            className={`relative overflow-hidden border-2 hover:scale-110 transition-all duration-200 bg-gradient-to-r ${tag.color} text-white border-transparent hover:shadow-lg font-semibold`}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              {tag.emoji} {tag.label}
                              {post.votes[tag.name] > 0 && (
                                <Badge
                                  variant="secondary"
                                  className="ml-1 text-xs bg-white/20 text-white"
                                >
                                  {post.votes[tag.name]}
                                </Badge>
                              )}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="font-semibold">
                            {post.totalVotes || 0} votes
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          <span className="font-semibold">
                            {post.commentCount || 0} comments
                          </span>
                        </div>
                      </div>
                      <Link href={`/post/${post._id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 font-semibold transform hover:scale-105 transition-all duration-200"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Floating Action Button */}
          <div className="fixed bottom-8 right-8">
            <Link href="/create">
              <Button
                size="lg"
                className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-2xl animate-pulse-glow transform hover:scale-110 transition-all duration-200"
              >
                <span className="text-2xl">✨</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
