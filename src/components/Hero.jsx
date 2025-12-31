import SnowEffect from './SnowEffect';

const Hero = () => {
    return (
        <section className="hero">
            <SnowEffect />
            <div className="hero-content">
                <h2>Volunteer Across India's Metro Cities</h2>
                <p>Join hands to make a difference while earning rewards</p>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Events</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">15,000+</span>
                        <span className="stat-label">Volunteers</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">₹50L+</span>
                        <span className="stat-label">Paid Out</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">6</span>
                        <span className="stat-label">Cities</span>
                    </div>
                </div>
                <button
                    className="cta-button"
                    onClick={() => {
                        document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Join The-Crew
                </button>      </div>
        </section>
    );
};

export default Hero;