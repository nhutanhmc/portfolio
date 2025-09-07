"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine which section is currently in view
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Đồ án", href: "#final-projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Close mobile menu if open
      setIsOpen(false)

      // Scroll to the target section
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the navbar height
        behavior: "smooth",
      })

      // Update URL hash without causing a jump
      window.history.pushState(null, "", href)

      // Update active section
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold tracking-tight" onClick={(e) => handleNavClick(e, "#")}>
              <span className="text-primary">Nhut Anh</span>
              <span className="text-muted-foreground">.dev</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <ModeToggle />
            </div>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
