import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <nav className="nav">
      {isUser && user.picture && (
        <img src={user.picture} alt={user.name} className="user-icon" />
      )}
      {isUser && user.name && (
        <h3 className="text-center welcome">
          <strong>{user.name}</strong>
        </h3>
      )}
      {isUser ? (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="btn logout-btn"
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect} className="btn logout-btn">
          login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
