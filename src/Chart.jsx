import React, { Component } from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["1. Hot", "2. High", "3. Medium"],
        datasets: [
          {
            label: "Automation Report",
            data: [45, 50, 42],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(255,159,64,0.6)",
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="container">
        Automation Report
        <div className="chart">
          <Bar
            data={this.state.chartData}
            height={50}
            width={250}
            options={{
              title: {
                display: true,
                text: "Defects for Week 1",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "left",
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
