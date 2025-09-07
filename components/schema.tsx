export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nguyen Hoang Nhut Anh",
          url: "https://v0-nhutanhmc-portfolio.vercel.app",
          jobTitle: "Fullstack Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ho Chi Minh City",
            addressCountry: "Vietnam",
          },
          email: "nhutanhmc@gmail.com",
          telephone: "0342894891",
          sameAs: ["https://github.com/nhutanhmc", "https://linkedin.com/in/anh-nguyen-296b53333"],
          knowsAbout: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "React Native", "Java Spring Boot"],
        }),
      }}
    />
  )
}
