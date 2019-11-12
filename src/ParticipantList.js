import React from 'react';
import Participant from './Participant';

export default function participantList(props){
    return (
        <div className="participants-list">
            {props.map((prop)=>
                <Participant
                   key = {prop.id}
                   name = {prop.name}
                   avatar = {prop.avatar}
                   inSession = {prop.inSession}
                   onStage = {prop.onStage}
                            />
            )}   
        </div>
    );
}

