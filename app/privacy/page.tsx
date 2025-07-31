import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, Database, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Judge Myself | Anonymous Self-Discovery Platform",
  description:
    "Learn how Judge Myself protects your privacy and handles your data. We prioritize anonymity and user privacy in our self-discovery platform.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <div className="text-center mb-8">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Privacy First
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your privacy is our top priority. Learn how we protect your anonymity and handle your data.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Privacy Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Eye className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="font-bold text-lg mb-2">100% Anonymous</h3>
                <p className="text-gray-600 text-sm">
                  No personal information required. Your identity stays completely private.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Lock className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="font-bold text-lg mb-2">No Tracking</h3>
                <p className="text-gray-600 text-sm">
                  We don't use cookies or tracking technologies to monitor your behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Database className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="font-bold text-lg mb-2">Minimal Data</h3>
                <p className="text-gray-600 text-sm">
                  We only store what's necessary: your posts, votes, and comments.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Policy Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">What We Collect</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Posts:</strong> The text content you share about yourself
                </li>
                <li>
                  <strong>Votes:</strong> Your judgments on other people's posts using our tag system
                </li>
                <li>
                  <strong>Comments:</strong> Optional feedback you leave on posts
                </li>
                <li>
                  <strong>Technical Data:</strong> Basic server logs for security and performance (IP addresses are not
                  stored)
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">What We DON'T Collect</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Names, email addresses, or any personal identifiers</li>
                <li>Location data or device information</li>
                <li>Browsing history or cookies for tracking</li>
                <li>Social media profiles or external account information</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">We use the information we collect solely to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Display your posts in the community feed</li>
                <li>Show vote counts and comments on posts</li>
                <li>Maintain the platform's functionality and security</li>
                <li>Improve user experience and platform performance</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Important:</p>
                    <p className="text-blue-700">
                      We never sell, rent, or share your data with third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">We implement industry-standard security measures:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Encryption:</strong> All data is encrypted in transit and at rest
                </li>
                <li>
                  <strong>Secure Servers:</strong> Our database is hosted on secure, monitored servers
                </li>
                <li>
                  <strong>Access Control:</strong> Limited access to data with strict authentication
                </li>
                <li>
                  <strong>Regular Backups:</strong> Secure backups to prevent data loss
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">Since we operate anonymously, traditional data rights are limited, but you can:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Delete Content:</strong> Contact us to remove specific posts or comments
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of content you've created
                </li>
                <li>
                  <strong>Opt-Out:</strong> Stop using the platform at any time
                </li>
              </ul>

              <p className="text-sm text-gray-600">
                Note: Due to our anonymous nature, we cannot identify which content belongs to specific users without
                additional information.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">We use minimal third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Hosting:</strong> Vercel for application hosting
                </li>
                <li>
                  <strong>Database:</strong> MongoDB Atlas for data storage
                </li>
                <li>
                  <strong>Analytics:</strong> We do not use Google Analytics or similar tracking services
                </li>
              </ul>

              <p className="text-sm text-gray-600">
                These services have their own privacy policies and security measures in place.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                Judge Myself is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify users of any material changes by
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <p className="mb-4">
                Your continued use of Judge Myself after any changes indicates your acceptance of the updated Privacy
                Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Developer:</strong> Burhanuddin
                </p>
                <p className="mb-2">
                  <strong>GitHub:</strong>{" "}
                  <Link
                    href="https://github.com/Burhanuddin-49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://github.com/Burhanuddin-49
                  </Link>
                </p>
                <p className="text-sm text-gray-600">
                  Please allow 48-72 hours for a response to privacy-related inquiries.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
