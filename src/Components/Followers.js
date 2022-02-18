import React from "react";
import { useGlobalContext } from "../AppProvider";
const Followers = () => {
  const { userFollowers: followers } = useGlobalContext();
  return (
    <div className="art-container">
      <article className="followers-container">
        {followers.map((follower) => {
          const { avatar_url, html_url, login, id } = follower;
          return (
            <div className="follower-container" key={id}>
              <img src={avatar_url} alt={login} className="follower-img" />
              <div className="info-details">
                <h5>{login}</h5>
                <a
                  href={html_url}
                  className="veiw-btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  veiw profile
                </a>
              </div>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Followers;
