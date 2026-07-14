import "../styles/Navbar.css";
import Button from "./ui/Button";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TechSphere</div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#register">
        <Button>Register</Button>
      </a>
    </nav>
  );
}

export default Navbar;