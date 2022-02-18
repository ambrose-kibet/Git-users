import React from "react";
import { useGlobalContext } from "../AppProvider";
import { FaIndustry, FaLocationArrow, FaLink } from "react-icons/fa";

const Card = () => {
  const { gitUser } = useGlobalContext();
  const {
    avatar_url,
    bio,
    blog,
    company,
    location,
    name,
    twitter_username,
    html_url,
  } = gitUser;
  return (
    <article className="card">
      <div className="card-header">
        <div className="personal">
          <img src={avatar_url} alt=" profile " className="card-image" />
          <div className="desc-container">
            <h5>{name}</h5>
            <p>{twitter_username}</p>
          </div>
        </div>
        <a
          href={html_url}
          className="follow"
          target={"_blank"}
          rel="noreferrer"
        >
          Follow
        </a>
      </div>
      <div className="card-body">
        <p>{bio}</p>
      </div>
      <div className="card-footer">
        <p>
          <span>{<FaIndustry />}</span> {company}
        </p>

        <p>
          <span>{<FaLocationArrow />}</span> {location}
        </p>

        <p className=" link">
          <span>{<FaLink />}</span> {blog}
        </p>
      </div>
    </article>
  );
};

export default Card;
