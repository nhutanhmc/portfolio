"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Database, Globe, Server, Smartphone, Cloud, Settings } from "lucide-react"
import { useState } from "react"

// Custom skill badge component with tooltip
function SkillBadge({ skill }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)} // Toggle on click for mobile
    >
      <Badge variant="secondary" className="px-4 py-2 text-sm font-medium cursor-pointer">
        {skill.name}
      </Badge>

      {showTooltip && (
        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-popover text-popover-foreground rounded-md shadow-lg border">
          <div className="text-sm">{skill.description}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-popover border-r border-b"></div>
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        {
          id: "react",
          name: "React.js",
          description: "A JavaScript library for building user interfaces with component-based architecture",
        },
        {
          id: "nextjs",
          name: "Next.js",
          description: "React framework that enables server-side rendering and static site generation",
        },
        {
          id: "html-css",
          name: "HTML/CSS",
          description: "Core web technologies for structure and styling of web pages",
        },
        {
          id: "javascript",
          name: "JavaScript",
          description: "Programming language that enables interactive web pages and applications",
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapidly building custom designs",
        },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        {
          id: "nodejs",
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side applications",
        },
        { id: "expressjs", name: "Express.js", description: "Minimal and flexible Node.js web application framework" },
        {
          id: "spring-boot",
          name: "Java Spring Boot",
          description: "Framework to create stand-alone, production-grade Spring-based applications",
        },
        {
          id: "rest-api",
          name: "RESTful APIs",
          description: "Architectural style for designing networked applications",
        },
        {
          id: "websocket",
          name: "WebSocket",
          description: "Protocol providing full-duplex communication channels over a single TCP connection",
        },
      ],
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      skills: [
        {
          id: "react-native",
          name: "React Native",
          description: "Framework for building native mobile apps using React",
        },
        {
          id: "expo",
          name: "Expo",
          description: "Platform for making universal native apps for Android, iOS, and the web",
        },
        {
          id: "mobile-ui",
          name: "Mobile UI/UX",
          description: "Design principles and practices specific to mobile interfaces",
        },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        {
          id: "mongodb",
          name: "MongoDB",
          description: "NoSQL database program using JSON-like documents with optional schemas",
        },
        { id: "mysql", name: "MySQL", description: "Open-source relational database management system" },
        { id: "sql-server", name: "SQL Server", description: "Microsoft's relational database management system" },
        {
          id: "postgresql",
          name: "PostgreSQL",
          description: "Powerful, open source object-relational database system",
        },
      ],
    },
    {
      id: "cloud",
      name: "Cloud",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        {
          id: "firebase",
          name: "Firebase",
          description: "Google's platform for mobile and web application development",
        },
        {
          id: "mongodb-cloud",
          name: "MongoDB Cloud",
          description: "Cloud-hosted MongoDB service with automated deployment and scaling",
        },
        { id: "supabase", name: "Supabase", description: "Open source Firebase alternative with PostgreSQL database" },
        { id: "cloudinary", name: "Cloudinary", description: "Cloud-based image and video management service" },
        { id: "railway", name: "Railway", description: "Infrastructure platform for deploying apps and databases" },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Automation",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        {
          id: "redis",
          name: "redis",
          description: "Use as a cache to real-timeize the system",
        },
        {
          id: "github-actions",
          name: "GitHub Actions",
          description: "CI/CD platform integrated with GitHub repositories",
        },
        {
          id: "cicd",
          name: "CI/CD",
          description: "Practices of continuous integration and continuous delivery/deployment",
        },
        {
          id: "automation",
          name: "Automation",
          description: "Process of automatically building, testing, and deploying applications",
        },
        {
          id: "docker",
          name: "docker",
          description: "Containerization platform for developing, shipping, and running applications",
        },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
            <TabsList className="flex flex-wrap gap-2 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      {category.icon}
                      {category.name} Skills
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <SkillBadge skill={skill} />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
