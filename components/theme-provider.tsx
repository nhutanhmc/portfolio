"use client"

export function ThemeProvider({ children }) {
  return children
}

export const useTheme = () => {
  return {
    theme: typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light",
    setTheme: (theme) => {
      if (typeof window !== "undefined") {
        if (theme === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme", theme)
      }
    },
  }
}
