import React from "react";
import "./App.js";
import "./App.css";
import { Flag, Segment, Header } from "semantic-ui-react";

export const Home = () => (
  <>
    <Header as="h1">Welcome to ETHIO-Nash Community Events</Header>

    <Segment>
      <Flag name="us" />
      <Flag name="et" />
    </Segment>
  </>
);
