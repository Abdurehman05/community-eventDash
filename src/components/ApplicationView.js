import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { EventProvider } from "./event/EventProvider";
import { EventList } from "./event/EventList";
import { EventForm } from "./event/EventForm";
import { EventDetail } from "./event/EventDetail";

export const ApplicationViews = props => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <EventProvider>
        <Route exact path="/events">
          <EventList />
        </Route>
      </EventProvider>

      <EventProvider>
        <Route exact path="/events/create">
          <EventForm />
        </Route>
      </EventProvider>
      <EventProvider>
        <Route exact path="/events/detail/:eventId(\d+)">
          <EventDetail />
        </Route>
      </EventProvider>
      <EventProvider>
        <Route exact path="/events/edit/:eventId(\d+)">
          <EventForm />
        </Route>
      </EventProvider>
    </>
  );
};
