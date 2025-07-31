"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
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
}

interface Comment {
  _id: string;
  comment: string;
  createdAt: string;
}

const TAGS = [
  { name: "honest", emoji: "✅", label: "Honest" },
  { name: "toxic", emoji: "❌", label: "Toxic" },
  { name: "smart", emoji: "💡", label: "Smart" },
  { name: "kind", emoji: "🟢", label: "Kind" },
  { name: "confident", emoji: "🔥", label: "Confident" },
  { name: "confused", emoji: "⚠️", label: "Confused" },
  { name: "fake", emoji: "🎭", label: "Fake" },
];

export default function PostDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | any>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchPostAndComments();
    }
  }, [params.id]);

  const fetchPostAndComments = async () => {
    try {
      const response = await fetch(`/api/posts/${params.id}`);
      const data = await response.json();
      setPost(data.post);
      setComments(data.comments);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTagToggle = (tagName: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagName)
        ? prev.filter((t) => t !== tagName)
        : [...prev, tagName]
    );
  };

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTags.length === 0 && !newComment.trim()) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: params.id,
          voteTags: selectedTags,
          comment: newComment.trim(),
        }),
      });

      // Reset form and refresh data
      setSelectedTags([]);
      setNewComment("");
      fetchPostAndComments();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTagCounts = () => {
    const counts: Record<string, number> = {};
    comments.forEach((f) => {
      //f.voteTags.forEach((tag) => {
      //  counts[tag] = (counts[tag] || 0) + 1
      //})
    });
    return counts;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      date.toLocaleDateString() +
      " at " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 mb-4">Post not found</p>
            <Link href="/feed">
              <Button>Back to Feed</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const tagCounts = getTagCounts();

  const handleTagVote = async (tag: string) => {
    try {
      await fetch(`/api/posts/postId/${params.id}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tag }),
      });
      // Refresh data
      fetchPostAndComments();
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: params.id,
          comment: newComment.trim(),
        }),
      });

      // Reset form and refresh data
      setNewComment("");
      fetchPostAndComments();
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/feed"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Feed
            </Link>
          </div>

          {/* Original Post */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Original Post</CardTitle>
                <Badge variant="secondary">
                  {post.isAnonymous ? "Anonymous" : "Public"}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {formatDate(post.createdAt)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900 leading-relaxed text-lg">
                {post.text}
              </p>
            </CardContent>
          </Card>

          {/* Tag Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Community Judgment</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.values(post.votes).every((count) => count === 0) ? (
                <p className="text-gray-500">
                  No votes yet. Be the first to judge!
                </p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {TAGS.map((tag) => {
                    const count = post.votes[tag.name] || 0;
                    if (count === 0) return null;
                    return (
                      <Badge
                        key={tag.name}
                        variant="outline"
                        className="text-base py-2 px-4"
                      >
                        {tag.emoji} {tag.label} ({count})
                      </Badge>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Add Feedback */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Leave Your Judgment</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitComment} className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Vote on this person:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TAGS.map((tag) => (
                      <Button
                        key={tag.name}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleTagVote(tag.name)}
                        className="hover:bg-purple-50 hover:border-purple-300"
                      >
                        {tag.emoji} {tag.label}
                        {post.votes[tag.name] > 0 && (
                          <Badge variant="secondary" className="ml-1 text-xs">
                            {post.votes[tag.name]}
                          </Badge>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Optional comment:
                  </p>
                  <Textarea
                    placeholder="Share your thoughts (optional)..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="resize-none"
                    maxLength={200}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {newComment.length}/200 characters
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!newComment.trim() || isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Submitting..." : "Add Comment"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* All Comments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Comments ({comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {comments.length === 0 ? (
                <p className="text-gray-500">No comments yet.</p>
              ) : (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div
                      key={comment._id}
                      className="border-b pb-4 last:border-b-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
