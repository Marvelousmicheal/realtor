import React from "react";
import { Outlet, Navigate } from "react-router";
// we importing the useauthstatus from the privatehooks
import { UseAuthStatus } from "../Private-Hooks/UseAuthStatus";

export default function PRoute() {
  // we extract this from the useauthstatus and after that we destructure it
  const { loggedin, loading } = UseAuthStatus();
  //if loading is true then return whatever is in the return
  if (loading) {
    return <h3>loading</h3>;
  }
  // after that then navigate the user to the profile else navigate to the sign in
  return loggedin ? <Outlet /> : <Navigate to="/Sign-In" />;
}
