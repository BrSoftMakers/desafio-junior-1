import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3eP-g1r3lahzLc0cBusi0cnj0Cn4oGA0",
  authDomain: "softpet-f5549.firebaseapp.com",
  projectId: "softpet-f5549",
  storageBucket: "softpet-f5549.appspot.com",
  messagingSenderId: "347763152597",
  appId: "1:347763152597:web:afd6ccfe28cecb74a8345c",
  measurementId: "G-QKCM9JVV43",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
