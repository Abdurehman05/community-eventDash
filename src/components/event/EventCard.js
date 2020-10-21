import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

export const EventCard = ({ event }) => (
  <section className="event">
    <h3 className="event__name">
      <Link to={`events/detail/${event.id}`}>{event.name}</Link>
    </h3>
    <div className="event__date">
      <h4>Date:{event.date}</h4>
    </div>
    <div className="event__time">Time:{event.time}</div>
  </section>
);
