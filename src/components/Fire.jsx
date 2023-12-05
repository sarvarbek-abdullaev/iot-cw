import React, { useEffect } from 'react';
import { useFirebaseValue } from '../useFirebase.js';

const Fire = () => {
  const isFire = useFirebaseValue('isFire');

  const requestAndSendNotification = () => {
    if (!window.Notification) return;

    isFire && new Notification('Fire Alert', {
      body: 'Fire is detected!!!',
      tag: 'fire',
    });

    if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(function (permission) {
      if (permission === 'granted' && isFire) {
        new Notification('Fire Alert', {
          body: 'Fire is detected!!!',
          tag: 'fire',
        });
      }
    });
    }
  };

  useEffect(() => {
    requestAndSendNotification();
  }, [isFire]);

  return <></>;
};

export default Fire;
