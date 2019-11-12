import React from 'react';
import Participant from './Participant';

export default function participantList(props){
    return (
        <div className="participants-list">
            {props.participants.map((participant)=>
                <Participant
                   key = {participant.id}
                   title = {participant.name}
                   avatar = {participant.avatar}
                   inSession = {participant.inSession}
                   onStage = {participant.onStage}
                            />
            )}   
        </div>
    );
}

