import React from 'react';
import ParticipantList from './ParticipantList';
// import ChatLog from './ChatLog';
import Stage from './Stage';
import STORE from './STORE';
import './App.css';

function App() {
    return (<section className="main-display">
        <ParticipantList participants={STORE}></ParticipantList>
        <Stage participants={STORE}></Stage>
    </section>);
}

export default App;
