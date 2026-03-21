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

        <section className="attire-section fade-in">
          <div className="pv-panel no-border-top">
            <h2 className="rsvp-title">Attire</h2>
            <p className="rsvp-subtitle">Formal Garden Attire</p>
            
            <div className="divider-small"></div>
            
            <p className="attire-text">
              We suggest floor-length dresses for women and <br />
              suits or Barong Tagalog for men.
            </p>

            <div className="color-palette">
              <p className="palette-label">Wedding Color Palette</p>
              <div className="swatches">
                <div className="swatch" style={{backgroundColor: '#3D5A35'}}></div>
                <div className="swatch" style={{backgroundColor: '#C5A059'}}></div>
                <div className="swatch" style={{backgroundColor: '#FDF9F0'}}></div>
                <div className="swatch" style={{backgroundColor: '#2C2416'}}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="location-section fade-in">
          <div className="pv-panel no-border-top">
            <h2 className="rsvp-title">The Venue</h2>
            <p className="rsvp-subtitle">Notre Dame De Vie Chapel | Brittany Palazzo</p>
            
            <div className="divider-small"></div>
            
            <p className="location-text">
              Daang Reyna, Vista Alabang, <br />
              Las Piñas, 1750 Metro Manila
            </p>

            <div className="map-container">
              <a 
                href="https://maps.app.goo.gl/xW837dbaEcMzFSya9" 
                target="_blank" 
                rel="noreferrer" 
                className="map-button"
              >
                View on Google Maps
              </a>
              <p className="map-hint">Free parking is available within the vicinity.</p>
            </div>
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