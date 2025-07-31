"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Shield, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function CreatePostPage() {
  const [text, setText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text.trim(),
          isAnonymous,
        }),
      });

      if (response.ok) {
        // Add success animation
        const successDiv = document.createElement("div");
        successDiv.className =
          "fixed inset-0 bg-green-500/20 backdrop-blur-sm z-50 flex items-center justify-center animate-bounce-in";
        successDiv.innerHTML = `
          <div class="bg-white rounded-lg p-8 shadow-2xl text-center">
            <div class="text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-bold text-green-600 mb-2">Post Created!</h3>
            <p class="text-gray-600">Redirecting to feed...</p>
          </div>
        `;
        document.body.appendChild(successDiv);

        setTimeout(() => {
          router.push("/feed");
          document.body.removeChild(successDiv);
        }, 1500);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-slide-up">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                Describe Yourself{" "}
                <Sparkles className="inline w-8 h-8 text-yellow-400" />
              </h1>
              <p className="text-white/90 text-xl mb-6">
                Share your authentic self and let the community judge you
                anonymously
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-6 mb-6">
                <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  50K+ Active Users
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-400 to-red-500 text-white px-4 py-2">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  #1 Trending
                </Badge>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl animate-bounce-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tell us about yourself
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Be honest, be real. The more authentic you are, the better
                feedback you'll get.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <Textarea
                    placeholder="I'm hardworking but a little rude sometimes... or maybe I'm too nice and people take advantage of me... or I think I'm funny but my friends don't laugh at my jokes..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="min-h-40 resize-none text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl p-6 bg-gradient-to-br from-white to-purple-50"
                    maxLength={500}
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge
                      variant={text.length > 400 ? "destructive" : "secondary"}
                      className="bg-white/80 backdrop-blur-sm"
                    >
                      {text.length}/500
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
                  <div className="flex items-center space-x-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                    <div>
                      <Label
                        htmlFor="anonymous"
                        className="text-lg font-semibold text-gray-800"
                      >
                        Post anonymously
                      </Label>
                      <p className="text-sm text-gray-600">
                        Your identity will be completely hidden
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="anonymous"
                    checked={isAnonymous}
                    onCheckedChange={setIsAnonymous}
                    className="data-[state=checked]:bg-purple-600"
                  />
                </div>

                <div className="flex gap-4">
                  <Link href="/" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full py-4 text-lg border-2 border-gray-300 hover:bg-gray-50 font-semibold bg-transparent"
                    >
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    disabled={!text.trim() || isSubmitting}
                    className="flex-1 py-4 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Posting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Post & Get Judged
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="mt-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                💡 Tips for better feedback
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <p className="text-gray-700">
                      Be specific about traits you want feedback on
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <p className="text-gray-700">
                      Mention both positive and negative aspects
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <p className="text-gray-700">
                      Ask about situations where you're unsure
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <p className="text-gray-700">
                      Keep it under 500 characters for better engagement
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
