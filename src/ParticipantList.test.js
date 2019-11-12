import React from 'react';
import ParticipantList from './ParticipantList';
import ReactDOM from 'react-dom';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<ParticipantList test1={[{
    id: 1,
    name: 'Koren Templeton',
    avatar:
        'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: true
  }]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});