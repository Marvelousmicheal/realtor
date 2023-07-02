import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { doc } from "firebase/firestore";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  // ================ if you no understand omo just quite programming ==============//
  const auth = getAuth();
  const [formData, setformData] = useState({
    username: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { username, email } = formData;
  //===============================//
  //===Handles the state for the edit button===//
  const [changeDetail, setchangeDetail] = useState(false);
  //===============================////
  function logout() {
    auth.signOut();
    navigate("/");
  }
  //=============to handle the change once the edit is clicked========================/
  function onChange(e) {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  //========= to handle the submit====================
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== username) {
        //update the display name in the auth in firebase
        await updateProfile(auth.currentUser, {
          displayName: username,
        });
        //update the display name in the firebase database
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          username,
        });
      }
      toast.success("Profile update successfully");
    } catch {
      toast.error("couldn't update the profile try again");
    }
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold ">My profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 mx-auto">
          <form>
            <input
              type="text"
              id="username"
              disabled={!changeDetail}
              onChange={onChange}
              value={username}
              className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 mb-6 rounded transition ease-in-out ${
                changeDetail && "border-red-700 focus:border-red-800"
              }`}
            ></input>
            <input
              type="email"
              id="email"
              disabled
              value={email}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 mb-6 rounded transition ease-in-out"
            ></input>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setchangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply Changes" : "Edit"}
                </span>
              </p>

              <p
                className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
                onClick={logout}
              >
                Sign out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center "
            >
              <FcHome className="mr-2 text-3xl bg-red-200 rounded p-1 border-2" />
              Sell or Rent Your Home
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
