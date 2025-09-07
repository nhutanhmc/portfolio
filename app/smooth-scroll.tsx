"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Check if the URL has a hash on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          })
        }, 100)
      }
    }

    // Add smooth scrolling to all links
    const handleLinkClick = (e) => {
      const target = e.target.closest("a")

      if (target && target.hash && target.hash.startsWith("#") && document.querySelector(target.hash)) {
        e.preventDefault()
        const id = target.hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          })

          window.history.pushState(null, "", target.hash)
        }
      }
    }

    document.addEventListener("click", handleLinkClick)

    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}
