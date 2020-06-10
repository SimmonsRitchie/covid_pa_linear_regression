import React from "react";

const OutputTrend = ({ trendDesc }) => {
  return (
    <div className="container">
      <h2 className="title is-size-5 has-text-danger">Trend: {trendDesc}</h2>
    </div>
  );
};

export default OutputTrend;
