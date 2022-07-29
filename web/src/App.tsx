import { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';

import { Login } from "./pages/Login";
import { Home } from './pages/Home';

import '@fontsource/poppins';
import { firebaseConfig } from './config/firebase';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(setUser);

    return subscriber;
  }, [])

  return user ? <Home auth={auth} /> : <Login auth={auth}/>
}

export default App
