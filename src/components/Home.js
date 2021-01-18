import React from "react";
import "./App.js";
import "./App.css";
import { Flag, Segment, Header } from "semantic-ui-react";
import { Container, Image, List } from "semantic-ui-react";

export const Home = (props) => (
  <>
    <Container>
      <Header as="h1">Welcome to ETHIO-Nash Community Events</Header>
      <Segment>
        <Flag name="us" />
        <Flag name="et" />
      </Segment>
      <h2>{props.greeting},</h2>

      <Image
        src="https://images.unsplash.com/photo-1552796066-d9461bd06935?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1466&q=80"
        alt="Afar North East Ethiopia"
      />
      <Header
        as="h2"
        image="https://israelforever.org/interact/blog/know-the-facts-484-x-252.png"
        content="Few facts about Ethiopia"
      />

      <List>
        <List.Item>
          <Image
            avatar
            src="https://i1.wp.com/eritreahub.org/wp-content/uploads/2018/02/Ethiopian-Flag-1.jpg?fit=988%2C704&ssl=1"
          />
          <List.Content>
            <List.Header>Ethiopia for vegetarians</List.Header>
            <List.Description>
              Ethiopian cooking is some of the tastiest, healthiest and most
              diverse cuisine on the continent. And, unlike many African
              countries, it’s a haven for vegetarians.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://i1.wp.com/eritreahub.org/wp-content/uploads/2018/02/Ethiopian-Flag-1.jpg?fit=988%2C704&ssl=1"
          />
          <List.Content>
            <List.Header>Addis Ababa</List.Header>
            <List.Description>
              Ok, there’s no getting away from the fact that Addis fits the bill
              of being a big, dusty, overcrowded city.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://i1.wp.com/eritreahub.org/wp-content/uploads/2018/02/Ethiopian-Flag-1.jpg?fit=988%2C704&ssl=1"
          />
          <List.Content>
            <List.Header>Abebe Bikila</List.Header>
            <List.Description>
              In 1960, an Ethiopian by the name of Abebe Bikila became the first
              black African to win gold in the Olympics.
            </List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <Image
            avatar
            src="https://i1.wp.com/eritreahub.org/wp-content/uploads/2018/02/Ethiopian-Flag-1.jpg?fit=988%2C704&ssl=1"
          />
          <List.Content>
            <List.Header>Complete independence</List.Header>
            <List.Description>
              Ethiopia is the only African country never to have been brought
              under colonial control – a fact that locals will never tire of
              informing you. And fair enough too.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  </>
);
