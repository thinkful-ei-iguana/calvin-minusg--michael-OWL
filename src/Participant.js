 import React from 'react';
            
            
  export default function Participant(props){
    return (
    <div className="session-participant">
      <img src={props.avatar} alt={props.name} className="user-avatar"/>
      <div className="participant-info">
          <h6 className="participant-name">{props.name}</h6>
          <div className="participant-status participant-status__green">{props.onStage}{props.inSession}</div>
      </div>
    </div>
    )
  }