import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../AppProvider";

const Search = () => {
  const { limit, isError, getuser, toggleError, isLoading } =
    useGlobalContext();
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    toggleError();
    if (user) {
      getuser(user);
    }
    e.preventDefault();
  };

  return (
    <section className="form-container">
      <div>
        {isError.show && <h6 className="text-danger">{isError.msg}</h6>}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={`Enter Github user`}
          className="form-input"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        {limit > 0 && !isLoading && (
          <button type="submit" className="btn">
            Search
          </button>
        )}
      </form>
      <h4 className="request">Request: {limit} / 60</h4>
    </section>
  );
};

export default Search;
