import React from "react";

const Random = ({ genRandomData }) => (
  <div className="field">
    <p className="control">
      <button className="button is-normal is-primary" onClick={genRandomData}>
        Generate
      </button>
    </p>
  </div>
);

export default Random;
