import React, { useState } from "react";
import signInimage from "../images/placeholder-signin.jpg";
import { Link } from "react-router-dom";
import GAuth from "../components/GAuth";
import { toast } from "react-toastify";
import {
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
function ForgottenPassword() {
  //========= HOOK ONE ==============//
  //=========================================================================//
  // this is a hook for holding the state of the form and storing it
  const [formData, setformData] = useState({
    email: "",
  });
  // this is the destructing of the formdata
  const { email } = formData;
  // this is a function that handles the change in the state and update it respectfully
  function onChange(e) {
    setformData((prevstate) => ({
      ...prevstate,
      //this is use to match the id to the value in this case the pressing of the keybord
      [e.target.id]: e.target.value,
    }));
  }
  //=========================================================================//
  async function ForgotPassword(e) {
    e.preventdefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("could not send reset password");
    }
  }
  return (
    <>
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold uppercase ">
          reset password
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
            <form onSubmit={ForgotPassword}>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6 capitalize"
                value={email}
                onChange={onChange}
                placeholder="email address"
              />

              <div className="flex justify-between whitespace-nowrap  text-sm capitalize ">
                <p className="mb-6">
                  don't have an account?
                  <Link
                    to="/Sign-Up"
                    className="text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1"
                  >
                    register
                  </Link>
                </p>
                <p>
                  <Link
                    to="/Sign-In"
                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  >
                    Sign in <span className="text-black">Here</span>
                  </Link>
                </p>
              </div>
              <button
                className="w-full bg-blue-600 text-white px-7 py-3 font-medium uppercase rounded shadow-md hover:bg-blue-700 transition ease-in-out duration-500 hover:shadow-lg active:bg-blue-900"
                type="submit"
              >
                reset password
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

export default ForgottenPassword;
