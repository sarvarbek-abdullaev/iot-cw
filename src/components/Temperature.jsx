// Temperature.js
import React from 'react';
import useFirebaseValue from '../useFirebase.js';

const Temperature = () => {
  const temperature = useFirebaseValue ('temp');

  return (
    <div>
      <h1>Temperature</h1>
      <p>{temperature}</p>
    </div>
  )
};

export default Temperature;