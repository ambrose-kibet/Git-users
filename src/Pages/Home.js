import React from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import Followers from "../Components/Followers";
import Info from "../Components/Info";
import Repos from "../Components/Repos";
import { useGlobalContext } from "../AppProvider";
import Spinner from "../Components/Spinner";
const Home = () => {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section>
        <Navbar />
        <div className="main">
          <Search />
          <Spinner />
        </div>
      </section>
    );
  }
  return (
    <section>
      <Navbar />
      <div className="main">
        <Search />
        <Info />
        <section className="Profile-container">
          <Card />
          <Followers />
        </section>
        <Repos />
      </div>
    </section>
  );
};

export default Home;
