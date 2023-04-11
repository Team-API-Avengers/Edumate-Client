import React, { createContext, useEffect, useState } from "react";
import {
  PhoneAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [logUser, setLogUser] = useState();

  const [theme, setTheme] = useState('light');


  
	useEffect(() => {
		fetch(`https://edumate-second-server.vercel.app/api/v1/user/useremail/${user?.email}`)
			.then((res) => res.json())
			.then((result) => {
				// console.log(result);
				if(result !== undefined){
					setLogUser(result.data);
				}
			});
	}, [user?.email]);


  // console.log('user', user);

  

// console.log('logUser', logUser?.name);




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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
