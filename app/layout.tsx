import "./globals.css"
import { Inter } from "next/font/google"
import SchemaMarkup from "@/components/schema"
import Analytics from "@/components/analytics"
import SmoothScroll from "./smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Script to set theme before page renders to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <SmoothScroll />
        {children}
        <SchemaMarkup />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
