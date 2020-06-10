import React from "react";
import ValList from "./ValList";
import Module from "./Module";

const InputData = ({ xVals, yVals, dataName }) => {
  return (
    <Module title={`Data source: ${dataName}`} fullHeight columnSize="is-7">
      {dataName && (
        <div>
          <h3>xVals: </h3>
          <ValList keys={xVals} vals={xVals} />
          <h3>yVals:</h3>
          <ValList keys={xVals} vals={yVals} />
        </div>
      )}
    </Module>
  );
};

export default InputData;
