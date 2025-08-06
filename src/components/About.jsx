import { Code, Coffee, Heart, Lightbulb } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that stands the test of time"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely love what I do and it shows in every project I work on"
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Committed to continuous learning and delivering exceptional results"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate software engineer with a love for creating digital experiences that make a difference. 
              With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in software development began with curiosity and has evolved into a passion for 
                building innovative solutions. I believe that great software is not just about functionality, 
                but about creating experiences that users love and remember.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always excited about the 
                next challenge and the opportunity to learn something new.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div 
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl card-hover"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

