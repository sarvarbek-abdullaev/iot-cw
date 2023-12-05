import React, { useState, useEffect } from 'react';
import { useFirebaseValue, setFirebaseValue } from '../useFirebase.js'; // Assuming an update function is available
import { Box, Divider, Heading, Select, Flex } from "@chakra-ui/react";

const Fan = () => {
  const fanValue = useFirebaseValue('fan');
  const autoControlFanValue = useFirebaseValue('autoControlFan');
  const [fan, setFan] = useState(fanValue);
  const [autoControlFan, setAutoControlFan] = useState(autoControlFanValue);

  useEffect(() => {
    setFan(fanValue); // Update local state when Firebase 'fan' value changes
  }, [fanValue]);

  useEffect(() => {
    setAutoControlFan(autoControlFanValue); // Update local state when Firebase 'autoControlFan' value changes
  }, [autoControlFanValue]);

  const handleFanChange = (value) => {
    setFan(parseInt(value, 10)); // Ensure the value is an integer
    setFirebaseValue('fan', parseInt(value, 10)); // Update the 'fan' value in Firebase
  };

  const handleAutoControlFanChange = (value) => {
    setAutoControlFan(parseInt(value, 10)); // Ensure the value is an integer
    setFirebaseValue('autoControlFan', parseInt(value, 10)); // Update the 'autoControlFan' value in Firebase
  };

  return (
    <Box maxW="600px" width="100%">
        <Flex my="4" justifyContent="space-between">
          <Heading size="md" my="4">Fan Status: </Heading>
          {fanValue !== null && (
            <Select maxW="200px" value={fan} onChange={(e) => handleFanChange(e.target.value)}>
              <option disabled value="Select the value">Select the value</option>
              <option value={0}>Off</option>
              <option value={1}>On</option>
            </Select>
          )}
        </Flex>
      <Divider my="4" />
        <Flex my="4" justifyContent="space-between">
          <Heading size="md">Fan Auto-Control Status: </Heading>
          {autoControlFanValue !== null && (
            <Select maxW="200px" value={autoControlFan} onChange={(e) => handleAutoControlFanChange(e.target.value)}>
              <option disabled value="Select the value">Select the value</option>
              <option value={0}>Off</option>
              <option value={1}>On</option>
            </Select>
          )}
        </Flex>
    </Box>
  );
};

export default Fan;
