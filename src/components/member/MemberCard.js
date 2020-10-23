import React from "react";

export const MemberCard = ({ member }) => (
  <section className="member">
    <h3 className="member__name">{member.username}</h3>
  </section>
);
