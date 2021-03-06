import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import "./Event.css";
import { useHistory } from "react-router-dom";
import { Grid, Container, Button } from "semantic-ui-react";

export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  const history = useHistory();
  return (
    <>
      <Container>
        <h2>Events</h2>
        <Button
          primary
          onClick={() => {
            history.push("/events/create");
          }}
        >
          Add New Event
        </Button>

        <h2>All events </h2>
        <Grid container columns={3}>
          <Grid.Row>
            {events.map((event) => {
              return (
                <Grid.Column>
                  <EventCard key={event.id} event={event} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
          <h2>Coming events</h2>
          <Grid.Row>
            {events.map((event) => {
              if (event.date >= Date.now()) {
                return (
                  <Grid.Column>
                    <EventCard key={event.id} event={event} />
                  </Grid.Column>
                );
              }
            })}
          </Grid.Row>
          <h2>Past events </h2>
          <Grid.Row>
            {events.map((event) => {
              if (event.date < Date.now()) {
                return (
                  <Grid.Column>
                    <EventCard key={event.id} event={event} />
                  </Grid.Column>
                );
              }
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
