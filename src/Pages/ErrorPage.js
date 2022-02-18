import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section className="error-container">
      <h1> Error 404</h1>
      <h3> Oops! page not found</h3>
      <Link to="/" className="btn home-btn">
        Back Home
      </Link>
    </section>
  );
};

export default ErrorPage;
