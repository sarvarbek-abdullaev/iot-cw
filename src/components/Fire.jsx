import React, {useEffect, useState} from 'react';
import { useFirebaseValue } from '../useFirebase.js';

const Fire = () => {
  const isFire = useFirebaseValue('isFire');
  const [fire, setFire] = useState(isFire);

  const requestAndSendNotification = () => {
    if (!window.Notification) return;

    isFire && new Notification('Fire Alert', {
      body: 'Fire is detected!!!',
      tag: 'fire',
    });

    if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(function (permission) {
      if (permission === 'granted' && isFire) {
        isFire && new Notification('Fire Alert', {
          body: 'Fire is detected!!!',
          tag: 'fire',
        });
      }
    });
    }
  };

  useEffect(() => {
    setFire(isFire);
  }, [isFire]);

  useEffect(() => {
    requestAndSendNotification(fire);
  }, [fire]);

  return <></>;
};

export default Fire;
