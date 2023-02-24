
   import { useEffect, useState } from "react";
   import { getAuth, onAuthStateChanged } from "firebase/auth";

   export function useAuthStatus() {
     const [loggedIn, setLoggedIn] = useState(false);
     const [checkingStatus, setCheckingStatus] = useState(true);

     useEffect(() => {
       const auth = getAuth();
       console.log(auth);
       onAuthStateChanged(auth, (user) => {
         if (user) {
           setLoggedIn(true);
         }
         setCheckingStatus(false);
       });
     }, []);
     return { loggedIn, checkingStatus };
   }

   import { Outlet, Navigate } from "react-router-dom";
   import { useAuthStatus } from "../hooks/useAuthStatus";
   import Spinner from "./Spinner";
   export default function PrivateRoute() {
     const { loggedIn, checkingStatus } = useAuthStatus();
     if (checkingStatus) {
       return <Spinner />;
     }
     return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
   }