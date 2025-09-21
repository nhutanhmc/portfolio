"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import anh8 from "../imgs/anh8.jpg"
export default function FinalProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const finalProjects = [
    {
      title: "Smart running",
      description:
        "A running app designed to support runners of all levels with personalized",
      image: anh8,
      technologies: ["Node.js", "Express.js", "postgre", "prisma", "Cloudinary", "Firebase", "Reactjs", "react native", "Redis", "socket.io", "OpenAI api", "Resend", "docker", "github action"],
      github: "https://github.com/SP25-SEP490-Capstone",
      demo: "/demo/jewelry-store",
      type: "Đồ án tốt nghiệp",
      year: "2024",
    },
  ]

  return (
    <section id="final-projects" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Graduation <span className="text-primary">Project</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {finalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg?height=400&width=600"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          {project.type}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="flex-grow">
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                            Technologys Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="flex gap-4 pt-0">
                        <Button asChild variant="default" size="sm" className="flex-1">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View code
                          </Link>
                        </Button>
                        {project.demo && (
                          <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Detail
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
