import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBMyk6hli-vFuqlr-eltBBoRrLBu0UXhBg",
  authDomain: "my-pantry-tracker-app-369b7.firebaseapp.com",
  projectId: "my-pantry-tracker-app-369b7",
  storageBucket: "my-pantry-tracker-app-369b7.appspot.com",
  messagingSenderId: "607514417842",
  appId: "1:607514417842:web:66a11c594e1e08a0a907ab",
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };