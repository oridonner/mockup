import React from "react";

function FoolMeData({ data }) {
  if (!data) {
    return <div className="FoolMeData"></div>;
  }

  const { ip, domain, email, agent, something } = data;

  return (
    <div className="FoolMeData">
      <div>{ip}</div>
      <div>{domain}</div>
      <div>{email}</div>
      <div>{agent}</div>
      <div>{something}</div>
    </div>
  );
}

export default FoolMeData;
