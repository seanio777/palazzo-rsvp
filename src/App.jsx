import './PalazzoTheme.css'

function App() {
  return (
    <div className="app-wrapper">
      <header className="hero-header">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="pre-title">The Wedding of</p>
            <h1 className="names">CJ <span className="amp">&</span> Sebastian</h1>
            <div className="divider"></div>
            <p className="venue-name">Palazzo Verde</p>
            <p className="date-string">2026</p>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="rsvp-section">
          <div className="pv-panel">
            <h2 className="rsvp-title">R.S.V.P.</h2>
            <p className="rsvp-subtitle">We look forward to celebrating with you</p>

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
                  <input type="number" defaultValue="1" min="1" />
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
        <p className="footer-tag">CJ & SEBASTIAN • 2026</p>
      </footer>
    </div>
  )
}

export default App