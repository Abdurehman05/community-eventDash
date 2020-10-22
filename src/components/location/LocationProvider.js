import React, { useState, createContext } from "react";

export const LocationContext = createContext();

export const LocationProvider = props => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(setLocations);
  };

  const addLocation = locationObj => {
    return fetch("http://localhost:8080/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(locationObj)
    }).then(getLocations);
  };
  const getLocationById = id => {
    return fetch(`http://localhost:8080/locations/${id}`).then(res =>
      res.json()
    );
  };

  const deleteLocation = locationId => {
    return fetch(`http://localhost:8080/locations/${locationId}`, {
      method: "DELETE"
    }).then(getLocations);
  };

  const editLocation = location => {
    return fetch(`http://localhost:8080/locations/${location.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(location)
    }).then(getLocations);
  };

  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
        addLocation,
        getLocationById,
        deleteLocation,
        editLocation
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
