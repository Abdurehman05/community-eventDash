import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";
import { useHistory } from "react-router-dom";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []);
  const history = useHistory();
  return (
    <>
      <div className="locations">
        <div className="locationTitleButton">
          <h2>Locations</h2>
          <button
            onClick={() => {
              history.push("/locations/create");
            }}
          >
            Add New Location
          </button>
        </div>
        {locations.map(location => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </div>
    </>
  );
};
