import React from 'react';
import ParticipantList from './ParticipantList';
import ReactDOM from 'react-dom';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<ParticipantList />, div);
  ReactDOM.unmountComponentAtNode(div);
});