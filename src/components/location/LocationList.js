import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";
import { useHistory } from "react-router-dom";
import { Grid, Button, Card } from "semantic-ui-react";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []);
  const history = useHistory();
  return (
    <>
      <Button
        primary
        onClick={() => {
          history.push("/locations/create");
        }}
      >
        Add New Location
      </Button>
      <Card.Group centered itemsPerRow={2}>
        <Card>
          <h2>Locations</h2>
          {locations.map(location => {
            return <LocationCard key={location.id} location={location} />;
          })}
        </Card>
      </Card.Group>
    </>
  );
};
