import React from "react";
import login from "../login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";
const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="login-container">
      <img src={login} alt="login " className="login-pic" />
      <h1>Github Users</h1>
      <button className="btn" onClick={loginWithRedirect}>
        Login/ Sign up
      </button>
    </section>
  );
};

export default LoginPage;
