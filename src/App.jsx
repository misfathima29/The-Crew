import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import FilterBar from './components/FilterBar';
import EventGrid from './components/EventGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { events } from './data/events';
import './App.css';

function App() {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [activeCity, setActiveCity] = useState('All Cities');
  const [dateFilter, setDateFilter] = useState('');

  const socialLinks = {
    github: "https://github.com/misfathima29",
    linkedin: "https://www.linkedin.com/in/misbah-fathima-80474029b/",
    instagram: "https://www.instagram.com/misfathima29/",
    twitter: "https://x.com/misfathima29",
    phone: "919902037689",
    email: "misbahfathimams@gmail.com"
  };
  useEffect(() => {
    let filtered = events;

    if (activeCategory !== 'All Events') {
      filtered = filtered.filter(event => event.category === activeCategory);
    }

    if (activeCity !== 'All Cities') {
      filtered = filtered.filter(event => event.location.includes(activeCity));
    }

    setFilteredEvents(filtered);
  }, [activeCategory, activeCity, dateFilter]);

  return (
    <div className="app">
      <Navbar socialLinks={socialLinks} />
      <Hero />
      <AboutCompany />

      <section className="events-section" id="events">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <p>Find volunteering opportunities in your city</p>
        </div>

        <FilterBar
          activeCategory={activeCategory}
          activeCity={activeCity}
          onCategoryChange={(e) => setActiveCategory(e.target.value)}
          onCityChange={(e) => setActiveCity(e.target.value)}
        />

        <div className="events-info">
          <p>Showing {filteredEvents.length} of {events.length} events</p>
        </div>

        <EventGrid events={filteredEvents} />
      </section>

<section id="contact-form">
  <ContactForm />
</section>
      <Footer />
    </div>
  );
}

export default App;