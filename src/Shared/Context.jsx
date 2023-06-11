import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateData = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser && currentUser?.email) {
        axios
          .post(
            "https://b7a12-summer-camp-server-side-mdasif61.vercel.app/jwt",
            { email: currentUser.email }
          )
          .then((res) => {
            localStorage.setItem("access_token", res.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access_token");
      }

      // setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const info = {
    user,
    createUser,
    signIn,
    logOut,
    updateData,
    googleLogin,
    loading,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Context;
