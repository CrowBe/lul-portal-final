import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../config/react-auth0-spa";

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
        <Link to="/portal"><button>Home</button></Link>
        <Link to="/portal/profile"><button>Profile</button></Link>
        <Link to="/portal/external-api"><button>External API</button></Link>
        <Link to="/portal/new-job"><button>New Job</button></Link>
      </span>
    )}
    </nav>
  );
};

export default PortalNavBar;