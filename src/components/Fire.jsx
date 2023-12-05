import React, {useEffect, useState} from 'react';
import { useFirebaseValue } from '../useFirebase.js';
import addNotification from "react-push-notification";

const Fire = () => {
  const isFire = useFirebaseValue('isFire');
  const [fire, setFire] = useState(isFire);

  const requestAndSendNotification = () => {
    if (!window.Notification) return;

    if(fire === 1) {
      new Notification('Fire Alert', {
        body: 'Fire is detected!!!',
        tag: 'fire',
      });

      addNotification({
        title: "Fire Alert",
        subtitle: "Fire is detected!!!",
        message: "There is a fire in the office",
        theme: "red",
        closeButton: "X",
        duration: 10000,
        backgroundTop: "darkred",
        backgroundBottom: "maroon",
      })
    }

    if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(function (permission) {
      if (permission === 'granted' && isFire) {
        if(fire === 1) {
          new Notification('Fire Alert', {
            body: 'Fire is detected!!!',
            tag: 'fire',
          });

          addNotification({
            title: "Success",
            subtitle: "You have successfully submitted",
            message: "Welcome to GeeksforGeeks",
            theme: "light",
            closeButton: "X",
            backgroundTop: "green",
            backgroundBottom: "yellowgreen",
          })
        }
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
