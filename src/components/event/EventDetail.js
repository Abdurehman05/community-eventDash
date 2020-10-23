import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Event.css";

export const EventDetail = () => {
  const { getEventById, deleteEvent } = useContext(EventContext);

  const [event, setEvent] = useState({});
  const [location, setLocation] = useState({});

  const { eventId } = useParams();
  const history = useHistory();
  const activeUser = sessionStorage.getItem("activeUser");

  useEffect(() => {
    console.log("useEffect", eventId);
    getEventById(eventId).then(response => {
      setEvent(response);
      setLocation(response.location);
    });
  }, []);
  return (
    <section className="event">
      <h3 className="event-name">{event.name}</h3>
      <div className="event-userId">{activeUser}</div>
      <div className="event-date">{event.date}</div>
      <div className="event-time">{event.time}</div>
      <div className="event-location">Location: {location.name}</div>
      <br></br>
      <button
        onClick={() => {
          deleteEvent(event.id).then(() => {
            history.push("/events");
          });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          history.push(`/events/edit/${event.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
