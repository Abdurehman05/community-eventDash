import React from "react";
import "./Event.css";

export const EventCard = ({ event }) => (
  <section className="event">
    <h3 className="event__name">Event Name: {event.name}</h3>
    <div className="event__date">
      <h4>Date:{event.date}</h4>
    </div>
    <div className="event__time">Time:{event.time}</div>
  </section>
);
