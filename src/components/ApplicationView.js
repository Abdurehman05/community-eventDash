import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { EventProvider } from "./event/EventProvider";
import { EventList } from "./event/EventList";
import { EventForm } from "./event/EventForm";
import { EventDetail } from "./event/EventDetail";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { LocationDetail } from "./location/LocationDetail";
import { LocationForm } from "./location/LocationForm";
import { MemberProvider } from "./member/MemberProvider";
import { MemberList } from "./member/MemberList";
import { MemberForm } from "./member/MemberForm";
import { MemberDetail } from "./member/MemberDetail";
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
        <LocationProvider>
          <Route exact path="/events/create">
            <EventForm />
          </Route>
        </LocationProvider>
      </EventProvider>

      <EventProvider>
        <LocationProvider>
          <Route exact path="/events/detail/:eventId(\d+)">
            <EventDetail />
          </Route>
        </LocationProvider>
      </EventProvider>

      <EventProvider>
        <LocationProvider>
          <Route exact path="/events/edit/:eventId(\d+)">
            <EventForm />
          </Route>
        </LocationProvider>
      </EventProvider>

      {/* Locations */}

      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      <LocationProvider>
        <Route exact path="/locations/create">
          <LocationForm />
        </Route>
      </LocationProvider>

      <LocationProvider>
        <Route exact path="/locations/detail/:locationId(\d+)">
          <LocationDetail />
        </Route>
      </LocationProvider>

      <LocationProvider>
        <Route exact path="/locations/edit/:locationId(\d+)">
          <LocationForm />
        </Route>
      </LocationProvider>

      {/* Members */}
      <MemberProvider>
        <Route exact path="/members">
          <MemberList />
        </Route>
      </MemberProvider>

      <MemberProvider>
        <Route exact path="/members/create">
          <MemberForm />
        </Route>
      </MemberProvider>

      <MemberProvider>
        <Route exact path="/members/detail/:memberId(\d+)">
          <MemberDetail />
        </Route>
      </MemberProvider>

      <MemberProvider>
        <Route exact path="/members/edit/:memberId(\d+)">
          <MemberForm />
        </Route>
      </MemberProvider>
    </>
  );
};
