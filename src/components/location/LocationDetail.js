import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Location.css";

export const LocationDetail = () => {
  const { getLocationById, deleteLocation } = useContext(LocationContext);
  const [location, setLocation] = useState({});
  const { locationId } = useParams();
  const history = useHistory();
  const activeUser = sessionStorage.getItem("activeUser");

  useEffect(() => {
    getLocationById(locationId).then(response => {
      setLocation(response);
    });
  }, []);
  return (
    <section className="location">
      <h3 className="location-name">{location.name}</h3>
      <div className="location-userId">{activeUser}</div>
      <div className="location-street">{location.street}</div>
      <div className="location-city-state">
        {location.city},{location.state}
      </div>
      <div className="location-zip">{location.zip}</div>
      <div className="location-country">{location.country}</div>
      <br></br>
      <button
        onClick={() => {
          deleteLocation(location.id).then(() => {
            history.push("/locations");
          });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          history.push(`/locations/edit/${location.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
