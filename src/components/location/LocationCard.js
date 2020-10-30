import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

export const LocationCard = ({ location }) => (
  <Card>
    <Card.Content>
      <h3 className="location__name">
        <Card.Header>
          <Link to={`locations/detail/${location.id}`}>{location.name}</Link>
        </Card.Header>
      </h3>
      <div className="location__address">{location.street}</div>
      <div className="location__city">{location.city}</div>
    </Card.Content>
  </Card>
);
