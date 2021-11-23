import { useEffect, useState } from "react";
import firebaseInitialization from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //load admin data
  useEffect(() => {
    fetch(`https://nameless-woodland-81515.herokuapp.com/users/${user.email}`)
      .then((response) => response.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  //sign in new user
  const registerNewUser = (email, password, name, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        const user = result.user;
        const newUser = { email, displayName: name };
        savedUser(email, name, "POST");
        setUser(user, newUser);
        setError("");
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //sign in user
  const loginUser = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        const destination = location.state.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //sign in with google
  const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const destination = location.state.from || "/";
        savedUser(user.email, user.displayName, "PUT");
        setUser(user);
        setError("");
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //saved user to the database
  const savedUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://nameless-woodland-81515.herokuapp.com/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    user,
    registerNewUser,
    error,
    logOut,
    loginUser,
    loading,
    signInWithGoogle,
    admin
  };
};

export default useFirebase;
