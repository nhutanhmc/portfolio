"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ava from "../imgs/anh7.png"
import anh1 from "../imgs/anh1.jpg"
import anh2 from "../imgs/anh2.jpg"
import anh3 from "../imgs/anh3.jpg"
import anh4 from "../imgs/anh4.jpg"
import anh5 from "../imgs/anh5.jpg"
import anh6 from "../imgs/anh6.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  BarChart3,
  Users,
  Shield,
  Globe,
  Play,
  Activity,
  TrendingUp,
  Bell,
  LayoutDashboard,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SmartRunningCoachDemo() {
  const [activeTab, setActiveTab] = useState("overview")

  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Personalized Training Plans",
      description: "Manage customized running schedules and health metrics tailored to each runner.",
    },
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: "AI Risk Analysis",
      description: "Analyze running data with AI to detect risks and provide safe recommendations.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Performance Tracking",
      description: "Track progress, statistics, and rankings to improve performance over time.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community & Expert Support",
      description: "Connect with experts and peers through posts, chats, and shared insights.",
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Smart Notifications",
      description: "Stay updated with real-time alerts, reminders, and progress updates.",
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
      title: "Admin Dashboard",
      description: "Manage accounts, certificates, posts, and system-wide activities with ease.",
    },
  ]

  const technologies = [
    { name: "Node.js", description: "Backend runtime environment", color: "bg-green-500" },
    { name: "PostgreSQL + Prisma", description: "Relational database with ORM", color: "bg-blue-700" },
    { name: "React.js", description: "Web frontend library", color: "bg-sky-500" },
    { name: "React Native", description: "Cross-platform mobile framework", color: "bg-indigo-500" },
    { name: "JWT", description: "Authentication & security", color: "bg-purple-500" },
    { name: "Redis", description: "Caching and real-time data store", color: "bg-red-600" },
    { name: "Firebase Cloud Messaging", description: "Push notifications service", color: "bg-yellow-500" },
    { name: "Resend", description: "Transactional email service", color: "bg-pink-500" },
    { name: "Cloudinary", description: "Image upload and optimization", color: "bg-orange-500" },
    { name: "OpenAI API", description: "AI-powered features", color: "bg-gray-700" },
    { name: "Docker", description: "Containerization & deployment", color: "bg-blue-400" },
  ]

  const screenshots = [
    {
      title: "Profile user",
      description: "",
      image: anh1,
    },
    {
      title: "Chat box with experts",
      description: "",
      image: anh2,
    },
    {
      title: "Community",
      description: "",
      image: anh3,
    },
    {
      title: "Analytics by AI",
      description: "",
      image: anh4,
    },
    {
      title: "Session running",
      description: "",
      image: anh5,
    },
    {
      title: "Dashboard",
      description: "",
      image: anh6,
    },
  ]


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/#final-projects">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Smart Running Coach</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/SP25-SEP490-Capstone/smart-running-coach-BackEnd" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Graduation Project 2025
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Smart Running Coach App</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Smart Running Coach is a running app designed to support runners of all levels with personalized, evidence-based training plans.
              The app combines structured guidance, real-time tracking, and injury prevention to help users train effectively and reach their goals safely.
              Enhanced feedback is powered by AI for personalized insights.
            </p>
          </div>

          {/* Main Screenshot */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden border shadow-2xl">
              <Image
                src={ava}
                alt="Smart Running Coach Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="screenshots">Screenshots</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    About the Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Smart Running Coach is a running app designed to support runners of all levels with
                    personalized, evidence-based training plans, focusing on real-time tracking and injury prevention.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Manage personalized training plans and health metrics</li>
                    <li>• AI-powered risk analysis with practical recommendations</li>
                    <li>• Track performance statistics and rankings</li>
                    <li>• Built-in support for experts and novice runners through posts and chat</li>
                    <li>• Administration tools for accounts, certificates, posts, news, and dashboard</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Security & Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Security</h4>
                      <p className="text-sm text-muted-foreground">
                        JWT authentication, bcrypt password hashing, email verification, input validation
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Performance</h4>
                      <p className="text-sm text-muted-foreground">
                        PostgreSQL with Prisma ORM, optimized queries, Redis caching
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Responsive</h4>
                      <p className="text-sm text-muted-foreground">
                        Compatible with desktop, tablet, and mobile devices
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {feature.icon}
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Technology Tab */}
          <TabsContent value="technology" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Tech Stack</CardTitle>
                  <CardDescription>Main technologies used</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                        <div>
                          <p className="font-medium">{tech.name}</p>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Architecture</CardTitle>
                  <CardDescription>MVC pattern and RESTful API</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend</h4>
                      <p className="text-sm text-muted-foreground mb-2">React.js with component-based architecture</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">React Hooks</Badge>
                        <Badge variant="outline" className="text-xs">Context API</Badge>
                        <Badge variant="outline" className="text-xs">Axios</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend</h4>
                      <p className="text-sm text-muted-foreground mb-2">Node.js + Express.js with RESTful API</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">MVC Pattern</Badge>
                        <Badge variant="outline" className="text-xs">Middleware</Badge>
                        <Badge variant="outline" className="text-xs">Validation</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Database</h4>
                      <p className="text-sm text-muted-foreground mb-2">PostgreSQL with Prisma ORM</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Schema Design</Badge>
                        <Badge variant="outline" className="text-xs">Indexing</Badge>
                        <Badge variant="outline" className="text-xs">Optimization</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Screenshots Tab */}
          <TabsContent value="screenshots" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative aspect-[9/16] bg-muted">  {/* hoặc aspect-[3/4], aspect-square */}
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        fill
                        className="object-contain"     // KHÔNG kéo dãn
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{screenshot.title}</CardTitle>
                      <CardDescription>{screenshot.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Live Demo Section */}
        <section id="live-demo" className="mb-12">
          <Card>
            <CardHeader className="text-center">
              <CardDescription>Try the system with demo accounts</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">Demo Login Information:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Runner:</p>
                    <p>Email: thienbao860</p>
                    <p>Password: password123</p>
                  </div>
                  <div>
                    <p className="font-medium">Expert:</p>
                    <p>Email: thienbao860ex</p>
                    <p>Password: password</p>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="https://github.com/SP25-SEP490-Capstone/smart-running-coach-BackEnd" target="_blank">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Open Demo
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Interested in this project?</h3>
              <p className="text-muted-foreground mb-6">
                Contact me to discuss similar projects or collaboration opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/#contact">Contact Now</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#projects">View More Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
