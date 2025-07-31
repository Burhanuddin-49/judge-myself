import Link from "next/link"
import { ArrowLeft, Scale, Users, AlertTriangle, Shield, Gavel } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Judge Myself | Anonymous Self-Discovery Platform",
  description:
    "Read the Terms of Service for Judge Myself. Understand your rights and responsibilities when using our anonymous feedback platform.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
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
              <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white mb-4">
                <Scale className="w-4 h-4 mr-2" />
                Legal Terms
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Please read these terms carefully before using Judge Myself. By using our platform, you agree to these
                terms.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="font-bold text-lg mb-2">Community First</h3>
                <p className="text-gray-600 text-sm">Respectful, honest feedback that helps everyone grow.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="font-bold text-lg mb-2">Anonymous & Safe</h3>
                <p className="text-gray-600 text-sm">No personal attacks or harassment. Keep it constructive.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Gavel className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="font-bold text-lg mb-2">Fair Use</h3>
                <p className="text-gray-600 text-sm">Use the platform responsibly and respect others' experiences.</p>
              </CardContent>
            </Card>
          </div>

          {/* Terms Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                By accessing and using Judge Myself ("the Platform"), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <p className="mb-4">
                These Terms of Service ("Terms") govern your use of our anonymous self-discovery platform operated by
                Burhanuddin ("we," "our," or "us").
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">Judge Myself is an anonymous platform that allows users to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Share descriptions of themselves anonymously</li>
                <li>Receive feedback through community voting using predefined tags</li>
                <li>Leave constructive comments on others' posts</li>
                <li>Participate in a community focused on self-discovery and honest feedback</li>
              </ul>

              <p className="mb-4">
                The service is provided "as is" and we reserve the right to modify, suspend, or discontinue the service
                at any time.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">User Conduct and Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">Acceptable Use</h3>
              <p className="mb-4">
                You agree to use Judge Myself only for lawful purposes and in a way that does not infringe the rights of
                others. You must:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Provide honest, constructive feedback</li>
                <li>Respect the anonymous nature of the platform</li>
                <li>Be respectful and considerate in your interactions</li>
                <li>Use appropriate language and avoid offensive content</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 mb-2">You must NOT:</p>
                    <ul className="list-disc pl-4 space-y-1 text-red-700">
                      <li>Post hate speech, harassment, or discriminatory content</li>
                      <li>Share personal information about yourself or others</li>
                      <li>Attempt to identify other anonymous users</li>
                      <li>Post spam, advertisements, or promotional content</li>
                      <li>Use the platform for illegal activities</li>
                      <li>Attempt to hack, disrupt, or damage the platform</li>
                      <li>Create multiple accounts to manipulate voting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Content and Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">Your Content</h3>
              <p className="mb-4">
                You retain ownership of the content you post on Judge Myself. However, by posting content, you grant us
                a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content on the
                platform.
              </p>

              <h3 className="text-xl font-semibold mb-3">Platform Content</h3>
              <p className="mb-4">
                The Judge Myself platform, including its design, features, and functionality, is owned by Burhanuddin
                and is protected by copyright and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold mb-3">Content Moderation</h3>
              <p className="mb-4">
                We reserve the right to remove any content that violates these terms or is deemed inappropriate for the
                platform. This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Content that violates our community guidelines</li>
                <li>Spam or promotional material</li>
                <li>Content that could harm other users</li>
                <li>Illegal or harmful content</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Privacy and Anonymity</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                Judge Myself is built on the principle of anonymity. We are committed to protecting your privacy and
                maintaining the anonymous nature of the platform.
              </p>

              <p className="mb-4">
                Please review our{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </Link>{" "}
                for detailed information about how we collect, use, and protect your information.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-blue-800">
                  <strong>Important:</strong> While we maintain anonymity on the platform, you are responsible for not
                  sharing personal information in your posts or comments.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Disclaimers and Limitations</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">Service Availability</h3>
              <p className="mb-4">
                We strive to keep Judge Myself available 24/7, but we cannot guarantee uninterrupted service. The
                platform may be temporarily unavailable due to maintenance, updates, or technical issues.
              </p>

              <h3 className="text-xl font-semibold mb-3">User-Generated Content</h3>
              <p className="mb-4">
                Judge Myself is a platform for user-generated content. We do not endorse, verify, or take responsibility
                for the accuracy or appropriateness of user posts and comments.
              </p>

              <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
              <p className="mb-4">
                To the fullest extent permitted by law, Judge Myself and its developer shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages resulting from your use of the
                platform.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                We reserve the right to terminate or suspend access to Judge Myself immediately, without prior notice,
                for any reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Violation of these Terms of Service</li>
                <li>Harmful or disruptive behavior</li>
                <li>Suspected fraudulent or illegal activity</li>
              </ul>

              <p className="mb-4">
                You may stop using Judge Myself at any time. Due to the anonymous nature of the platform, formal account
                deletion is not applicable.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material
                changes by posting the new terms on this page and updating the "Last updated" date.
              </p>

              <p className="mb-4">
                Your continued use of Judge Myself after any changes indicates your acceptance of the updated Terms of
                Service.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">
                These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes
                arising from these terms or your use of Judge Myself will be resolved through appropriate legal
                channels.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>

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
                <p className="text-sm text-gray-600 mt-4">
                  By using Judge Myself, you acknowledge that you have read, understood, and agree to be bound by these
                  Terms of Service.
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
