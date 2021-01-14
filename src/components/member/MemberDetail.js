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

  const showButton = () => {
    if (member.userId === parseInt(localStorage.getItem("active_user")))
      return (
        <>
          <button
            onClick={() => {
              deleteMember(member.id).then(() => {
                history.push("/members");
              });
            }}
          >
            Terminate Membership
          </button>
          {/* <button
            onClick={() => {
              history.push(`/members/edit/${member.id}`);
            }}
          >
            Edit
          </button> */}
        </>
      );
  };
  return (
    <section className="member">
      <h3 className="member-name">Name: {member.username}</h3>
      <div className="member-email">Email: {member.email}</div>
      <div className="member-gender">Gender: {member.gender}</div>
      <div className="member-type">Admin:{member.usertype}</div>
      <div className="member-zip">Zip-Code:{member.zipcode}</div>
      {/* <div className="memberId">{activeUser}</div> */}
      <section className="buttons">{showButton()}</section>
    </section>
  );
};
