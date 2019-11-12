import React from "react";
import "./Stage.css";

export default function stage(props) {
  let newProps = props.participants.filter(
    participant => participant.onStage === true
  );
  return (
    <div className="stage">
      {newProps.map(participant => (
        <section key={participant.id} className="userContainer">
          <div>
            <h6>{participant.name}</h6>
          </div>
          <div>
            <img alt={participant.name} src={participant.avatar} />
          </div>
        </section>
      ))}
    </div>
  );
}
