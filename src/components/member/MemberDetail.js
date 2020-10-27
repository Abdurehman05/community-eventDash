import React, { useContext, useEffect, useState } from "react";
import { MemberContext } from "./MemberProvider";
import { useHistory, useParams } from "react-router-dom";

export const MemberDetail = () => {
  const { getMemberById, deleteMember } = useContext(MemberContext);
  const [member, setMember] = useState({});
  const { memberId } = useParams();
  const history = useHistory();
  const activeUser = sessionStorage.getItem("activeUser");

  useEffect(() => {
    getMemberById(memberId).then(response => {
      setMember(response);
    });
  }, []);
  return (
    <section className="member">
      <h3 className="member-name">{member.username}</h3>
      <div className="member-email">{member.email}</div>
      <div className="member-gender">{member.gender}</div>
      <div className="member-type">{member.usertype}</div>
      <div className="member-zip">{member.zip}</div>
      <div className="memberId">{activeUser}</div>

      <button
        onClick={() => {
          deleteMember(member.id).then(() => {
            history.push("/members");
          });
        }}
      >
        Terminate Membership
      </button>
      <button
        onClick={() => {
          history.push(`/members/edit/${member.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
