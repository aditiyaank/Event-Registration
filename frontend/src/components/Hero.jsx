import "../styles/Hero.css";
import Button from "./ui/Button";
import heroImage from "../assets/images/Hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">

        <span className="hero-badge">
          🚀 TechSphere 2026
        </span>

        <h1>
          The Future of Innovation Starts Here
        </h1>

        <p>
          Join developers, startups, researchers and industry experts
          to explore the next generation of technology.
        </p>

        <div className="hero-buttons">
        <a href="#register">
  <Button>Register Now</Button>
</a>
          <Button variant="secondary">Explore Events</Button>
        </div>

      </div>

      <div className="hero-right">

  <img src={heroImage} alt="Hero" />

  <div className="card card1">
    <h3>5000+</h3>
    <p>Participants</p>
  </div>

  <div className="card card2">
    <h3>40+</h3>
    <p>Speakers</p>
      </div>

    </div>
    </section>
  );
}

export default Hero;