// Meet.js

import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
// import app from '../../Firebase/Firebase.init';
// import { AuthContext } from '../../Context/AuthProvider';
import { GoogleMeet } from 'react-google-meet';

const Meet = ({ roomId }) => {

    // const {user} = useContext(AuthContext)


    const [participants, setParticipants] = useState([]);

    useEffect(() => {
      const dbRef = firebase.database().ref(`meetings/${roomId}/participants`);
      dbRef.on('value', (snapshot) => {
        const participantsData = snapshot.val();
        if (participantsData) {
          const participantsArray = Object.values(participantsData);
          setParticipants(participantsArray);
        }
      });
  
      return () => {
        dbRef.off();
      };
    }, [roomId]);
  

  return (
    <div>
    <GoogleMeet code={roomId} />
    <ul>
      {participants.map((participant) => (
        <li key={participant.id}>{participant.name}</li>
      ))}
    </ul>
  </div>
  );
};

export default Meet;
