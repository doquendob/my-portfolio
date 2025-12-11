"use client"

import { ExternalLink, Github, Award, TrendingUp, Clock, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Real Estate Platform",
    description: "A full responsive Real Estate is a modern full-stack web application for managing property listings, built with .NET 8.0, MongoDB, and Next.js 14+.",
    longDescription: "A full responsive Real Estate modern full-stack web application for managing property listings, built with .NET 8.0, MongoDB, and Next.js 14+.",
    image: "/real-estate.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    githubFe: "https://github.com/doquendob/million_frontend",
    githubBe: "https://github.com/doquendob/million_backend",
    demo: "https://millionfrontend-git-main-diegooquendo35-7287s-projects.vercel.app/",
    metrics: [
      { label: "Load Time", value: "1.2s", icon: TrendingUp },
      { label: "Daily Users", value: "10K+", icon: Award }
    ],
    highlights: [
      "Real-time search with debouncing (500ms) for optimal performance",
      "Implemented server-side filtering by name, address, price range, type, status",
      "Create, read, update, delete properties",
      "Image upload (5MB max, jpg/png/gif/webp)",
      "Image preview and drag-drop support",
      "Form validation (frontend and backend)"
    ],
    status: "completed"
  },
]

const workInProgress = [
  {
    title: "Real Estate Platform - Production Features",
    description: "Adding advanced features and optimizations to the Real Estate platform for production deployment.",
    longDescription: "Enhancing the Real Estate platform with user authentication, advanced search filters, property analytics, payment integration, and performance optimizations for production readiness.",
    tags: [".NET 8.0", "MongoDB", "Next.js 14+", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
    progress: 70,
    todos: [
      { text: "Real-time search with debouncing", completed: true },
      { text: "Server-side filtering (name, address, price, type)", completed: true },
      { text: "CRUD operations for properties", completed: true },
      { text: "Image upload with validation (5MB max)", completed: true },
      { text: "Form validation (frontend & backend)", completed: true },
      { text: "User authentication & authorization", completed: false },
      { text: "Property favorites & saved searches", completed: false },
      { text: "Advanced analytics dashboard", completed: false },
      { text: "Payment gateway integration", completed: false },
      { text: "Email notifications system", completed: false },
      { text: "Mobile app version (React Native)", completed: false },
      { text: "Performance optimization & caching", completed: false },
      { text: "Production deployment & CI/CD", completed: false }
    ]
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A selection of projects that showcase my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
              >
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="aspect-video relative overflow-hidden rounded-lg border border-border bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-6">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubFe} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Frontend code
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubBe} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Backend code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10">
                        <metric.icon className="h-4 w-4 text-primary" />
                        <div>
                          <div className="text-sm font-semibold">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Work in Progress Section */}
          <div className="space-y-12 pt-16 border-t border-border">
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Wrench className="h-4 w-4" />
                <span className="text-sm font-medium">Currently Working On</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Work in Progress</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Exciting projects currently under development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {workInProgress.map((project) => (
                <div
                  key={project.title}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          <Clock className="h-3 w-3" />
                          {project.progress}%
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* TODO List */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-muted-foreground">Tasks</h5>
                      <div className="space-y-1.5">
                        {project.todos.map((todo, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div
                              className={`h-4 w-4 rounded border-2 flex items-center justify-center ${todo.completed
                                ? "bg-primary border-primary"
                                : "border-muted-foreground/30"
                                }`}
                            >
                              {todo.completed && (
                                <svg
                                  className="h-3 w-3 text-primary-foreground"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span className={todo.completed ? "line-through text-muted-foreground" : ""}>
                              {todo.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
