import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

//this is a custom hook 
//that is used to dynamic check if the user is login in or not
export function UseAuthStatus() {
  //to manage the state of logged in or not
  const [loggedin, setLoggedin] = useState(false);
  //this state was used as a way as to not quickly render the page while it is getting the necessary info
  const [loading, setLoading] = useState(true);

  //this is used to manage the promise that is being gotten
  useEffect(() => {
    //calls the getauth method from firebase
    const auth = getAuth();
    // a method used to check if user is authenticated and if so change the state of both the loggedin and the loading
    
    onAuthStateChanged(auth, (user) => {
      //if the user is true
      if (user) {
        // set the loggedin state to true
        setLoggedin(true);
      }
      //after the user has been confirmed change the state of the loading to false
      setLoading(false);
    });
  }, []);
  return { loggedin, loading };
}
