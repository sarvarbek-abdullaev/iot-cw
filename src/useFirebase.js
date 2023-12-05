import { useState, useEffect } from 'react';
import { ref, onValue, get, set } from 'firebase/database';
import database from './firebase.js';

export const useFirebaseValue = (reference) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const query = ref(database, reference);

    const fetchInitialValue = async () => {
      const snapshot = await get(query);
      if (snapshot.exists()) {
        const data = snapshot.val();
        setValue(data.toString());
      }
    };

    fetchInitialValue();

    const unsubscribe = onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setValue(data);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [reference]);

  return value;
};

export const setFirebaseValue = (reference, value) => {
  const query = ref(database, reference);
  set(query, value);
};