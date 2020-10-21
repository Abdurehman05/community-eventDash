import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import "./Event.css";
import { useHistory } from "react-router-dom";

export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  const history = useHistory();
  return (
    <>
      <div className="eventTitleButton">
        <h2>Events</h2>
        <button
          onClick={() => {
            history.push("/events/create");
          }}
        >
          Add New Event
        </button>
      </div>

      {events.map(event => {
        return <EventCard key={event.id} event={event} />;
      })}
    </>
  );
};
