import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.ocean";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const ColumnChart = ({ data }) => {
  const chartConfigs = {
    type: "bar2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: " Most Forked",
        theme: "ocean",
        decimals: 0,
        xAxisName: "Repos",
        yAxisName: "Forks",
      },

      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ColumnChart;
