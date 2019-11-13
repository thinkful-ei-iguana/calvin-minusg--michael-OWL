import React from "./React";
import "./chatLog.css";

const chatEvents = [
  {
    participantId: 3,
    type: "message",
    message: "Hello world",
    time: 1548852646559,
    timestamp: 1548852484247
  },
  {
    participantId: 2,
    type: "thumbs-up",
    timestamp: 1548852484247
  },
  {
    participantId: 4,
    type: "thumbs-down",
    timestamp: 1548852484247
  },
  {
    participantId: 1,
    type: "raise-hand",
    timestamp: 1548852544247
  },
  {
    participantId: 1,
    type: "clap",
    timestamp: 1548852544247
  },
  {
    participantId: 1,
    type: "join",
    timestamp: 1548852544247
  },
  {
    participantId: 5,
    type: "leave",
    timestamp: 1548852604247
  },
  {
    participantId: 3,
    type: "join-stage",
    timestamp: 1548852664247
  },
  {
    participantId: 3,
    type: "leave-stage",
    timestamp: 1548852724247
  }
];

// {
//   participantId: 3,
//   type: 'message',
//    join, leave, join-stage, leave-stage, clap, raise-hand, thumbs-up, thumbs-down
//   message: 'Hello world',
//   time: 1548852646559,
//   timestamp: 1548852484247
// },
export default function chatLog(props) {
  const messages = chatEvents.sort
  if (ce.type = "message"){
    return 
  } else{
  switch (ce.type) {
    case "join":
      message = `${participant.name} has joined.`;
      break;
    case "leave":
      message = `${participant.name} has left.`;
      break;
    case "join-stage":
      message = `${participant.name} has joined the stage.`;
      break;
    case "leave-stage":
      message = `${participant.name} has left the stage.`;
      break;
    case "clap":
      message = `${participant.name} clapped.	&#x1f44f;`;
      break;
    case "raise-hand":
      message = `${participant.name} raised their hand. &#9995;`;
      break;
    case "thumbs-up":
      message = `${participant.name} gave a thumbs up. &#128077;`;
      break;
    case "thumbs-down":
      message = `${participant.name} gave a thumbs down. &#128078;`;
      break;
    default:
      message = `error`;
      break;
  }

}
