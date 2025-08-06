import { Github, Linkedin, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const canvasRef = useRef(null)

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Indu2002-se',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/buddhi-withanage-6302302a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/15jzXfgQts/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/indumina_b_?igsh=ZzNvczh5dHp4Y202',
      color: 'hover:text-pink-500'
    }
  ]

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // 3D Background Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system for 3D effect
    const particles = []
    const particleCount = 50

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.vz = Math.random() * 2 + 1
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.z -= this.vz

        if (this.z <= 0) {
          this.z = 1000
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        }

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2
        const y = (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2
        const size = this.size * (1000 / this.z)

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          
          // Create colorful particles
          const colors = [
            `rgba(59, 130, 246, ${this.opacity * (1000 / this.z)})`, // Blue
            `rgba(147, 51, 234, ${this.opacity * (1000 / this.z)})`, // Purple
            `rgba(236, 72, 153, ${this.opacity * (1000 / this.z)})`, // Pink
            `rgba(34, 197, 94, ${this.opacity * (1000 / this.z)})`,  // Green
            `rgba(249, 115, 22, ${this.opacity * (1000 / this.z)})`, // Orange
          ]
          const colorIndex = Math.floor((this.x + this.y) % colors.length)
          ctx.fillStyle = colors[colorIndex]
          ctx.fill()
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30" style={{ zIndex: 2 }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Buddhi
              </span>
            </h1>

            {/* Subtitle with typing effect */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 animate-fade-in-delay-1">
              <span className="border-r-2 border-blue-500 pr-2 animate-pulse">Software Engineer</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-delay-2">
              Passionate about creating innovative solutions and building amazing digital experiences. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-delay-3">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in-delay-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <button
                    key={social.name}
                    onClick={() => handleSocialClick(social.url)}
                    className="relative p-4 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl group"
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <IconComponent size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-2">
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {/* Replace this with your actual image */}
                  <img 
                    src="/pro.jpg" 
                    alt="Buddhi Profile" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback gradient circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-8xl font-bold" style={{ display: 'none' }}>
                    B
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

