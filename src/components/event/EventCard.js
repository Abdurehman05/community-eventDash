import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

export const EventCard = ({ event }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        <Link to={`events/detail/${event.id}`}>{event.name}</Link>
      </Card.Header>

      <h4>Date:{new Date(event.date).toLocaleDateString("en-US")}</h4>

      <div className="event__time">Time:{event.time}</div>
      <div className="event__time">Host:{event.user.username}</div>
    </Card.Content>
  </Card>
);
