import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ParticipantList from "./ParticipantList";
// import Participant from './Participant';
import STORE from "./STORE";

console.log(STORE[0]);

ReactDOM.render(
  <ParticipantList participants={STORE} />,
  document.getElementById("root")
);
