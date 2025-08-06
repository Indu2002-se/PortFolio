import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Java Development",
      skills: ["Java", "Java  FX", "Spring Boot", "Java Swing"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development", 
      skills: ["Node.js", "Java","SQL" ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: ["MongoDB",  "MySQL", "AWS", "Firebase", "Docker"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [ "Android", "Progressive Web Apps"],
      color: "from-orange-500 to-red-500"
    },
  
   
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and best practices to stay at the forefront of software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

