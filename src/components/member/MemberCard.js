import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

export const MemberCard = ({ member }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        <Link to={`members/detail/${member.id}`}>{member.username}</Link>
      </Card.Header>
    </Card.Content>
  </Card>
);
