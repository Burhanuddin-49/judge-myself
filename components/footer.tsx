import Link from "next/link";
import { Github, Heart, Code } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12 mt-16"
      style={{ position: "relative", zIndex: 999 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Judge Myself 🧠
              </h3>
              <p className="text-gray-300 mb-4 max-w-md">
                The #1 anonymous self-discovery platform where you can share
                your authentic self and get honest feedback from the community.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>50K+ Users</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>1M+ Judgments</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/create"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Post About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feed"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Judge Others
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span>Developed with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>by</span>
                  <Link
                    href="https://github.com/Burhanuddin-49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Burhanuddin
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/Burhanuddin-49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>View on GitHub</span>
                </Link>
              </div>
            </div>

            <div className="text-center mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Judge Myself. All rights reserved.
                <span className="mx-2">•</span>
                Original concept and development by{" "}
                <Link
                  href="https://github.com/Burhanuddin-49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Burhanuddin-49
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
