import React from "react";
import "./ParticipantList.css";
import Participant from "./Participant";

export default function participantList(props) {
  let newProps = props.participants.filter(
    participant => participant.inSession === true
  );
  return (
    <div className="participants-list">
      {newProps.map(participant => (
        <Participant
          key={participant.id}
          name={participant.name}
          avatar={participant.avatar}
          inSession={participant.inSession}
          onStage={participant.onStage}
        />
      ))}
    </div>
  );
}
