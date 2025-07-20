// AuthObserver.jsx
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import {setUser , logout } from "../redux/authSlice";

export default function AuthObserver() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe(); // cleanup
  }, [dispatch]);

  return null; // No UI
}


