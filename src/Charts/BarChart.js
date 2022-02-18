import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.zune";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const BarChart = ({ data }) => {
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: " Most Popular",
        theme: "zune",
        decimals: 0,
        xAxisName: "Repos",
        yAxisName: "Stars",
      },

      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default BarChart;
