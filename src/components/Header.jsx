import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo-logees.png";

function Header() {
  //=======this is firebase auth======//
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setpState("Profile");
      } else {
        setpState("Sign-in");
      }
    });
  });
  // this is the location of the pages within the website
  const Location = useLocation();

  //this is the function that is proudly brought to us by react fucking router for navigating within the website
  const navigate = useNavigate();
  // this is a function to handle the matching of the nav-links to their exact route
  //this function takes in the route as a parameter and compares it to the location.pathname and if the are the same, it then returns true
  function PathMatchRoute(route) {
    if (route === Location.pathname) {
      return true;
    }
  }
  //======================//
  const [pState, setpState] = useState("Sign-in");
  return (
    <>
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
          <div>
            <img
              src={logo}
              alt=" loGees logo"
              className="h-30 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div>
            <ul className="flex space-x-10">
              <li
                className={`py-3 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent cursor-pointer ${
                  PathMatchRoute("/") && "text-black border-b-red-500"
                }`}
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className={`py-3 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent cursor-pointer ${
                  PathMatchRoute("/offer") && "text-black border-b-red-500"
                }`}
                onClick={() => navigate("/offer")}
              >
                Offers
              </li>
              <li
                className={`py-3 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent  cursor-pointer ${
                  PathMatchRoute("/sign-In") ||
                  (PathMatchRoute("/profile") && "text-black border-b-red-500")
                }`}
                onClick={() => navigate("/profile")}
              >
                {pState}
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
