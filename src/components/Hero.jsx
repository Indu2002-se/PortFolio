import { Github, Linkedin, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/buddhi',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/buddhi',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/buddhi',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/buddhi',
      color: 'hover:text-pink-500'
    }
  ]

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              B
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Buddhi
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay-1">
            Software Engineer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Passionate about creating innovative solutions and building amazing digital experiences. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 animate-fade-in-delay-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${social.color}`}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <IconComponent size={24} />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

