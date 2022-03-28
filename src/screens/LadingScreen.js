import React from "react";
import { Link } from "react-router-dom";

export const LadingScreen = () => {
  return (
    <>
      <div className="ladingscreen">
        LadinScreen
        <nav className="ladingscreen__nav">
          <Link className="ladingscreen__nav--link" to="/login">
            Login
          </Link>
          <Link className="ladingscreen__nav--link" to="/register">
            Register
          </Link>
        </nav>
      </div>
      ;
    </>
  );
};
