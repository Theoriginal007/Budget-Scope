import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  const [feedbackData, setFeedbackData] = useState({ name: '', email: '', feedback: '' });
  const [pressureData, setPressureData] = useState({ name: '', email: '', message: '' });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [pressureSubmitted, setPressureSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFeedbackChange = ({ target: { name, value } }) => setFeedbackData(prev => ({ ...prev, [name]: value }));
  const handlePressureChange = ({ target: { name, value } }) => setPressureData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.example.com/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(type === 'feedback' ? feedbackData : pressureData),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      type === 'feedback' ? setFeedbackSubmitted(true) : setPressureSubmitted(true);
    } catch {
      setError('There was an error submitting your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="Feedback-form">
      <h2>Feedback & Advocacy</h2>

      {/* Feedback Form */}
      <div className="Form-section">
        <h3>Submit Your Feedback</h3>
        {feedbackSubmitted ? (
          <p className="Feedback-success">Thank you for your feedback!</p>
        ) : (
          <form onSubmit={(e) => handleSubmit(e, 'feedback')}>
            <div className="Form-group">
              <label htmlFor="feedback-name">Name</label>
              <input
                type="text"
                id="feedback-name"
                name="name"
                value={feedbackData.name}
                onChange={handleFeedbackChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="Form-group">
              <label htmlFor="feedback-email">Email</label>
              <input
                type="email"
                id="feedback-email"
                name="email"
                value={feedbackData.email}
                onChange={handleFeedbackChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="Form-group">
              <label htmlFor="feedback-message">Feedback</label>
              <textarea
                id="feedback-message"
                name="feedback"
                value={feedbackData.feedback}
                onChange={handleFeedbackChange}
                placeholder="Enter your feedback"
                required
              />
            </div>
            {error && <p className="Feedback-error">{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        )}
      </div>

      {/* Advocacy Form */}
      <div className="Form-section">
        <h3>Make Your Voice Heard</h3>
        {pressureSubmitted ? (
          <p className="Pressure-success">Thank you for making your voice heard!</p>
        ) : (
          <form onSubmit={(e) => handleSubmit(e, 'pressure')}>
            <div className="Form-group">
              <label htmlFor="pressure-name">Name</label>
              <input
                type="text"
                id="pressure-name"
                name="name"
                value={pressureData.name}
                onChange={handlePressureChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="Form-group">
              <label htmlFor="pressure-email">Email</label>
              <input
                type="email"
                id="pressure-email"
                name="email"
                value={pressureData.email}
                onChange={handlePressureChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="Form-group">
              <label htmlFor="pressure-message">Message</label>
              <textarea
                id="pressure-message"
                name="message"
                value={pressureData.message}
                onChange={handlePressureChange}
                placeholder="Write your message to the government"
                required
              />
            </div>
            {error && <p className="Pressure-error">{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default FeedbackForm;
