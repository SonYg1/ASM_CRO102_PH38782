// App.tsx
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';

const firebaseConfig = {
  apiKey: "AIzaSyB8MnqGcqzdf4qnd8Tc88AZZ2JbzsCwhDQ",
  authDomain: "asm-cro102-ph38782.firebaseapp.com",
  databaseURL: "https://asm-cro102-ph38782-default-rtdb.firebaseio.com",
  projectId: "asm-cro102-ph38782",
  storageBucket: "asm-cro102-ph38782.appspot.com",
  messagingSenderId: "127595309458",
  appId: "1:127595309458:web:30b36087e7c1f0f3d9394b",
  measurementId: "G-GKCN01RC82"
};

const app = initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully!');
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully!');
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <Home user={user} handleLogout={handleLogout} />
      ) : isLogin ? (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          switchToSignUp={() => setIsLogin(false)}
        />
      ) : (
        <SignUp
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSignUp={handleSignUp}
          switchToLogin={() => setIsLogin(true)}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
