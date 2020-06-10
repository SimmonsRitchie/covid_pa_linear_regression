import React from "react";

const Section = ({ children }) => {
  return (
    <div className={`section has-background-light`}>
      <div className="container">
        <div className="columns is-multiline">{children}</div>
      </div>
    </div>
  );
};

export default Section;
