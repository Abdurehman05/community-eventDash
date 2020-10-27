import React, { useContext, useEffect, useState } from "react";
import { MemberContext } from "./MemberProvider";
import { useHistory, useParams } from "react-router-dom";

export const MemberForm = () => {
  const { addMember, getMemberById, editMember } = useContext(MemberContext);
  const [member, setMember] = useState({
    username: "",
    email: "",
    gender: "",
    usertype: "",
    zipcode: ""
  });

  const [isLoading, setIsLoading] = useState(true);
  const { memberId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = e => {
    const newMember = { ...member };
    newMember[e.target.name] = e.target.value;
    setMember(newMember);
  };

  useEffect(() => {
    if (memberId) {
      getMemberById(memberId).then(member => {
        setMember(member);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructMemberObj = () => {
    setIsLoading(true);
    if (memberId) {
      editMember({
        id: member.id,
        username: member.username,
        email: member.email,
        gender: member.gender,
        usertype: member.usertype,
        zipcode: member.zipcode
        // userId: parseInt(localStorage.getItem("active_user"))
      }).then(() => history.push(`/members/detail/${member.id}`));
    } else {
      addMember({
        username: member.username,
        email: member.email,
        gender: member.gender,
        usertype: member.usertype,
        zipcode: member.zipcode
        // userId: parseInt(localStorage.getItem("active_user"))
      }).then(() => history.push("/members"));
    }
  };

  return (
    <form className="memberForm">
      <h2 className="memberForm__title">Add New Member</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="memberName">Member name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={member.username}
            required
            autoFocus
            className="form-control"
            placeholder="Member FullName"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="memberEmail">Email Address:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={member.email}
            required
            autoFocus
            className="form-control"
            placeholder="Email Address"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="MemberGender">Gender:</label>
          <input
            type="text"
            id="memberGender"
            name="gender"
            value={member.gender}
            required
            autoFocus
            className="form-control"
            placeholder="Gender"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="memberType">Is Admin:</label>
          <input
            type="boolean"
            id="memberType"
            name="usertype"
            value={member.usertype}
            required
            autoFocus
            className="form-control"
            placeholder="False"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="memberZip">Zip Code:</label>
          <input
            type="text"
            id="memberZip"
            name="zipcode"
            value={member.zipcode}
            required
            autoFocus
            className="form-control"
            placeholder="Zip Code"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={e => {
          e.preventDefault();
          constructMemberObj();
        }}
      >
        {memberId ? <>Save Member</> : <>Add Member</>}
      </button>
    </form>
  );
};
