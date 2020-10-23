import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { LocationContext } from "../location/LocationProvider";
import "./Event.css";
import { useHistory, useParams } from "react-router-dom";

export const EventForm = () => {
  const { addEvent, getEventById, editEvent } = useContext(EventContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [event, setEvent] = useState({ name: "", date: "", time: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { eventId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = e => {
    const newEvent = { ...event };
    newEvent[e.target.name] = e.target.value;
    setEvent(newEvent);
  };

  useEffect(() => {
    getLocations().then(() => {
      if (eventId) {
        getEventById(eventId).then(event => {
          setEvent(event);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const constructEventObj = () => {
    if (parseInt(event.locationId) === 0) {
      window.alert("Please select a location for your event");
    } else {
      setIsLoading(true);
      if (eventId) {
        editEvent({
          id: event.id,
          name: event.name,
          date: event.date,
          time: event.time,
          locationId: parseInt(event.locationId),
          userId: parseInt(localStorage.getItem("active_user"))
        }).then(() => history.push(`/events/detail/${event.id}`));
      } else {
        addEvent({
          name: event.name,
          date: event.date,
          time: event.time,
          locationId: parseInt(event.locationId),
          userId: parseInt(localStorage.getItem("active_user"))
        }).then(() => history.push("/events"));
      }
    }
  };

  return (
    <form className="eventForm">
      <h2 className="eventForm__title">Add New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventName">Event name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={event.name}
            required
            autoFocus
            className="form-control"
            placeholder="Event name"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventDate">Date:</label>
          <input
            type="date"
            id="eventDate"
            name="date"
            value={event.date}
            required
            autoFocus
            className="form-control"
            placeholder="Date"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventTime">Time:</label>
          <input
            type="time"
            id="eventTime"
            name="time"
            value={event.time}
            required
            autoFocus
            className="form-control"
            placeholder="Time"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Choose event location: </label>
          <select
            value={event.locationId}
            name="locationId"
            id="eventLocation"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={e => {
          e.preventDefault();
          constructEventObj();
        }}
      >
        {eventId ? <>Save Event</> : <>Add Event</>}
      </button>
    </form>
  );
};
