import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Event.css";
import { Card } from "semantic-ui-react";

export const EventDetail = () => {
  const { getEventById, deleteEvent } = useContext(EventContext);

  const [event, setEvent] = useState({});
  const [location, setLocation] = useState({});
  const [members, setMembers] = useState({});

  const { eventId } = useParams();
  const history = useHistory();
  const activeUser = sessionStorage.getItem("active_user");

  useEffect(() => {
    getEventById(eventId).then(response => {
      setEvent(response);
      setLocation(response.location);
      setMembers(response.users);
    });
  }, []);

  const showButton = () => {
    if (event.userId === parseInt(localStorage.getItem("active_user")))
      return (
        <>
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
        </>
      );
  };

  return (
    <Card>
      <Card.Content>
        <section className="event">
          <Card.Header>
            <h3 className="event-name">{event.name}</h3>
          </Card.Header>
          <Card.Content>
            <div className="event-userId">{activeUser}</div>
            <div className="event-date">
              {new Date(event.date).toLocaleDateString("en-US")}
            </div>
            <div className="event-time">{event.time}</div>
            <div className="event-location">Location: {location.name}</div>
            <br></br>
            <section className="buttons">{showButton()}</section>
          </Card.Content>
        </section>
      </Card.Content>
    </Card>
  );
};
