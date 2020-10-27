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
    return fetch(`http://localhost:8080/users/${id}`).then(res => res.json());
  };

  const deleteMember = memberId => {
    return fetch(`http://localhost:8080/users/${memberId}`, {
      method: "DELETE"
    }).then(getMembers);
  };

  const editMember = user => {
    return fetch(`http://localhost:8080/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(getMembers);
  };

  return (
    <MemberContext.Provider
      value={{
        members,
        getMembers,
        addMember,
        getMemberById,
        deleteMember,
        editMember
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};
