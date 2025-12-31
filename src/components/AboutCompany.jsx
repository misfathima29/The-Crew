const AboutCompany = () => {
const companyImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&auto=format&fit=crop", // Event volunteers
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&auto=format&fit=crop", // Marathon event
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&auto=format&fit=crop", // Festival event
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=300&auto=format&fit=crop", // Conference event
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&auto=format&fit=crop", // Sports event
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&auto=format&fit=crop"  // Tech event
];

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h3>About The-Crew</h3>
          <p>
            Founded in 2020, The-Crew bridges the gap between event organizers 
            and passionate volunteers across India's metro cities. We've successfully 
            managed over 500 events, creating meaningful experiences for both 
            volunteers and communities.
          </p>
          <div className="features">
            <div className="feature">
              <h4>Our Mission</h4>
              <p>To create a seamless volunteering ecosystem across urban India.</p>
            </div>
            <div className="feature">
              <h4>What We Offer</h4>
              <p>Paid volunteering opportunities with flexible timings.</p>
            </div>
            <div className="feature">
              <h4>Join Us</h4>
              <p>Be part of India's largest urban volunteering network.</p>
            </div>
          </div>
        </div>
        <div className="about-images">
          <div className="image-grid">
            {companyImages.map((img, index) => (
              <div key={index} className="grid-item">
                <img src={img} alt={`Company activity ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;