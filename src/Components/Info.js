import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoGist } from "react-icons/go";
import { useGlobalContext } from "../AppProvider";

const Info = () => {
  const { gitUser } = useGlobalContext();
  const { followers, following, public_repos, public_gists } = gitUser;

  return (
    <section className="info-container">
      <article className="info">
        <RiGitRepositoryLine className="icon repo" />
        <div className="info-details">
          <h5>{public_repos}</h5>
          <p>repos</p>
        </div>
      </article>
      <article className="info">
        <FiUsers className="icon followers" />
        <div className="info-details">
          <h5>{followers}</h5>
          <p>followers</p>
        </div>
      </article>
      <article className="info">
        <BiUserPlus className="icon following" />
        <div className="info-details">
          <h5>{following}</h5>
          <p>following</p>
        </div>
      </article>
      <article className="info">
        <GoGist className="icon gist" />
        <div className="info-details">
          <h5>{public_gists}</h5>
          <p>gists</p>
        </div>
      </article>
    </section>
  );
};

export default Info;
