import React, { useState, createContext } from "react";

export const EventContext = createContext();

export const EventProvider = props => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return fetch(
      "http://localhost:8080/events?_expand=user&_expand=location&_sort=date&_order=asc"
    )
      .then(res => res.json())
      .then(setEvents);
  };

  const addEvent = eventObj => {
    return fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventObj)
    }).then(getEvents);
  };

  const getEventById = id => {
    return fetch(
      `http://localhost:8080/events/${id}?_expand=location&_expand=user`
    ).then(res => res.json());
  };

  const deleteEvent = eventId => {
    return fetch(`http://localhost:8080/events/${eventId}`, {
      method: "DELETE"
    }).then(getEvents);
  };

  const editEvent = event => {
    return fetch(`http://localhost:8080/events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    }).then(getEvents);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        getEvents,
        addEvent,
        getEventById,
        deleteEvent,
        editEvent
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
