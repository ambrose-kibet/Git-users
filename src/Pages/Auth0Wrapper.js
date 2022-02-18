import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../Components/Spinner";
function Auth0Wrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div>
        <Spinner/>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1 className="text-center"> Oops... {error.message}</h1>
      </div>
    );
  }
  return <>{children}</>;
}
export default Auth0Wrapper;
