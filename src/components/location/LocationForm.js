import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useHistory, useParams } from "react-router-dom";

export const LocationForm = () => {
  const { addLocation, getLocationById, editLocation } = useContext(
    LocationContext
  );
  const [location, setLocation] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const { locationId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = e => {
    const newLocation = { ...location };
    newLocation[e.target.name] = e.target.value;
    setLocation(newLocation);
  };

  useEffect(() => {
    if (locationId) {
      getLocationById(locationId).then(location => {
        setLocation(location);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructLocationObj = () => {
    setIsLoading(true);
    if (locationId) {
      editLocation({
        id: location.id,
        name: location.name,
        street: location.street,
        city: location.city,
        zip: location.zip,
        country: location.country,
        userId: parseInt(localStorage.getItem("active_user"))
      }).then(() => history.push(`/locations/detail/${location.id}`));
    } else {
      addLocation({
        name: location.name,
        street: location.street,
        city: location.city,
        zip: location.zip,
        country: location.country,
        userId: parseInt(localStorage.getItem("active_user"))
      }).then(() => history.push("/locations"));
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">Add New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationName">Location name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={location.name}
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationStreet">Street Address:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={location.street}
            required
            autoFocus
            className="form-control"
            placeholder="Street Address"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationCity">City:</label>
          <input
            type="text"
            id="locationCity"
            name="city"
            value={location.city}
            required
            autoFocus
            className="form-control"
            placeholder="City"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationZip">Zip Code:</label>
          <input
            type="text"
            id="locationZip"
            name="zip"
            value={location.zip}
            required
            autoFocus
            className="form-control"
            placeholder="Zip Code"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationCountry">Country</label>
          <input
            type="text"
            id="locationCountry"
            name="country"
            value={location.country}
            required
            autoFocus
            className="form-control"
            placeholder="Country"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={e => {
          e.preventDefault();
          constructLocationObj();
        }}
      >
        {locationId ? <>Save Location</> : <>Add Location</>}
      </button>
    </form>
  );
};
