import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";
import { useHistory } from "react-router-dom";
import { Container, Grid, Button } from "semantic-ui-react";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []);
  const history = useHistory();
  return (
    <>
      <Container>
        <div className="locations">
          <div className="locationTitleButton">
            <h2>Locations</h2>
            <Button
              primary
              onClick={() => {
                history.push("/locations/create");
              }}
            >
              Add New Location
            </Button>
          </div>
          <Grid>
            <Grid.Row columns={3}>
              {locations.map((location) => {
                return (
                  <Grid.Column>
                    <LocationCard key={location.id} location={location} />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    </>
  );
};
