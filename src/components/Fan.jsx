// Fan.js
import React from 'react';
import useFirebaseValue from '../useFirebase.js';

const Fan = () => {
  const fan = useFirebaseValue ('fan');
  const autoControlFan = useFirebaseValue ('autoControlFan');

  const handleNumbersToWords = (number) => {
    if (number === 0) {
      return 'off';
    } else if (number === 1) {
      return 'on';
    } else {
      return 'error';
    }
  };

  return (
    <div>
      <h1>Fan</h1>
      <p>{handleNumbersToWords(fan)}</p>
      <h1>autoControlFan</h1>
      <p>{handleNumbersToWords(autoControlFan)}</p>
    </div>
  )
};

export default Fan;
