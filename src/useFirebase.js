import { useState, useEffect } from 'react';
import { ref, onValue, get } from 'firebase/database';
import database from './firebase.js';

const useFirebaseValue = (reference) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const query = ref(database, reference);

    const fetchInitialValue = async () => {
      const snapshot = await get(query);
      if (snapshot.exists()) {
        const data = snapshot.val();
        setValue(data);
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

export default useFirebaseValue;
