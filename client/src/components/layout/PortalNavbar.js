import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";

const PortalNavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav id='portal-nav-bar'>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
      <span>
        <Link to="/portal">Home</Link>
        <Link to="/portal/profile">Profile</Link>
        <Link to="/portal/external-api">External API</Link>
      </span>
    )}
    </nav>
  );
};

export default PortalNavBar;