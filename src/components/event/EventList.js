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
      <div className="events">
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
        <h2>All events </h2>
        {events.map(event => {
          return <EventCard key={event.id} event={event} />;
        })}

        <h2>Coming events </h2>
        <div className="future-event">
          {events.map(event => {
            if (event.date >= Date.now()) {
              return <EventCard key={event.id} event={event} />;
            }
          })}
        </div>
        <h2>Past events </h2>
        <div className="past-events">
          {events.map(event => {
            if (event.date < Date.now()) {
              return <EventCard key={event.id} event={event} />;
            }
          })}
        </div>
      </div>
    </>
  );
};
