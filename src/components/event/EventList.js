import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import "./Event.css";
import { useHistory } from "react-router-dom";
import { Grid, Button, Card } from "semantic-ui-react";

export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  const history = useHistory();
  return (
    <>
      <h2>Events</h2>
      <Button
        primary
        onClick={() => {
          history.push("/events/create");
        }}
      >
        Add New Event
      </Button>

      <Card.Group itemsPerRow={2}>
        <Card>
          <h2>Coming events</h2>
          {events.map(event => {
            if (event.date >= Date.now()) {
              return <EventCard key={event.id} event={event} />;
            }
          })}
        </Card>

        <Card>
          <h2>Past events </h2>
          {events.map(event => {
            if (event.date < Date.now()) {
              return <EventCard key={event.id} event={event} />;
            }
          })}
        </Card>

        <Card>
          <h2>All events </h2>s
          {events.map(event => {
            return <EventCard key={event.id} event={event} />;
          })}
        </Card>
      </Card.Group>
    </>
  );
};
