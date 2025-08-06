import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Projects = () => {
  const projects = [
    {
      title: "GYM Java Swing",
      description: "A Gym Management System developed using Java Swing.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Swing"],
      githubUrl: "https://github.com/Indu2002-se/GYM-java-Swing-",
      date: "2023"
    },
    {
      title: "Little Bag Shop OOP",
      description: "A Bag Shop application developed using Object-Oriented Programming principles.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "OOP"],
      githubUrl: "https://github.com/Indu2002-se/Little-Bag-Shop-OOP",
      date: "2023"
    },
    {
      title: "Hospital Management System",
      description: "A Hospital Management System to manage patient records, appointments, and other hospital operations.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Database"],
      githubUrl: "https://github.com/Indu2002-se/Hospital-Management-System",
      date: "2023"
    },
    {
      title: "PortStential",
      description: "A portfolio website template.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Indu2002-se/portStential",
      date: "2023"
    }
  ]

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my work, demonstrating expertise across different technologies and domains
            </p>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleProjectClick(project.githubUrl)}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                    >
                      {tech}
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

export default Projects

