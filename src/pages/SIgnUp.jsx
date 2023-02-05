import React, { useState } from "react";
import signInimage from "../images/placeholder-signin.jpg";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import GAuth from "../components/GAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

function SIgnUp() {
  //========= HOOK ONE ==============//
  //=========================================================================//
  // this is a hook for holding the state of the form and storing it
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //initialize the navigate hook
  const navigate = useNavigate();
  // this is the destructing of the formdata
  const { email, password, username } = formData;
  // this is a function that handles the change in the state and update it respectfully
  function onChange(e) {
    setformData((prevstate) => ({
      ...prevstate,
      //this is use to match the id to the value in this case the pressing of the keyboard
      [e.target.id]: e.target.value,
    }));
  }
  //=========================================================================//

  //=============== HOOK TWO ===============================//
  //=================================================================================//
  // this is for hiding and showing the password
  const [showPassword, setShowPassword] = useState(false);

  function showOrhide() {
    setShowPassword((prevstate) => !prevstate);
  }
  //============================a=================

  //=========== HandleSubmit ==============//
  async function handleSubmit(e) {
    e.preventDefault();
    //this is the whole code for setting the auth and storing it in the database
    // so we first created a variable that store the create user method, this method takes in auth, email and password
    //so the createuser method doesnt collect username so do that we used the updateprofile method and we update the profile that was created

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //here was where we used the update method to update the profile and add a username to it
      updateProfile(auth.currentUser, {
        displayName: username,
      });
      // the variable is used to access the user profile in the database
      const user = userCredential.user;
      //in order to make the password more secured
      //we created a new variable that store all the data in the formdata in a local way
      const formDataCopy = { ...formData };
      // we then delete the password
      delete formDataCopy.password;
      // to create a time stamp
      formDataCopy.timestamp = serverTimestamp();

      // this used to set the database
      await setDoc(doc(db, "users", user.uid), formDataCopy);
toast.success("Sign-up was successfull")
      //after the whole thing has been done and dusted we simply navigate the user to the home page
      navigate("/");
    } catch (error) {
      toast.error("Something went Wrong")
    }
  }
  return (
    <>
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold uppercase ">
          Sign-Up
        </h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
          <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
            <img
              src={signInimage}
              alt="image for sign-In"
              className="w-full rounded-2xl "
            />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
            <form onSubmit={handleSubmit}>
              {
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6 "
                  value={username}
                  onChange={onChange}
                  placeholder="Enter Full-name"
                />
              }

              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
                value={email}
                onChange={onChange}
                placeholder="Enter Email-address"
              />

              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out "
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                />
                {showPassword ? (
                  <BsFillEyeFill
                    className="absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={showOrhide}
                  />
                ) : (
                  <BsFillEyeSlashFill
                    className="absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={showOrhide}
                  />
                )}
              </div>
              <div className="flex justify-between whitespace-nowrap  text-sm capitalize ">
                <p className="mb-6">
                  have an account?
                  <Link
                    to="/Sign-In"
                    className="text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1"
                  >
                    sign-in
                  </Link>
                </p>
                <p>
                  <Link
                    to="/ForgottenPassword"
                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  >
                    forgot your password?
                  </Link>
                </p>
              </div>
              <button
                className="w-full bg-blue-600 text-white px-7 py-3 font-medium uppercase rounded shadow-md hover:bg-blue-700 transition ease-in-out duration-500 hover:shadow-lg active:bg-blue-900"
                type="submit"
              >
                Sign In
              </button>
              <div className="my-4 flex items-center before:border-t before:flex-1  before:border-gray-500 after:border-t after:flex-1  after:border-gray-500">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <GAuth />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SIgnUp;
