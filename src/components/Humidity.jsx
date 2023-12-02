import React from 'react';
import useFirebaseValue from '../useFirebase.js';

const Humidity = () => {
  const humidity = useFirebaseValue ('hum');

  return (
    <div>
      <h1>Temperature</h1>
      <p>{humidity}</p>
    </div>
  )
};

export default Humidity;
