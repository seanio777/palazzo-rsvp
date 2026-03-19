import { useState, useEffect } from 'react'
import './PalazzoTheme.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    guests: 1,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [rsvpList, setRsvpList] = useState([]);

  // Mock "Backend" using LocalStorage
  useEffect(() => {
    const savedRsvps = JSON.parse(localStorage.getItem('palazzo_rsvps') || '[]');
    setRsvpList(savedRsvps);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...rsvpList, { ...formData, id: Date.now() }];
    setRsvpList(newList);
    localStorage.setItem('palazzo_rsvps', JSON.stringify(newList));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container">
        <div className="pv-panel fade-in">
          <h2>Thank You, {formData.name.split(' ')[0]}!</h2>
          <p>Your response has been saved locally.</p>
          <button className="pv-button-outline" onClick={() => setSubmitted(false)}>Back to Form</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <header className="hero-section">
        <div className="overlay">
          <h1>CJ & Sebastian</h1>
          <p className="subtitle">PALAZZO VERDE • 2026</p>
        </div>
      </header>

      <main className="container">
        <section className="pv-panel">
          <h3>R.S.V.P.</h3>
          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="input-group">
              <label>Guest Name</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-group">
              <label>Will you join us?</label>
              <select 
                value={formData.attending}
                onChange={(e) => setFormData({...formData, attending: e.target.value})}
              >
                <option value="yes">Happily Accepts</option>
                <option value="no">Regretfully Declines</option>
              </select>
            </div>

            {formData.attending === 'yes' && (
              <div className="input-group">
                <label>Number of Guests</label>
                <input 
                  type="number" 
                  min="1" 
                  max="5"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                />
              </div>
            )}

            <div className="input-group">
              <label>Message (Optional)</label>
              <textarea 
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="pv-button">Send Response</button>
          </form>
        </section>

        {/* Local Debug View (Since you have no backend) */}
        <section className="debug-view">
          <small>Local Guest Count: {rsvpList.length}</small>
        </section>
      </main>
    </div>
  )
}

export default App