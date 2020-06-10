import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Module from "./Module";

export default class Example extends PureComponent {
  render() {
    return (
      <Module columnSize="is-7">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              // width={300}
              // height={200}
              data={this.props.data}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis width={40} />
              <Tooltip />
              <Line
                animationDuration={100}
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="y" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Module>
    );
  }
}
