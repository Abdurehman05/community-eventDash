import React, { useState, createContext } from "react";

export const MemberContext = createContext();

export const MemberProvider = props => {
  const [members, setMembers] = useState([]);

  const getMembers = () => {
    return fetch("http://localhost:8080/users")
      .then(res => res.json())
      .then(setMembers);
  };

  const addMember = memberObj => {
    return fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(memberObj)
    }).then(getMembers);
  };

  const getMemberById = id => {
    return fetch(`http://localhost:8080/users`).then(res => res.json());
  };

  const terminateMembership = memberId => {
    return fetch(`http://localhost:8080/users/${memberId}`, {
      method: "DELETE"
    }).then(getMembers);
  };

  const updateMember = member => {
    return fetch(`http://localhost:8080/users/${member.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(member)
    }).then(getMembers);
  };

  return (
    <MemberContext.Provider
      value={{
        members,
        getMembers,
        addMember,
        getMemberById,
        terminateMembership,
        updateMember
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};
