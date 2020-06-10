import React from "react";

const Dummy = ({ useDummyData }) => (
  <div className="field">
    <p className="control">
      <button className="button is-normal is-primary" onClick={useDummyData}>
        Cycle presets
      </button>
    </p>
  </div>
);

export default Dummy;
