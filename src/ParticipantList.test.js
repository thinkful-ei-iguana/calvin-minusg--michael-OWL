import React from 'react';
import ParticipantList from './ParticipantList';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import renderer from 'react-test-renderer';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<ParticipantList participants = {STORE} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<ParticipantList participants = {STORE}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });