import React from "react";

export default function Participant(prop) {
  return (
    <div className="session-participant" key={prop.id}>
      <img src={prop.avatar} alt={prop.name} className="user-avatar" />
      <div className="participant-info">
        <h6 className="participant-name">{prop.name}</h6>
        <div className={`onStage-${prop.onStage}`}></div>
        <div className={`onStage-${prop.inSession}`}></div>
      </div>
    </div>
  );
}
