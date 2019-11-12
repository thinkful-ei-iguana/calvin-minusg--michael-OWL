import React from 'react';

const participants = [
  {
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  },
  {
      id: 2,
      name: 'Caty Flucker',
      avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
  {
      id: 4,
      name: 'Frank Runciman',
      avatar:
          'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 5,
      name: 'Ashla Attwool',
      avatar:
          'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  }
];

//need to add logic to line 52 to toggle between onstage/insession if onstage is true.
function participantList(){
return (
    <div className="participants-list">
        <div className="session-participant">
            <img src={participants.avatar} alt={participants.name} class="user-avatar"/>
            <div className="participant-info">
                <h6 className="participant-name">{participants.name}</h6>
                <div className="participant-status participant-status__green">{participants.onStage}{participants.inSession}</div>
            </div>
        </div>
    </div>
);
}

export default participantList();