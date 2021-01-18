import React, { useContext, useEffect } from "react";
import { MemberContext } from "./MemberProvider";
import { MemberCard } from "./MemberCard";
import { useHistory } from "react-router-dom";
import { Container, Grid, Button } from "semantic-ui-react";

export const MemberList = () => {
  const { members, getMembers } = useContext(MemberContext);

  useEffect(() => {
    getMembers();
  }, []);

  const history = useHistory();
  return (
    <>
      <Container>
        <h2>List of Ethio-Nashville Community Members</h2>
        <Button
          primary
          onClick={() => {
            history.push("/members/create");
          }}
        >
          Add New Member
        </Button>

        <Grid container columns={3}>
          <Grid.Row>
            {members.map((member) => {
              return (
                <Grid.Column>
                  <MemberCard key={member.id} member={member} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
