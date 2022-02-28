import React from "react";
import FoolMeData from "../FoolMeData";

function PrivatePage({
  handleSignOut,
  handleFoolMe,
  foolMeData,
  handleForbidden,
}) {
  return (
    <div className="container-fluid big-bg">
      <div className="flex between full-width row">
        <button
          className="btn btn-primary"
          onClick={handleForbidden}
          style={{
            color: "red",
            background: "white",
            fontSize: "20px",
            fontWeight: "bolder",
            border: "none",
          }}
        >
          🏴‍☠️ Forbidden Zone
        </button>
        <button className="btn btn-primary" onClick={handleSignOut}>
          Logout
        </button>
      </div>
      <div className="half-width white-bg">
        <span className="app-header">Faker App</span>
        <FoolMeData data={foolMeData} />
        <div>
          <button className="btn btn-primary" onClick={handleFoolMe}>
            Fool me
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivatePage;
