import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently({
          audience: process.env.REACT_APP_AUTH_AUDIENCE,
          scope: process.env.REACT_APP_AUTH_ADMIN,
          redirect_uri: 'http://localhost:3000/'
        });
      console.log(token);

      const response = await fetch("http://localhost:3001/api/external", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default ExternalApi;