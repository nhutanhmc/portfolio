import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import FinalProjects from "@/components/final-projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Nguyen Hoang Nhut Anh | Fullstack Developer | Web & Mobile Applications",
  description:
    "Portfolio of Nguyen Hoang Nhut Anh, a Fullstack Developer specializing in web and mobile applications with expertise in React, Node.js, and cloud technologies. Based in Ho Chi Minh City, Vietnam.",
  metadataBase: new URL("https://v0-nhutanhmc-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nguyen Hoang Nhut Anh | Fullstack Developer",
    description:
      "Portfolio of Nguyen Hoang Nhut Anh, a Fullstack Developer specializing in web and mobile applications with expertise in React, Node.js, and cloud technologies.",
    url: "https://v0-nhutanhmc-portfolio.vercel.app",
    siteName: "Nhut Anh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Hoang Nhut Anh | Fullstack Developer",
    description:
      "Portfolio of Nguyen Hoang Nhut Anh, a Fullstack Developer specializing in web and mobile applications with expertise in React, Node.js, and cloud technologies.",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FinalProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
