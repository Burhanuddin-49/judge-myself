import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Brain, Users, TrendingUp, Star } from "lucide-react";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header with trending badge */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-bold animate-pulse-glow">
                <TrendingUp className="w-4 h-4 mr-2" />
                #1 TRENDING SELF-DISCOVERY PLATFORM
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl">
              Judge Myself 🧠
            </h1>

            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-semibold drop-shadow-lg">
              Describe yourself. Let the world judge you anonymously.
            </p>

            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join <span className="font-bold text-yellow-300">50,000+</span>{" "}
              people discovering their true selves through honest, anonymous
              feedback
            </p>

            {/* Social proof */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <Users className="w-5 h-5" />
                <span className="font-semibold">50K+ Users</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Heart className="w-5 h-5 text-red-300" />
                <span className="font-semibold">1M+ Judgments</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Main CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 animate-bounce-in">
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 neon-glow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-float">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  📝 Post About Me
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Share your authentic self and discover how others perceive you
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/create">
                  <Button
                    size="lg"
                    className="w-full text-lg py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Describe Yourself
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-3">
                  ✨ 100% Anonymous • No Sign-up Required
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 neon-glow">
              <CardHeader className="text-center pb-4">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  ⚖️ Start Judging
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Browse posts and share your honest, anonymous opinions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/feed">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-lg py-6 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg bg-transparent"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Judge Others
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-3">
                  🎯 Real Feedback • Honest Opinions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="glass-effect border-white/20 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-bold mb-2">100% Anonymous</h3>
                <p className="text-white/80">
                  Share your true self without fear of judgment from people you
                  know
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🏷️</div>
                <h3 className="text-xl font-bold mb-2">Smart Tags</h3>
                <p className="text-white/80">
                  Get categorized feedback: Honest, Kind, Smart, Toxic, and more
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-2">Real Comments</h3>
                <p className="text-white/80">
                  Receive detailed, honest feedback from the community
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How it works */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-slide-up">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                How Judge Myself Works
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Join the viral self-discovery movement that's taking the
                internet by storm
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    ✍️
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    1. Describe Yourself
                  </h3>
                  <p className="text-gray-600">
                    Write a few honest sentences about your personality, habits,
                    or anything you want feedback on.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    🏷️
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    2. Get Tagged
                  </h3>
                  <p className="text-gray-600">
                    The community judges you using tags like Honest, Kind,
                    Smart, Toxic, Confident, and more.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    💡
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    3. Discover Insights
                  </h3>
                  <p className="text-gray-600">
                    See how others perceive you and gain valuable insights about
                    your personality and behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Footer */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to discover your true self?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of people getting honest feedback about who they
              really are
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/create">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  🚀 Start Your Journey
                </Button>
              </Link>
              <Link href="/feed">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold shadow-2xl transform hover:scale-105 transition-all duration-200 bg-transparent"
                >
                  👀 Browse Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
