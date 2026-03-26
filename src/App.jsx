import { useState } from 'react'
import './PalazzoTheme.css'

function App() {
const [showForm, setShowForm] = useState(false)
const [isSubmitted, setIsSubmitted] = useState(false)
const [attendance, setAttendance] = useState('Happily Accepts')

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const scrollToRSVP = () => {
document.getElementById('rsvp-section')?.scrollIntoView({ behavior: 'smooth' })
}

const handleSubmit = (e) => {
e.preventDefault()
setIsSubmitted(true)
}

// ── Preview / Landing Page ───────────────────────────────────
if (!showForm) {
return (
<div className="preview-page">
<div className="preview-card fade-in">
<p className="preview-date">OCTOBER 24, 2026</p>
<h1 className="preview-names">Chryzller & Sebastian</h1>
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

// ── Main Invitation Page ─────────────────────────────────────
return (
<div className="app-wrapper fade-in">

{/* ── Hero ── */}
<header className="hero-header">
<div className="hero-overlay">
<div className="hero-content fade-in">
<p className="pre-title">The Wedding of</p>
<h1 className="names">Chryzller <span className="amp">&</span> Sebastian</h1>
<div className="divider"></div>
<p className="venue-name">Palazzo Verde</p>
<button className="hero-rsvp-btn" onClick={scrollToRSVP}>
RSVP Now
</button>
</div>
</div>
</header>

<main className="container">

{/* ── Wedding Details Strip ── */}
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

{/* ── Attire ── */}
<section className="attire-section reveal">
<div className="pv-panel">
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
{['#3D5A35', '#C5A059', '#FDF9F0', '#2C2416'].map(c => (
<div key={c} className="swatch" style={{ backgroundColor: c }} title={c} />
))}
</div>
</div>
</div>
</section>

{/* ── Venue / Map ── */}
<section className="location-section reveal">
<div className="pv-panel no-border-top">
<h2 className="rsvp-title">The Venue</h2>
<p className="rsvp-subtitle">Notre Dame De Vie Chapel | Brittany Palazzo</p>
<div className="divider-small"></div>
<p className="location-text">
Daang Reyna, Vista Alabang, <br />
Las Piñas, 1750 Metro Manila
</p>
<div className="map-container">
<iframe
title="Palazzo Verde Map"
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d966.2437811566513!2d121.008247967292!3d14.370851467002298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1e69968a175%3A0x91b8d8126ab138fc!2sNotre%20Dame%20De%20Vie%20Chapel!5e0!3m2!1sen!2sph!4v1774092328112!5m2!1sen!2sph"
width="100%" height="300"
style={{ border: 0, marginTop: '20px', borderRadius: '4px' }}
allowFullScreen="" loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
/>
<div style={{ marginTop: '20px' }}>
<a
href="https://www.google.com/maps/dir//Notre+Dame+De+Vie+Chapel"
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

{/* ── RSVP Form — AT THE BOTTOM ── */}
<section className="rsvp-section-bottom reveal" id="rsvp-section">
<div className="pv-panel rsvp-bottom-panel">

{/* Decorative top flourish */}
<div className="rsvp-flourish">
<span className="flourish-line" />
<span className="flourish-diamond">◆</span>
<span className="flourish-line" />
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
<p className="attire-text">
We're sorry to miss you, but we'll be<br />thinking of you on the big day!
</p>
</>
)}
</div>
) : (
<>
<h2 className="rsvp-title">Kindly Reply</h2>
<p className="rsvp-subtitle">We look forward to celebrating with you</p>

<div className="date-container">
<p className="date-string">OCTOBER 24, 2026</p>
</div>

<p className="rsvp-deadline">
Please respond on or before September 1, 2026
</p>

<form className="rsvp-form" onSubmit={handleSubmit}>
<div className="input-group">
<label>Full Name</label>
<input type="text" placeholder="Enter your full name" required />
</div>

<div className="input-row">
<div className="input-group">
<label>Attendance</label>
<select
value={attendance}
onChange={(e) => setAttendance(e.target.value)}
>
<option value="Happily Accepts">Happily Accepts</option>
<option value="Regretfully Declines">Regretfully Declines</option>
</select>
</div>

<div className="input-group">
<label>Companion</label>
<input
type="number"
defaultValue="1"
min="1" max="2"
onKeyDown={(e) => e.preventDefault()}
/>
<span className="limit-hint">Max 2 persons per invitation</span>
</div>
</div>

<div className="input-group">
<label>Message <span style={{ opacity: 0.5, fontWeight: 400 }}>(Optional)</span></label>
<textarea
rows="1"
placeholder="Dietary notes or well wishes..."
onInput={(e) => {
e.target.style.height = 'auto'
e.target.style.height = e.target.scrollHeight + 'px'
}}
style={{ overflow: 'hidden', resize: 'none' }}
/>
</div>

<button type="submit" className="pv-button">
Confirm Attendance
</button>
</form>
</>
)}

{/* Decorative bottom flourish */}
<div className="rsvp-flourish" style={{ marginTop: 32, marginBottom: 0 }}>
<span className="flourish-line" />
<span className="flourish-diamond">◆</span>
<span className="flourish-line" />
</div>
</div>
</section>
</main>

{/* ── Footer ── */}
<footer className="footer reveal">
<div className="footer-content">
<div className="footer-divider"></div>
<button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">↑</button>
<h2 className="footer-names">Chryzller <span className="amp">&</span> Sebastian</h2>
<p className="footer-date">OCTOBER 24, 2026 • PALAZZO VERDE</p>
<p className="footer-tag">MADE WITH LOVE FOR OUR FAMILY & FRIENDS</p>
</div>
</footer>
</div>
)
}

export default App
