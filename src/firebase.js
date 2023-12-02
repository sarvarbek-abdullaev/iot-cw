import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCFv4mTm42prT3po5jHUJUrcBdJM5R0uSs",
  authDomain: "iot-cw-5952c.firebaseapp.com",
  databaseURL: "https://iot-cw-5952c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-cw-5952c",
  storageBucket: "iot-cw-5952c.appspot.com",
  messagingSenderId: "517467874226",
  appId: "1:517467874226:web:e491e3fbb9d4dd45173aab"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;