import React, { useEffect, useState } from "react";
import {supabase} from "../config"
import "bootstrap/dist/css/bootstrap.min.css";

const handleSignIn = async () => {
  // Handle sign in with Google
  console.log("hit the handleSignIn function");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      scopes: "email profile openid",
      redirectTo: 'http://localhost:3000/HomePage'
    },
  });

  if (error) {
    console.error("Error signing in:", error.message);
    return;
  }
};

const checkSignInStatus = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    const firstName = user.user_metadata.full_name || 'User';
    console.log(`Signed in as ${firstName}`);
  } else {
    console.log('Not signed in');
  }
};

const LandingPage = () => {
    

  return (
    <div className="d-flex align-items-start justify-content-center bg-light">
      <div
        className="d-flex flex-column"
        style={{ marginTop: "20vh", marginBottom: "23vh" }}
      >
        <h1 className="mb-5">Welcome to Math Practice</h1>
        <button className="btn btn-primary btn-lg" onClick={handleSignIn}>Sign in with Google</button>
        <button className="btn btn-primary btn-lg" onClick={checkSignInStatus}>User signed in?</button>
      </div>
    </div>
  );
};

export default LandingPage;
