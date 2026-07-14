import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <span className="section-tag">ABOUT US</span>

        <h2>Empowering the Next Generation of Innovators</h2>

        <p>
          TechSphere 2026 is a premier technology conference that brings
          together students, developers, startups, researchers, and industry
          leaders to learn, collaborate, and build the future.
        </p>

        <div className="about-stats">
          <div>
            <h3>5000+</h3>
            <p>Participants</p>
          </div>

          <div>
            <h3>40+</h3>
            <p>Speakers</p>
          </div>

          <div>
            <h3>3</h3>
            <p>Days</p>
          </div>
        </div>
      </div>

      <div className="about-right">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=900"
          alt="Conference"
        />
      </div>
    </section>
  );
}

export default About;