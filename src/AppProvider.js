import React from "react";
import followers from "./MockData/MockFollowers";
import repo from "./MockData/Mockrepo";
import user from "./MockData/Mockuser";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
const API_ENDPOINT = "https://api.github.com/";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [repos, setRepos] = useState(repo);
  const [userFollowers, setUserFollowers] = useState(followers);
  const [gitUser, setGitUser] = useState(user);
  const [limit, setlimit] = useState(60);
  const [isError, setisError] = useState({
    show: false,
    msg: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const getLimit = () =>
    axios
      .get(`${API_ENDPOINT}rate_limit`)
      .then(({ data: { rate } }) => {
        let { remaining } = rate;
        if (remaining === 0) {
          toggleError(true, "Sorry you've exceeded your hourly request limit!");
        }
        setlimit(remaining);
      })
      .catch((err) => console.log(err));

  const toggleError = (show = false, msg = "") => {
    return setisError({ show, msg });
  };
  const getuser = async (data) => {
    // set loading
    setIsLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}users/${data}`);
      const githubUser = await response.json();
      if (githubUser.message === "Not Found") {
        toggleError(true, "No such user exist!");
        setIsLoading(false);
      } else {
        const { followers_url, repos_url } = githubUser;
        // followers
        axios
          .get(followers_url)
          .then((response) => {
            setUserFollowers(response.data);
          })
          .catch((err) => console.log(err));
        // repos
        // : "https://api.github.com/users/wesbos/repos",
        axios
          .get(repos_url)
          .then((response) => {
            setRepos(response.data);
          })
          .catch((err) => console.log(err));
        setGitUser(githubUser);
        setIsLoading(false);
        getLimit();
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getLimit();
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        repos,
        userFollowers,
        gitUser,
        isError,
        toggleError,
        limit,
        getuser,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
