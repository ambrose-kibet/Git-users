import React from "react";
import Doughnutchart from "../Charts/Doughnutchart";
import PieChart from "../Charts/PieChart";
import { useGlobalContext } from "../AppProvider";
import BarChart from "../Charts/BarChart";
import ColumnChart from "../Charts/ColumnChart";
const Repos = () => {
  const { repos } = useGlobalContext();
  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages);
  languages = languages
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  // most uses
  const mostUsed = languages
    .map((item) => {
      const { label, stars } = item;
      return { label, value: stars };
    })
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  const barData = repos
    .map((item) => {
      return { label: item.name, value: item.stargazers_count };
    })
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  const forksData = repos
    .map((item) => {
      return { label: item.name, value: item.forks };
    })
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  return (
    <section className="repos-container">
      <div className="container">
        <PieChart data={languages} />
      </div>
      <div className="container">
        <BarChart data={barData} />
      </div>
      <div className="container">
        <Doughnutchart data={mostUsed} />
      </div>
      <div className="container">
        <ColumnChart data={forksData} />
      </div>
    </section>
  );
};

export default Repos;
