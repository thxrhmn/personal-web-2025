import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import profileData from "./profileData"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto px-6 py-8 space-y-6 pt-16">
      {/* Hero Section */}
      <section id="hero" className="scroll-mt-16">
        <div className="bg-card border-2 border-black shadow-solid p-6 transition-shadow duration-100 hover:shadow-solid-lg">
          <h1 className="text-4xl font-bold">{profileData.hero.name}</h1>
          <p className="text-xl text-muted-foreground">{profileData.hero.title}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button asChild>
              <a href={profileData.hero.contactButton.href}>{profileData.hero.contactButton.text}</a>
            </Button>
            <Button asChild>
              <a href={profileData.hero.resumeButton.href} target="_blank" rel="noopener noreferrer">
                <profileData.hero.resumeButton.icon className="mr-2 h-4 w-4" />
                {profileData.hero.resumeButton.text}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-16 -mt-16 scroll-mt-16">
        <div className="bg-card border-2 border-black shadow-solid p-6 transition-shadow duration-100 hover:shadow-solid-lg">
          <h2 className="text-2xl font-semibold">{profileData.about.title}</h2>
          <p className="text-muted-foreground mt-4">{profileData.about.description}</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="pt-16 -mt-16 scroll-mt-16">
        <div className="bg-card border-2 border-black shadow-solid p-6 transition-shadow duration-100 hover:shadow-solid-lg">
          <h2 className="text-2xl font-semibold">{profileData.experience.title}</h2>
          <div className="space-y-4 mt-4">
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
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="pt-16 -mt-16 scroll-mt-16">
        <div className="bg-card border-2 border-black shadow-solid p-6 transition-shadow duration-100 hover:shadow-solid-lg">
          <h2 className="text-2xl font-semibold">{profileData.education.title}</h2>
          <div className="space-y-4 mt-4">
            {profileData.education.items.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium">{item.institution}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                <p className="font-medium">{item.degree}</p>
                {item.date && <p className="text-sm text-muted-foreground mt-1">{item.date}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-16 -mt-16 scroll-mt-16">
        <div className="bg-card border-2 border-black shadow-solid p-6 transition-shadow duration-100 hover:shadow-solid-lg">
          <h2 className="text-2xl font-semibold">{profileData.projects.title}</h2>
          <ul className="space-y-8 mt-4">
            {profileData.projects.items.map((project, index) => (
              <li key={index} className="space-y-2">
                <h3 className="font-medium text-lg">
                  <Link href={project.link} className="hover:underline text-brand-purple">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{project.date}</p>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stacks.map((stack, stackIndex) => (
                    <Badge key={stackIndex}>
                      {stack}
                    </Badge>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-16 -mt-16 scroll-mt-16">
        <div className="bg-card border-2 border-black shadow-solid p-6 transition-shadow duration-100 hover:shadow-solid-lg">
          <h2 className="text-2xl font-semibold">{profileData.skills.title}</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {profileData.skills.items.map((skill, index) => (
              <Badge key={index}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-16 -mt-16 scroll-mt-16">
        <div className="bg-card border-2 border-black shadow-solid p-6 transition-shadow duration-100 hover:shadow-solid-lg">
          <h2 className="text-2xl font-semibold">{profileData.contact.title}</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {profileData.contact.items.map((item, index) => (
              <Button key={index} asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="mr-2 h-4 w-4" /> {item.text}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}