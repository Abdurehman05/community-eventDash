import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

export const LocationCard = ({ location }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        <Link to={`locations/detail/${location.id}`}>{location.name}</Link>
      </Card.Header>
      <Card.Content>{location.street} </Card.Content>
      <Card.Content>{location.city}</Card.Content>
    </Card.Content>
  </Card>
);
