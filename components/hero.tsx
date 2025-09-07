"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "./animated-background"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Fullstack Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })

      window.history.pushState(null, "", href)
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-shadow-sm">
            Nguyễn Hoàng Nhựt Anh
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary mb-6 h-12 text-shadow-sm">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-background/40 dark:bg-background/30 p-4 rounded-lg shadow-lg">
            Building high-performance web and mobile applications with modern technologies. Passionate about creating
            elegant solutions to complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="shadow-lg" onClick={(e) => handleNavClick(e, "#contact")}>
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-sm bg-background/40 dark:bg-background/20 shadow-lg border-primary/20"
              onClick={(e) => handleNavClick(e, "#projects")}
            >
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="bg-background/40 backdrop-blur-sm hover:bg-background/60 shadow-md"
            >
              <a href="https://github.com/nhutanhmc" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="bg-background/40 backdrop-blur-sm hover:bg-background/60 shadow-md"
            >
              <a href="https://www.linkedin.com/in/anh-nguyen-296b53333/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="bg-background/40 backdrop-blur-sm hover:bg-background/60 shadow-md"
            >
              <a href="mailto:nhutanhmc@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="bg-background/40 backdrop-blur-sm hover:bg-background/60 shadow-md"
          onClick={(e) => handleNavClick(e, "#about")}
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </div>
    </section>
  )
}
