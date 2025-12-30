import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      message: ''
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Join Our Volunteer Network</h3>
          <p>Get notified about upcoming events in your city</p>
          <div className="contact-details">
            <h4>Why Register?</h4>
            <ul>
              <li>Early access to premium events</li>
              <li>Higher payment opportunities</li>
              <li>Build your volunteering portfolio</li>
              <li>Get certificates and references</li>
              <li>Priority selection for popular events</li>
            </ul>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Quick Registration</h3>
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <select 
              name="city" 
              value={formData.city} 
              onChange={handleChange}
              required
            >
              <option value="">Select Your City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your volunteering experience (optional)"
              value={formData.message}
              onChange={handleChange}
              rows="3"
            />
          </div>
          
          <button type="submit" className="submit-button">
            Register as Volunteer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;