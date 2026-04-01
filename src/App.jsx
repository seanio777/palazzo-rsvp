import { useState, useEffect, useRef } from 'react'
import './PalazzoTheme.css'

// ── RSVP Responses Storage (in-memory) ─────────────────────
// In a real app this would be a backend/database
let rsvpResponses = []

function App() {
  const [showForm, setShowForm]     = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attendance, setAttendance]  = useState('Happily Accepts')
  const [responses, setResponses]    = useState([])
  const [showReport, setShowReport]  = useState(false)
  const audioRef = useRef(null)

  const scrollToTop  = () => window.scrollTo({ top:0, behavior:'smooth' })
  const scrollToRSVP = () => document.getElementById('rsvp-section')?.scrollIntoView({ behavior:'smooth' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const newResponse = {
      id:        Date.now(),
      name:      form.fullName.value,
      attendance: attendance,
      companions: form.companions.value,
      message:   form.message?.value || '',
      timestamp: new Date().toLocaleString('en-PH'),
    }
    rsvpResponses = [...rsvpResponses, newResponse]
    setResponses([...rsvpResponses])
    setIsSubmitted(true)
  }

  // Attendees/declines count
  const accepted  = responses.filter(r => r.attendance === 'Happily Accepts').length
  const declined  = responses.filter(r => r.attendance === 'Regretfully Declines').length
  const totalGuests = responses.reduce((sum, r) => sum + parseInt(r.companions || 1), 0)

  // ── Preview ────────────────────────────────────────────────
  if (!showForm) {
    return (
      <div className="preview-page">
        <div className="preview-card fade-in">
          <p className="preview-date">OCTOBER 24, 2026</p>
          <h1 className="preview-names">Chryzller & Sebasthian</h1>
          <div className="preview-divider"></div>
          <p className="preview-message">
            We are getting married at Palazzo Verde.<br />
            And we'd love for you to join us there for our special day.
          </p>
          <button className="preview-button" onClick={() => setShowForm(true)}>
            View Invitation
          </button>
        </div>
      </div>
    )
  }

  // ── Main Invitation ────────────────────────────────────────
  return (
    <div className="app-wrapper fade-in">

      {/* ── Theme Song (hidden audio) ── */}
      <audio ref={audioRef} loop style={{ display:'none' }}>
        <source src="/theme-song.mp3" type="audio/mpeg" />
        {/* ← REPLACE with your actual theme song file */}
      </audio>

      {/* ── Hero ── */}
      <header className="hero-header">
        <div className="hero-overlay">
          <div className="hero-content fade-in">

            {/* Bride & Groom Photo placeholder */}
            <div className="couple-photo-wrap">
                <img src="/rsvp-photo.jpg" alt="Chryzller & Sebasthian" className="couple-photo-img" />
            </div>

            <p className="pre-title">The Wedding of</p>
            <h1 className="names">Chryzller <span className="amp">&</span> Sebasthian</h1>
            <div className="divider"></div>
            <p className="venue-name">Palazzo Verde</p>
            <button className="hero-rsvp-btn" onClick={scrollToRSVP}>RSVP Now</button>
          </div>
        </div>
      </header>

      <main className="container">

        {/* ── Details Strip ── */}
        <section className="details-strip reveal">
          <div className="details-strip-inner">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <p className="detail-label">Date</p>
              <p className="detail-value">October 24, 2026</p>
            </div>
            <div className="detail-divider" />
            <div className="detail-item">
              <span className="detail-icon">🕐</span>
              <p className="detail-label">Time</p>
              <p className="detail-value">3:00 PM onwards</p>
            </div>
            <div className="detail-divider" />
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <p className="detail-label">Venue</p>
              <p className="detail-value">Palazzo Verde</p>
            </div>
          </div>
        </section>

        {/* ── Venue ── */}
        <section className="location-section reveal">
          <div className="pv-panel">
            <h2 className="rsvp-title">The Venue</h2>
            <div className="divider-small"></div>

            {/* ── Chapel ── */}
            <div className="venue-photo-box" style={{ marginBottom: 32 }}>
              <div className="venue-photo-placeholder">
                {/* ← REPLACE with: <img src="/venue-chapel.jpg" alt="Notre Dame De Vie Chapel" className="venue-photo-img" /> */}
                <span className="venue-photo-icon">⛪</span>
                <span className="venue-photo-hint">Chapel Photo Coming Soon</span>
              </div>
              <div className="venue-block" style={{ marginTop: 20, marginBottom: 0 }}>
                <p className="venue-type-label">⛪ Wedding Ceremony</p>
                <h3 className="venue-block-title">Notre Dame De Vie Chapel</h3>
                <p className="venue-block-sub">Brittany Palazzo · Palazzo Verde</p>
                <p className="location-text">
                  Daang Reyna, Vista Alabang,<br />
                  Las Piñas, 1750 Metro Manila
                </p>
              </div>
            </div>

            <div className="venue-divider" />

            {/* ── Reception ── */}
            <div className="venue-photo-box" style={{ marginBottom: 32 }}>
              <div className="venue-photo-placeholder">
                {/* ← REPLACE with: <img src="/venue-reception.jpg" alt="Palazzo Verde Reception" className="venue-photo-img" /> */}
                <span className="venue-photo-icon">🏛️</span>
                <span className="venue-photo-hint">Reception Photo Coming Soon</span>
              </div>
              <div className="venue-block" style={{ marginTop: 20, marginBottom: 0 }}>
                <p className="venue-type-label">🥂 Reception</p>
                <h3 className="venue-block-title">Palazzo Verde</h3>
                <p className="venue-block-sub">Brittany Palazzo</p>
                <p className="location-text">
                  Daang Reyna, Vista Alabang,<br />
                  Las Piñas, 1750 Metro Manila
                </p>
              </div>
            </div>

            <div className="venue-divider" />

            {/* ── Map ── */}
            <div className="map-container">
              <iframe
                title="Palazzo Verde Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d966.2437811566513!2d121.008247967292!3d14.370851467002298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1e69968a175%3A0x91b8d8126ab138fc!2sNotre%20Dame%20De%20Vie%20Chapel!5e0!3m2!1sen!2sph!4v1774092328112!5m2!1sen!2sph&output=embed"
                width="100%" height="300"
                style={{ border:0, marginTop:'20px', borderRadius:'4px' }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{ marginTop:'20px' }}>
                <a
                  href="https://www.google.com/maps?cid=10500380104825321724&hl=en&gl=PH&source=embed"
                  target="_blank" rel="noreferrer"
                  className="map-button"
                >
                  Open in Google Maps
                </a>
              </div>
              <p className="map-hint">Parking is available within the vicinity.</p>
            </div>
          </div>
        </section>


        {/* ── Attire ── */}
        <section className="attire-section reveal">
          <div className="pv-panel no-border-top">
            <h2 className="rsvp-title">Attire</h2>
            <p className="rsvp-subtitle">Formal Garden Attire</p>
            <div className="divider-small"></div>

            {/* Attire Photos */}
            <div className="attire-photos-grid">
              <div className="attire-photo-placeholder">
                <img
                    src="/attire-women.jpg"
                    alt="Women's Attire"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 4,
                    }}
                />
                </div>

                <div className="attire-photo-placeholder">
                <img
                    src="/attire-men.png"
                    alt="Men's Attire"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 4,
                    }}
                />
                </div>
            </div>

            <p className="attire-text" style={{ marginTop:'20px' }}>
              We suggest floor-length dresses for women and<br />
              suits or Barong Tagalog for men.
            </p>

            <div className="color-palette">
              <p className="palette-label">Wedding Color Palette</p>
              <div className="swatches">
                {['#3D5A35','#C5A059','#FDF9F0','#2C2416'].map(c => (
                  <div key={c} className="swatch" style={{ backgroundColor:c }} title={c} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Entourage ── */}
        <section className="entourage-section reveal">
          <div className="pv-panel no-border-top">
            <h2 className="rsvp-title">Wedding Entourage</h2>
            <div className="divider-small"></div>

            <div className="entourage-grid">

              <div className="entourage-group">
                <h3 className="entourage-title">👴 Ninong</h3>
                <ul className="entourage-list">
                  <li>Mr. Roberto Dela Cruz</li>
                  <li>Mr. Antonio Reyes</li>
                  <li>Mr. Eduardo Santos</li>
                  <li>Mr. Marcelino Garcia</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">👵 Ninang</h3>
                <ul className="entourage-list">
                  <li>Mrs. Corazon Dela Cruz</li>
                  <li>Mrs. Ligaya Reyes</li>
                  <li>Mrs. Esperanza Santos</li>
                  <li>Mrs. Felicidad Garcia</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">💐 Bridesmaids</h3>
                <ul className="entourage-list">
                  <li>Ms. Andrea Villanueva</li>
                  <li>Ms. Bianca Lim</li>
                  <li>Ms. Camille Torres</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">🤵 Groomsmen</h3>
                <ul className="entourage-list">
                  <li>Mr. Daniel Mendoza</li>
                  <li>Mr. Ethan Cruz</li>
                  <li>Mr. Franco Ramos</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">🌸 Maid of Honor</h3>
                <ul className="entourage-list">
                  <li>Ms. Gabriela Aquino</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">🤵 Best Man</h3>
                <ul className="entourage-list">
                  <li>Mr. Hector Navarro</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">💍 Ring Bearer</h3>
                <ul className="entourage-list">
                  <li>Master Ivan Santos</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">🌸 Flower Girl</h3>
                <ul className="entourage-list">
                  <li>Little Julia Reyes</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">🕯️ Candle Bearers</h3>
                <ul className="entourage-list">
                  <li>Ms. Karen Bautista</li>
                  <li>Mr. Luis Castillo</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">🎀 Cord Sponsors</h3>
                <ul className="entourage-list">
                  <li>Mr. & Mrs. Marco Dela Rosa</li>
                  <li>Mr. & Mrs. Nestor Villaluz</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">🍞 Bible & Coins Bearers</h3>
                <ul className="entourage-list">
                  <li>Master Oscar Mendez</li>
                  <li>Little Patricia Cruz</li>
                </ul>
              </div>

              <div className="entourage-group">
                <h3 className="entourage-title">📸 Principal Sponsors</h3>
                <ul className="entourage-list">
                  <li>Mr. & Mrs. Quintin Soriano</li>
                  <li>Mr. & Mrs. Ramon Florendo</li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ── Program Flow ── */}
        <section className="program-section reveal">
          <div className="pv-panel no-border-top">
            <h2 className="rsvp-title">Program Flow</h2>
            <div className="divider-small"></div>

            <div className="program-timeline">
              {[
                { time:'3:00 PM', event:'Guest Arrival & Registration' },
                { time:'3:30 PM', event:'Wedding Ceremony Begins' },
                { time:'4:30 PM', event:'Signing of the Marriage Contract' },
                { time:'5:00 PM', event:'Recessional & Congratulations' },
                { time:'5:30 PM', event:'Cocktail Hour' },
                { time:'6:30 PM', event:'Reception Begins' },
                { time:'7:00 PM', event:'Program & Dinner' },
                { time:'8:00 PM', event:'Speeches & Toasts' },
                { time:'9:00 PM', event:'First Dance' },
                { time:'9:30 PM', event:'Open Dancing & Celebration' },
              ].map((item, i) => (  /* ← REPLACE times/events with actual program */
                <div key={i} className="program-item">
                  <span className="program-time">{item.time}</span>
                  <span className="program-dot">◆</span>
                  <span className="program-event">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOs and DON'Ts ── */}
        <section className="rules-section reveal">
          <div className="pv-panel no-border-top">
            <h2 className="rsvp-title">DOs & DON'Ts</h2>
            <div className="divider-small"></div>

            <div className="rules-grid">
              <div className="rules-col dos">
                <h3 className="rules-col-title">✅ DOs</h3>
                <ul className="rules-list">
                  <li>Arrive on time or early</li>
                  <li>Dress in formal garden attire</li>
                  <li>Follow the color palette</li>
                  <li>Respect the solemnity of the ceremony</li>
                  <li>Sign the guest book</li>
                  <li>Take lots of photos and enjoy!</li>
                  {/* ← ADD more DOs */}
                </ul>
              </div>

              <div className="rules-col donts">
                <h3 className="rules-col-title">❌ DON'Ts</h3>
                <ul className="rules-list">
                  <li>Don't wear white (reserved for the bride)</li>
                  <li>Don't use flash photography during the ceremony</li>
                  <li>Don't post spoilers before the couple does</li>
                  <li>Don't bring uninvited guests without notice</li>
                  <li>Don't use phones during the ceremony</li>
                  <li>Don't leave early without saying goodbye!</li>
                  {/* ← ADD more DON'Ts */}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── RSVP Form ── */}
        <section className="rsvp-section-bottom reveal" id="rsvp-section">
          <div className="pv-panel rsvp-bottom-panel">

            <div className="rsvp-flourish">
              <span className="flourish-line" />
              <span className="flourish-diamond">◆</span>
              <span className="flourish-line" />
            </div>

            {/* RSVP Counter */}
            <div className="rsvp-counter">
              <div className="counter-item">
                <span className="counter-value">{responses.length}</span>
                <span className="counter-label">Responded</span>
              </div>
              <div className="counter-divider" />
              <div className="counter-item">
                <span className="counter-value accept">{accepted}</span>
                <span className="counter-label">Attending</span>
              </div>
              <div className="counter-divider" />
              <div className="counter-item">
                <span className="counter-value decline">{declined}</span>
                <span className="counter-label">Declining</span>
              </div>
              <div className="counter-divider" />
              <div className="counter-item">
                <span className="counter-value">{totalGuests}</span>
                <span className="counter-label">Total Guests</span>
              </div>
            </div>

            {isSubmitted ? (
              <div className="success-message fade-in">
                {attendance === 'Happily Accepts' ? (
                  <>
                    <div className="success-icon">💐</div>
                    <h2 className="rsvp-title">Thank You!</h2>
                    <p className="rsvp-subtitle">Your RSVP has been sent successfully.</p>
                    <div className="divider-small" />
                    <p className="attire-text">We can't wait to celebrate with you!</p>
                  </>
                ) : (
                  <>
                    <div className="success-icon">🕊️</div>
                    <h2 className="rsvp-title">We'll Miss You!</h2>
                    <p className="rsvp-subtitle">Thank you for letting us know.</p>
                    <div className="divider-small" />
                    <p className="attire-text">We're sorry to miss you, but we'll be<br />thinking of you on the big day!</p>
                  </>
                )}

                {/* Show report button */}
                <button
                  onClick={() => setShowReport(!showReport)}
                  className="pv-button"
                  style={{ marginTop:24, maxWidth:260, margin:'24px auto 0' }}
                >
                  {showReport ? 'Hide' : 'View'} RSVP Report
                </button>

              </div>
            ) : (
              <>
                <h2 className="rsvp-title">Kindly Reply</h2>
                <p className="rsvp-subtitle">We look forward to celebrating with you</p>
                <div className="date-container">
                  <p className="date-string">OCTOBER 24, 2026</p>
                </div>
                <p className="rsvp-deadline">Please respond on or before September 1, 2026</p>

                <form className="rsvp-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label>Full Name</label>
                    <input name="fullName" type="text" placeholder="Enter your full name" required />
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label>Attendance</label>
                      <select name="attendance" value={attendance} onChange={e => setAttendance(e.target.value)}>
                        <option value="Happily Accepts">Happily Accepts</option>
                        <option value="Regretfully Declines">Regretfully Declines</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Companion</label>
                      <input name="companions" type="number" defaultValue="1" min="1" max="2" onKeyDown={e => e.preventDefault()} />
                      <span className="limit-hint">Max 2 persons per invitation</span>
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Message <span style={{ opacity:0.5, fontWeight:400 }}>(Optional)</span></label>
                    <textarea name="message" rows="1" placeholder="Dietary notes or well wishes..."
                      onInput={e => { e.target.style.height='auto'; e.target.style.height=e.target.scrollHeight+'px' }}
                      style={{ overflow:'hidden', resize:'none' }}
                    />
                  </div>
                  <button type="submit" className="pv-button">Confirm Attendance</button>
                </form>
              </>
            )}

            <div className="rsvp-flourish" style={{ marginTop:32, marginBottom:0 }}>
              <span className="flourish-line" />
              <span className="flourish-diamond">◆</span>
              <span className="flourish-line" />
            </div>
          </div>
        </section>

        {/* ── RSVP Report ── */}
        {showReport && responses.length > 0 && (
          <section className="report-section reveal">
            <div className="pv-panel no-border-top">
              <h2 className="rsvp-title">RSVP Responses</h2>
              <p className="rsvp-subtitle">{responses.length} response{responses.length !== 1 ? 's' : ''} received</p>
              <div className="divider-small" />

              <div className="report-list">
                {responses.map((r, i) => (
                  <div key={r.id} className="report-item">
                    <div className="report-number">{i + 1}</div>
                    <div className="report-details">
                      <p className="report-name">{r.name}</p>
                      <div className="report-meta">
                        <span className={`report-status ${r.attendance === 'Happily Accepts' ? 'accept' : 'decline'}`}>
                          {r.attendance}
                        </span>
                        <span className="report-guests">👥 {r.companions} guest{r.companions > 1 ? 's' : ''}</span>
                        {r.message && <span className="report-message">💬 "{r.message}"</span>}
                      </div>
                      <p className="report-timestamp">{r.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <button
        className="music-btn"
        onClick={() => {
          if (audioRef.current.paused) {
            audioRef.current.play()
          } else {
            audioRef.current.pause()
          }
        }}
        title="Toggle background music"
      >
        🎵
      </button>
          
      {/* ── Footer ── */}
      <footer className="footer reveal">
        <div className="footer-content">
          <div className="footer-divider"></div>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">↑</button>
          <h2 className="footer-names">Chryzller <span className="amp">&</span> Sebasthian</h2>
          <p className="footer-date">OCTOBER 24, 2026 • PALAZZO VERDE</p>
          <p className="footer-tag">MADE WITH LOVE FOR OUR FAMILY & FRIENDS</p>
        </div>
      </footer>
    </div>
  )
}

export default App