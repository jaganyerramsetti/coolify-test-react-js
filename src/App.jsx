import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeCard, setActiveCard] = useState(null)

  const features = [
    {
      id: 1,
      title: 'Lightning Fast',
      description: 'Built with Vite for instant hot module replacement',
      icon: '⚡',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Modern Design',
      description: 'Beautiful UI with smooth animations and transitions',
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Responsive',
      description: 'Works perfectly on all devices and screen sizes',
      icon: '📱',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Production Ready',
      description: 'Optimized build with Docker and Coolify deployment',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ]

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="logo">
            <span className="logo-icon">⚛️</span>
            <h1>React App</h1>
          </div>
          <p className="subtitle">Modern UI with Beautiful Design</p>
        </header>

        <main className="main-content">
          <div className="hero-section">
            <div className="counter-card">
              <h2>Interactive Counter</h2>
              <div className="counter-display">
                <span className="counter-value">{count}</span>
              </div>
              <div className="counter-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => setCount(count + 1)}
                >
                  Increment
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setCount(count - 1)}
                >
                  Decrement
                </button>
                <button 
                  className="btn btn-reset"
                  onClick={() => setCount(0)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="features-section">
            <h2 className="section-title">Features</h2>
            <div className="features-grid">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`feature-card ${activeCard === feature.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCard(feature.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ '--gradient': feature.gradient }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="info-section">
            <div className="info-card">
              <h3>🚀 Deployed with Coolify</h3>
              <p>This React application is containerized with Docker and ready for deployment on Coolify.</p>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>Built with React + Vite</p>
          <p className="footer-subtitle">Ready for production deployment</p>
        </footer>
      </div>
    </div>
  )
}

export default App

