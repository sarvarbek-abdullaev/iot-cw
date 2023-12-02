import React, {useEffect} from 'react';
import {useFirebaseValue} from '../useFirebase.js';
import Gauge from "canvas-gauges";
import {Box, Center, Heading} from "@chakra-ui/react";

const Humidity = () => {
  const humidity = useFirebaseValue ('hum');

  useEffect(() => {
    const gauge = new Gauge.RadialGauge({
      renderTo: 'canvas-humidity',
      colorNumbers: 'red',
      width: 300,
      height: 400,
    });

    gauge.value = humidity;

  }, [humidity]);

  return (
    <Box>
      <Heading size="md" my="4" textAlign="center">Humidity: {humidity} </Heading>
      <Center>
        <canvas id="canvas-humidity"/>
      </Center>
    </Box>
  )
};

export default Humidity;
