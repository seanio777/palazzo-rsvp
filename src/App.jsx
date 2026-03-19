import { useState } from 'react'
import './PalazzoTheme.css'

function App() {
  const [showForm, setShowForm] = useState(false);

  // --- 1. PREVIEW PAGE (COVER) ---
  if (!showForm) {
    return (
      <div className="preview-page">
        <div className="preview-card">
          {/* You can add floral <img> tags here later */}
          <p className="preview-date">OCTOBER 24, 2026</p>
          <h1 className="preview-names">Chryzller & Sebastian</h1>
          <div className="preview-divider"></div>
          <p className="preview-message">
            We are getting married at Palazzo Verde.<br />
            And we'd love for you to join us there for our special day.
          </p>
          <button 
            className="preview-button" 
            onClick={() => setShowForm(true)}
          >
            RSVP
          </button>
        </div>
      </div>
    );
  }

  // --- 2. MAIN RSVP FORM ---
  return (
    <div className="app-wrapper fade-in">
      <header className="hero-header">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="pre-title">The Wedding of</p>
            <h1 className="names">Chryzller <span className="amp">&</span> Sebastian</h1>
            <div className="divider"></div>
            <p className="venue-name">Palazzo Verde</p>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="rsvp-section">
          <div className="pv-panel">
            <h2 className="rsvp-title">RSVP</h2>
            <p className="rsvp-subtitle">We look forward to celebrating with you</p>
            
            <div className="date-container">
              <p className="date-string">OCTOBER 24, 2026</p>
            </div>
            <p className="rsvp-deadline">Please respond on or before September 1, 2026</p>

            <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Attendance</label>
                  <select>
                    <option>Happily Accepts</option>
                    <option>Regretfully Declines</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Guests</label>
                  {/* Option A: Hard Limit of 2 */}
                  <input 
                    type="number" 
                    defaultValue="1" 
                    min="1" 
                    max="2" 
                    onKeyDown={(e) => e.preventDefault()} 
                  />
                  <span className="limit-hint">Max 2 seats reserved</span>
                </div>
              </div>

              <div className="input-group">
                <label>Message (Optional)</label>
                <textarea rows="3" placeholder="Dietary notes or well wishes..."></textarea>
              </div>

              <button type="button" className="pv-button">Confirm Attendance</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="address-block">
          <p>Palazzo Verde</p>
          <p>Daang Reyna, Vista Alabang, Las Piñas, Metro Manila</p>
        </div>
        <p className="footer-tag">CHRYZLLER & SEBASTIAN | 2026</p>
      </footer>
    </div>
  )
}

export default App