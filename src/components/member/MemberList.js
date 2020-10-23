import React, { useContext, useEffect } from "react";
import { MemberContext } from "./MemberProvider";
import { MemberCard } from "./MemberCard";
import { useHistory } from "react-router-dom";

export const MemberList = () => {
  const { members, getMembers } = useContext(MemberContext);

  useEffect(() => {
    getMembers();
  }, []);

  const history = useHistory();
  return (
    <>
      <div className="members">
        <div className="memberTitleButton">
          <h2>List of Ethio-Nashville Community Members</h2>
          <button
            onClick={() => {
              history.push("/members/create");
            }}
          >
            Add New Member
          </button>
        </div>

        {members.map(member => {
          return <MemberCard key={member.id} member={member} />;
        })}
      </div>
    </>
  );
};
