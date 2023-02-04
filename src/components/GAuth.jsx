import React from "react";
import { FcGoogle } from "react-icons/fc";

function GAuth() {
  return (
    <>
      <button className="flex items-center justify-center w-full bg-red-700 text-white py-3 px-7 uppercase font-medium rounded shadow-md hover:bg-red-700 transition ease-in-out duration-500 hover:shadow-lg active:bg-red-900 ">
        <FcGoogle className="text-2xl bg-white rounded-full mr-2" /> Continue
        with google
      </button>
    </>
  );
}

export default GAuth;
