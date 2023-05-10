import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  //! Data Search Query States
  const [filteredData, setFilteredData] = useState([]);




  // const [logUser, setLogUser] = useState();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const body = document.body;
    body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);


  //   fetch(
  //     `https://edumate-second-server.vercel.app/api/v1/user/useremail/${user?.email}`
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       // console.log(result);
  //       if (result !== undefined) {
  //         setLogUser(result?.data);
  //       }
  //     });
  // }, [user?.email]);


  // console.log(logUser);



  const { data: logUser = [], refetch } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://edumate-second-server.vercel.app/api/v1/user/useremail/${user?.email}`
        );
        const data = await res.json();
        return data?.data;
      } catch (err) {
        // console.error(err);
      }
    },
  });









  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };





  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log('user observing');
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);








  const authInfo = {
    createUser,
    signIn,
    user,
    logOut,
    updateUser,
    loading,
    signInWithGoogle,
    logUser,
    theme,
    setTheme,
    refetch,
    filteredData, 
    setFilteredData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
