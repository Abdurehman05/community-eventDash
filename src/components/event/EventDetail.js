import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Event.css";

export const EventDetail = () => {
  const { getEventById, deleteEvent } = useContext(EventContext);
  const [event, setEvent] = useState({});
  const { eventId } = useParams();
  const history = useHistory();
  const activeUser = sessionStorage.getItem("activeUser");

  useEffect(() => {
    getEventById(eventId).then(response => {
      setEvent(response);
    });
  }, []);
  return (
    <section className="event">
      <h3 className="event-name">{event.name}</h3>
      <div className="event-userId">{activeUser}</div>
      <div className="event-date">{event.date}</div>
      <div className="event-time">{event.time}</div>
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
