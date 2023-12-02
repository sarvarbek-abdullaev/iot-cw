import React, { useEffect, useState } from 'react';
import {useFirebaseValue, setFirebaseValue} from '../useFirebase.js';
import Gauge from 'canvas-gauges';
import {Box, Center, Heading, Input} from "@chakra-ui/react";

const Temperature = () => {
  const temperature = useFirebaseValue('temp');
  const averageTemperature = useFirebaseValue('averageTemperature');
  const [resetAverageTemperature, setResetAverageTemperature] = useState(averageTemperature);

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
      <Heading size="md" my="4">Current Average Temperature: {averageTemperature}</Heading>
        {temperature && (
          <>
            <Heading size="md" my="4">Set New Average Temperature: </Heading>
            <Input value={resetAverageTemperature} onChange={(e) => handleResetAverageTemperature(+e.target.value)} placeholder="Reset Average Temperature" />
          </>
        )}
        {/*<Button colorScheme="teal" size="md" my="4" onClick={ }>Reset Average Temperature</Button>*/}
      </Box>
    </Box>
  );
};

export default Temperature;