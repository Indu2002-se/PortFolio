import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-lg font-semibold">Buddhi</span>
          </div>
          <p className="text-gray-400 mb-4">
            Software Engineer passionate about creating amazing digital experiences
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Buddhi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
