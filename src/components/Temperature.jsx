import React, { useEffect, useState } from 'react';
import {useFirebaseValue, setFirebaseValue} from '../useFirebase.js';
import Gauge from 'canvas-gauges';
import {Box, Center, Heading, Input, Flex} from "@chakra-ui/react";

const Temperature = () => {
  const temperature = useFirebaseValue('temp');
  const averageTemperature = useFirebaseValue('averageTemperature');
  const [resetAverageTemperature, setResetAverageTemperature] = useState(averageTemperature);

  useEffect(() => {
    setResetAverageTemperature(averageTemperature); // Update local state when Firebase 'fan' value changes
  }, [averageTemperature]);

  const handleResetAverageTemperature = (val) => {
    setResetAverageTemperature(val);
    setFirebaseValue('averageTemperature', val);
  }

  useEffect(() => {
    const gauge = new Gauge.LinearGauge({
      renderTo: 'canvas-temperature',
      colorNumbers: 'red',
      width: 100,
      height: 300,
      units: "°C",
    });

    gauge.value = temperature;

  }, [temperature]);

  return (
    <Box marginY="4">
      <Heading size="md" my="4">Current Temperature: {temperature} </Heading>
      <Center>
        <canvas id="canvas-temperature"/>
      </Center>
      <Box>
        {temperature && (
          <Flex alignItems="center" gap="10px">
            <Heading size="md" my="4">Current Average Temperature:</Heading>
            <Input width="100px" value={resetAverageTemperature} onChange={(e) => handleResetAverageTemperature(+e.target.value)} placeholder="Reset Average Temperature" />
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Temperature;