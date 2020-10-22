import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { EventProvider } from "./event/EventProvider";
import { EventList } from "./event/EventList";
import { EventForm } from "./event/EventForm";
import { EventDetail } from "./event/EventDetail";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";

export const ApplicationViews = props => {
  return (
    <>
      {/* Home */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Events */}
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

      {/* Locations */}

      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>
    </>
  );
};
