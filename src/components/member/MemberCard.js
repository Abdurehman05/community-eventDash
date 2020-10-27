import React from "react";
import { Link } from "react-router-dom";

export const MemberCard = ({ member }) => (
  <section className="member">
    <h3 className="member__name">
      <Link to={`members/detail/${member.id}`}>{member.username}</Link>
    </h3>
  </section>
);
