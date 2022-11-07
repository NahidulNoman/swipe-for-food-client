import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="d-flex justify-content-center text-center">
      <div>
        <h1>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p>{error.statusText || error.message}</p>
            <p className="text-danger">{error.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;