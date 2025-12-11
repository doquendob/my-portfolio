"use client"

import { 
  Code2, 
  Database, 
  Cloud, 
  GitBranch,
  Server,
  Box,
  Bot
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "TanStack React Query"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Fastify", "GraphQL", "REST APIs", "Microservices"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Redis", "Prisma", "SQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "GCP", "Docker", "CI/CD", "GitHub Actions", "Vercel"]
  },
  {
    title: "Testing",
    icon: Box,
    skills: ["Jest", "React Testing Library", "Cypress", "Unit Testing", "E2E Testing"]
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Figma", "Agile/Scrum", "Webpack", "Vite"]
  },
  {
    title: "AI Tools",
    icon: Bot,
    skills: ["GitHub Copilot", "Claude AI", "Cursor"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to build high-quality personal&professional web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div 
                key={category.title} 
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
