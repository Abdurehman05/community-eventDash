import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { EventProvider } from "./event/EventProvider";
import { EventList } from "./event/EventList";

export const ApplicationViews = props => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <EventProvider>
        <Route path="/events">
          <EventList />
        </Route>
      </EventProvider>
    </>
  );
};
