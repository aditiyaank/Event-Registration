import "../styles/Events.css";

const events = [
  {
    title: "Hackathon",
    desc: "24-hour coding challenge."
  },
  {
    title: "AI Workshop",
    desc: "Hands-on AI & ML sessions."
  },
  {
    title: "Startup Pitch",
    desc: "Present innovative startup ideas."
  }
];

function Events() {
  return (
    <section className="events" id="events">
      <h2>Featured Events</h2>

      <div className="event-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;