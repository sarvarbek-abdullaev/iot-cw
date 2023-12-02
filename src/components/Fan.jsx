import React, { useState } from 'react';
import { useFirebaseValue, setFirebaseValue } from '../useFirebase.js'; // Assuming an update function is available
import {Box, Divider, Heading, Select} from "@chakra-ui/react";

const Fan = () => {
  const fanValue = useFirebaseValue('fan');
  const autoControlFanValue = useFirebaseValue('autoControlFan');
  const [fan, setFan] = useState(fanValue);
  const [autoControlFan, setAutoControlFan] = useState(autoControlFanValue);

  const handleNumbersToWords = (number) => {
    if (number == 0) {
      return 'off';
    } else if (number == 1) {
      return 'on';
    } else {
      return '';
    }
  };

  const handleFanChange = (value) => {
    setFan(value);
    setFirebaseValue('fan', value); // Update the 'fan' value in Firebase
  };
  const handleAutoControlFanChange = (value) => {
    setAutoControlFan(value);
    setAutoControlFan('autoControlFan', value); // Update the 'fan' value in Firebase
  };

  return (
      <Box>
        {
          fanValue && (
            <>
              <Heading size="md" my="4">Current Fan Status: {handleNumbersToWords(fanValue)}</Heading>
              <Heading size="md" my="4">Set New Fan Status: </Heading>
              <Select onChange={(e) => handleFanChange(e.target.value)}>
                <option>Select the value</option>
                <option value={0} >Off</option>
                <option value={1} >On</option>
              </Select>
            </>
          )
        }
        <Divider my="4" />
        {
          autoControlFanValue && (
            <>
              <Heading size="md" my="4">Current Fan Status: {handleNumbersToWords(autoControlFanValue)}</Heading>
              <Heading size="md" my="4">Set New Fan Status: </Heading>
              <Select onChange={(e) => handleAutoControlFanChange(e.target.value)}>
                <option>Select the value</option>
                <option value={0} >Off</option>
                <option value={1} >On</option>
              </Select>
            </>
          )
        }
      </Box>
    )
};

export default Fan;
