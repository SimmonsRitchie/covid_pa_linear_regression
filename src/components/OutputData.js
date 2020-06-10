import React from "react";
import Module from "./Module";

const OutputData = ({ trendOutput, trendDesc }) => {
  return (
    <Module
      columnSize="is-5"
      title={`Trend: ${trendDesc}`}
      titleColor="has-text-danger"
      fullHeight
    >
      {trendOutput.map(item => (
        <OutputPair key={item.name} field={item.name} val={item.value} />
      ))}
    </Module>
  );
};

const OutputPair = ({ field, val }) => (
  <div>
    <span>
      {field}: {val}
    </span>
  </div>
);

export default OutputData;
