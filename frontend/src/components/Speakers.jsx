import "../styles/Speakers.css";

const speakers = [
  { name: "Dr. Sarah Johnson", role: "AI Researcher" },
  { name: "David Lee", role: "Cloud Architect" },
  { name: "Emily Chen", role: "Startup Founder" }
];

function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <h2>Featured Speakers</h2>

      <div className="speaker-grid">
        {speakers.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <div className="avatar"></div>

            <h3>{speaker.name}</h3>

            <p>{speaker.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;