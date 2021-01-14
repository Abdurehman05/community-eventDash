import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

export const LocationCard = ({ location }) => (
  <Card.Content>
    <Card.Header>
      <Link to={`locations/detail/${location.id}`}> {location.name}</Link>

      <div className="location__address">{location.street}</div>
      <div className="location__city">
        {location.city},{location.state}
      </div>
    </Card.Header>
  </Card.Content>
);
