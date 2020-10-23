import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Location.css";

export const LocationDetail = () => {
  const { getLocationById, deleteLocation } = useContext(LocationContext);
  const [locations, setLocation] = useState({});
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
      <h3 className="location-name">{locations.name}</h3>
      <div className="location-userId">{activeUser}</div>
      <div className="location-street">{locations.street}</div>
      <div className="location-city">{locations.city}</div>
      <div className="location-zip">{locations.zip}</div>
      <div className="location-country">{locations.country}</div>
      <br></br>
      <button
        onClick={() => {
          deleteLocation(locations.id).then(() => {
            history.push("/locations");
          });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          history.push(`/locations/edit/${locations.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
