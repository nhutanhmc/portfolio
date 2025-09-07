import Link from "next/link"
import { Github, Linkedin, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Nhut Anh</span>
              <span className="text-muted-foreground">.dev</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {currentYear} Nguyen Hoang Nhut Anh. All rights reserved.
            </p>
            <address className="not-italic text-sm text-muted-foreground mt-2">
              Ho Chi Minh City, Vietnam
              <br />
              Phone:{" "}
              <a href="tel:0342894891" className="hover:text-primary">
                0342894891
              </a>
            </address>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/nhutanhmc" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/anh-nguyen" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://facebook.com/nhutanh" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com/nhutanh" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://instagram.com/nhutanh" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://youtube.com/@nhutanh" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:nhutanhmc@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
