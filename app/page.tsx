import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Heart, MessageCircle, BookOpen, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-800 dark:text-slate-200">SerenitySpace</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
            >
              About
            </Link>
            <ThemeSwitcher />
            <a
              href="https://serenityspace-three.vercel.app/signup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
              Get Started
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Mental Health Care Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
              Your Mental Health{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Companion
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              A comprehensive mental health care application designed to support you in managing anxiety, stress, and
              depression. Get personalized assessments, AI-powered recommendations, and compassionate support on your
              wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://serenityspace-three.vercel.app/signup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-lg px-8"
                >
                  Start Your Journey
                </Button>
              </a>
                <a
                href="https://serenityspace-three.vercel.app/login/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800"
                >
                  Sign In
                </Button>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Discover the tools and resources designed to support your journey toward better mental health and
              emotional well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-800 dark:text-slate-100">Mental Health Assessments</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Take comprehensive assessments to understand your mental health status and track progress over time.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-800 dark:text-slate-100">AI Chatbot Support</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Get 24/7 support from our AI-powered chatbot trained to provide empathetic mental health guidance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-800 dark:text-slate-100">AI-Powered Recommendations</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Receive personalized recommendations tailored to your specific mental health needs and goals.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-800 dark:text-slate-100">Mood Journaling</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Track your emotions and thoughts with guided journaling prompts and mood tracking tools.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-800 dark:text-slate-100">Anxiety & Stress Management</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Access evidence-based techniques and exercises specifically designed to manage anxiety and stress.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-800 dark:text-slate-100">Depression Support</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Find resources, coping strategies, and professional support for managing depression symptoms.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              About SerenitySpace
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              SerenitySpace is a comprehensive mental health care platform designed to make mental wellness accessible
              to everyone. We combine evidence-based therapeutic approaches with cutting-edge AI technology to provide
              personalized support for individuals managing anxiety, stress, and depression.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                To democratize mental health care by providing AI-powered, evidence-based tools and support that help
                individuals manage their mental wellness journey with confidence and compassion.
              </p>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Key Features</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Comprehensive mental health assessments
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  AI-powered personalized recommendations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Interactive journaling and mood tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  24/7 AI chatbot support
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Start Your Journey</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Join thousands of users who have improved their mental wellness with SerenitySpace.
                </p>
                <a
                  href="https://serenityspace-three.vercel.app/signup/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                  Get Started Today
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-950 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">SerenitySpace</span>
              </div>
              <p className="text-slate-300">
                Your comprehensive mental health care platform for anxiety, stress, and depression support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Mental Health Assessments</li>
                <li>AI Chatbot Support</li>
                <li>Mood Journaling</li>
                <li>Personalized Recommendations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Help Center</li>
                <li>Community Guidelines</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Newsletter</li>
                <li>Social Media</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2024 SerenitySpace. All rights reserved.</p>
            <p>Made for BuildVerse Hackathon by Mohammed Shaik Sahil and Mohammed Ifaanuddin</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
