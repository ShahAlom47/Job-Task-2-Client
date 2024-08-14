
import { GoogleAuthProvider } from "firebase/auth";

import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types'
import useAxiosPublic from "../CustomHocks/useAxiosPublic";
import auth from "../../firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const axiosPublic=useAxiosPublic()



  const googleProvider = new GoogleAuthProvider();


  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }


  const addUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)

  }
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)

  }


  const logout = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
     
      if(user){
        const userInfo=user.email
        axiosPublic.post('/jwt',{userInfo})
         .then(res=>{
           if(res.data.token){
                 localStorage.setItem('token',res.data.token)
             }
             })
     }

     else{
         localStorage.removeItem('token')
     }
      setUser(user);
      setLoading(false);
  
    });
    return () => unSubscribe

  }, [loading, user,axiosPublic])



  const userInfo = {
    user,
    loading,
    googleLogin,
    addUser,
    login,
    logout,
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {
        children
      }

    </AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node
};
