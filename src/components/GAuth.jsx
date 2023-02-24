import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { db } from "../firebase";

function GAuth() {
  // this is the initiation of the usenavigate
  const navigate = useNavigate();
  // this is the function for signing with google
  async function onClickGoogle() {
    try {
      // this is the auth method from firebase
      const auth = getAuth();
      //this is the provider method from firebase
      const provider = new GoogleAuthProvider();
      // this is result variable that use the signinwithpopup method and takes in two parameter auth and provider
      const result = await signInWithPopup(auth, provider);
      // this is the variable used to store the user from result
      const user = result.user;
      // this section is the part that checks if the use exist already in the database and also to store it in the database
      // this variable docRef is used to access the db and store the user.uid in the "user" listing in the db
      const docRef = doc(db, "users", user.uid);
      // this is a method from the firebase database that get the stored docref and it is a promise
      const docSnap = await getDoc(docRef);
      // this checks if the user exist in the docRef and if the user doesnt then
      // using the setDOc method we store the name and email and timestamp in the docRef
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      // after all this is done and dusted we then navigate the user to the home
      navigate("/");
    } catch (error) {
      toast.error("couldn't sign in with google");
      console.log(error);
    }
  }

  return (
    <>
      <button
        onClick={onClickGoogle}
        type="button"
        className="flex items-center justify-center w-full bg-red-700 text-white py-3 px-7 uppercase font-medium rounded shadow-md hover:bg-red-700 transition ease-in-out duration-500 hover:shadow-lg active:bg-red-900 "
      >
        <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
        Continue with google
      </button>
    </>
  );
}

export default GAuth;
