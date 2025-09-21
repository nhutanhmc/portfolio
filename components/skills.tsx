"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Database, Globe, Server, Smartphone, Cloud, Settings, ClipboardList } from "lucide-react"
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
      <Badge
        variant="secondary"
        className="px-4 py-2.5 text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-primary/10 hover:border-primary/20 border border-transparent max-w-[200px] whitespace-normal text-center leading-relaxed"
      >
        {skill.name}
      </Badge>

      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-72 p-4 bg-popover text-popover-foreground rounded-lg shadow-xl border border-border/50 backdrop-blur-sm"
        >
          <div className="text-sm leading-relaxed">{skill.description}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-popover border-r border-b border-border/50"></div>
        </motion.div>
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
        // {
        //   id: "python-django",
        //   name: "Python Django",
        //   description: "High-level Python web framework that encourages rapid development and clean, pragmatic design",
        // },
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
        { id: "redis", name: "redis", description: "Use as a cache to real-timeize the system" },
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
    // >>> NEW CATEGORY: Project & Issue Tracking <<<
    {
      id: "pm",
      name: "Project & Issue Tracking",
      icon: <ClipboardList className="h-5 w-5" />,
      skills: [
        {
          id: "jira",
          name: "Jira",
          description: "Issue tracking, Scrum/Kanban boards, roadmaps; mạnh về workflow & integration DevOps.",
        },
        {
          id: "linear",
          name: "Linear",
          description: "Trình quản lý issue nhanh, phím tắt mạnh; liên kết chặt với GitHub/PR.",
        },
        {
          id: "asana",
          name: "Asana",
          description: "Quản lý công việc theo dự án, timeline, dependency, goal tracking.",
        },
        { id: "trello", name: "Trello", description: "Kanban nhẹ nhàng, linh hoạt cho team nhỏ hoặc cá nhân." },
        { id: "clickup", name: "ClickUp", description: "Nền tảng all-in-one: task, doc, goal, sprint, dashboard." },
        {
          id: "notion",
          name: "Notion",
          description: "Doc + database + kanban; hợp viết PRD, spec và theo dõi task nhẹ.",
        },
        {
          id: "azure-boards",
          name: "Azure Boards",
          description: "Backlog/board/sprint tích hợp Azure Repos/Pipelines.",
        },
        {
          id: "github-projects",
          name: "GitHub Projects",
          description: "Board/table gắn trực tiếp với Issues/PR; automation bằng workflows.",
        },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Technical{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains
            </p>
          </div>

          <Tabs defaultValue="frontend" className="max-w-5xl mx-auto">
            <div className="mb-10 space-y-3">
              {/* First row of tabs */}
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 h-auto p-2 bg-muted/50 backdrop-blur-sm">
                {skillCategories.slice(0, 6).map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col md:flex-row items-center gap-2 p-3 md:p-2 text-xs md:text-sm font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                  >
                    {category.icon}
                    <span className="hidden sm:inline text-center">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Second row of tabs */}
              <TabsList className="grid grid-cols-1 gap-2 h-auto p-2 bg-muted/50 backdrop-blur-sm max-w-xs mx-auto">
                {skillCategories.slice(6).map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col md:flex-row items-center gap-2 p-3 md:p-2 text-xs md:text-sm font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                  >
                    {category.icon}
                    <span className="hidden sm:inline text-center">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">{category.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground">{category.name} Skills</h3>
                    </div>

                    {category.id === "pm" ? (
                      <div className="space-y-6">
                        {/* First row */}
                        <div className="flex flex-wrap gap-3 justify-start items-start">
                          {category.skills.slice(0, 4).map((skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                              <SkillBadge skill={skill} />
                            </motion.div>
                          ))}
                        </div>

                        {/* Second row */}
                        <div className="flex flex-wrap gap-3 justify-start items-start">
                          {category.skills.slice(4).map((skill, index) => (
                            <motion.div
                              key={index + 4}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: (index + 4) * 0.08 }}
                            >
                              <SkillBadge skill={skill} />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-3 justify-start items-start">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                          >
                            <SkillBadge skill={skill} />
                          </motion.div>
                        ))}
                      </div>
                    )}
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
