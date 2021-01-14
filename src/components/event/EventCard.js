import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import moment from "moment";

export const EventCard = ({ event }) => (
  <Card.Content>
    <Card.Header>
      <Link to={`events/detail/${event.id}`}>{event.name}</Link>
      Date:(event.date)
      <div className="event__time">Time:{event.time} </div>
      <div className="event__time">Host:{event.user.username}</div>
    </Card.Header>
  </Card.Content>
);
