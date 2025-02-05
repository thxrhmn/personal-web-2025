import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import profileData from "./profileData"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto px-6 py-8 space-y-16 pt-16">
      {/* Hero Section */}
      <section id="hero" className="space-y-4 scroll-mt-16">
        <h1 className="text-4xl font-bold">{profileData.hero.name}</h1>
        <p className="text-xl text-muted-foreground">{profileData.hero.title}</p>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={profileData.hero.contactButton.href}>{profileData.hero.contactButton.text}</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={profileData.hero.resumeButton.href} target="_blank" rel="noopener noreferrer">
              <profileData.hero.resumeButton.icon className="mr-2 h-4 w-4" />
              {profileData.hero.resumeButton.text}
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4 pt-16 -mt-16 scroll-mt-16">
        <h2 className="text-2xl font-semibold">{profileData.about.title}</h2>
        <p className="text-muted-foreground">{profileData.about.description}</p>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="space-y-4 pt-16 -mt-16 scroll-mt-16">
        <h2 className="text-2xl font-semibold">{profileData.experience.title}</h2>
        <div className="space-y-4">
          {profileData.experience.items.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium">{item.company}</h3>
              <p className="text-sm text-muted-foreground">{item.duration}</p>
              <p className="font-medium">{item.position}</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-4 pt-16 -mt-16 scroll-mt-16">
        <h2 className="text-2xl font-semibold">{profileData.projects.title}</h2>
        <ul className="space-y-8">
          {profileData.projects.items.map((project, index) => (
            <li key={index} className="space-y-2">
              <h3 className="font-medium text-lg">
                <Link href={project.link} className="hover:underline">
                  {project.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">{project.date}</p>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stacks.map((stack, stackIndex) => (
                  <Badge key={stackIndex} variant="secondary">
                    {stack}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-4 pt-16 -mt-16 scroll-mt-16">
        <h2 className="text-2xl font-semibold">{profileData.skills.title}</h2>
        <div className="flex flex-wrap gap-2">
          {profileData.skills.items.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-4 pt-16 -mt-16 scroll-mt-16">
        <h2 className="text-2xl font-semibold">{profileData.contact.title}</h2>
        <div className="flex flex-wrap gap-2">
          {profileData.contact.items.map((item, index) => (
            <Button key={index} asChild variant="outline" size="sm">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <item.icon className="mr-2 h-4 w-4" /> {item.text}
              </a>
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}

