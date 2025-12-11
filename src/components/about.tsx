"use client"

import { Code2, Database, Zap, Shield, Boxes, Brain, Award, Briefcase, GraduationCap, Heart } from "lucide-react"

const highlights = [
  {
    icon: Briefcase,
    title: "7+ Years Experience",
    description: "Building scalable web applications for international companies"
  },
  {
    icon: Award,
    title: "20,000+ Users Served",
    description: "Applications used by thousands of users daily"
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices"
  },
  {
    icon: Heart,
    title: "Passion for Code",
    description: "Creating elegant solutions to complex problems"
  }
]

const skills = [
  {
    icon: Code2,
    title: "Frontend Excellence",
    description:
      "Expert in React.js, TypeScript, and modern JavaScript. Improved application performance by 30% through code splitting and optimization.",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description:
      "Advanced Node.js, Fastify, and SQL expertise. Built scalable microservices serving 20,000+ active users.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Specialized in lazy loading, component optimization, and database indexing for high-traffic applications.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Resolved 300+ critical security vulnerabilities. Experience in RLS and secure financial data transmissions.",
  },
  {
    icon: Boxes,
    title: "DevOps & CI/CD",
    description: "Proficient with Docker, AWS, GCP, and automated deployment pipelines for consistent delivery.",
  },
  {
    icon: Brain,
    title: "AI-Enhanced Development",
    description: "Leveraging GitHub Copilot, Claude AI, and Cursor to enhance a faster development process and improve efficiency and code quality.",
  },
]

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24 bg-muted/30">
      <div className="max-w-6xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Im a <span className="font-semibold text-foreground">Senior Fullstack Developer</span>,
                specializing in building exceptional digital solutions. With over 7 years of experience, I have had the privilege
                of working on diverse personal projects ranging from e-commerce platforms to enterprise analytics dashboards.
              </p>
              <p>
                My expertise lies in the <span className="font-semibold text-foreground">React ecosystem</span>, modern
                <span className="font-semibold text-foreground"> JavaScript/TypeScript</span>, and
                <span className="font-semibold text-foreground"> cloud architecture</span>. Im passionate about writing clean,
                maintainable code and creating seamless user experiences that make a real impact.
              </p>
              <p>
                When Im not coding, you will find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.title} className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <skill.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold">Education</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-lg font-semibold">Software Engineer</h4>
                <p className="text-muted-foreground">Compensar University • 2021-2022</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-semibold">Software Technologist</h4>
                <p className="text-muted-foreground">Compensar University • 2020-2021</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-semibold">Software Technician</h4>
                <p className="text-muted-foreground">Compensar University • 2015-2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
