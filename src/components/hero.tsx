"use client"

import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl w-full">
        <div className="space-y-8">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              {`Diego Oquendo Beltrán `}
              <span className="text-primary inline-block animate-pulse">{` { }`}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Senior Fullstack Developer with <span className="font-semibold text-foreground">7+ years</span> crafting
              high-performance web applications. Specialized in <span className="font-semibold text-foreground">React ecosystems</span> and
              <span className="font-semibold text-foreground"> cloud architecture</span>, delivering solutions that serve
              <span className="font-semibold text-foreground"> 20,000+ users daily</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/documents/Diego_Oquendo_CV.pdf" download="Diego_Oquendo_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Button size="icon-lg" variant="ghost" asChild className="hover:text-primary">
              <a href="https://github.com/doquendob" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button size="icon-lg" variant="ghost" asChild className="hover:text-primary">
              <a href="https://www.linkedin.com/in/diego-oquendo-beltrán-19317522a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
