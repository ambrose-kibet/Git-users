import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Chart from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const PieChart = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: " Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "45%",
      },

      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
export default PieChart;
