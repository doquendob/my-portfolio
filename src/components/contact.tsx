import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  { icon: Mail, label: "Email", value: "diego.oquendo35@gmail.com", href: "mailto:diego.oquendo35@gmail.com" },
  { icon: Phone, label: "Phone", value: "+57 323 716 0603", href: "tel:+573237160603" },
  { icon: MapPin, label: "Location", value: "Bogotá, Colombia", href: null },
]

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/doquendob" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/diego-oquendo-beltrán-19317522a" },
]

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Im always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <info.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{info.label}</span>
                </div>
                {info.href ? (
                  <a href={info.href} className="text-foreground hover:text-primary transition-colors block">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <Button key={social.label} variant="outline" size="lg" asChild>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                  {...(social.label === "Resume" && { download: "Diego_Oquendo_CV.pdf" })}
                >
                  <social.icon className="h-5 w-5" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-16 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Diego Oquendo Beltrán.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
