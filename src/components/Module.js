import React from "react";

const Module = ({ title, children, fullHeight, columnSize, titleColor }) => {
  const fullHeightClass = fullHeight ? "column-full-height" : "";
  const columnSizeClass = columnSize ? columnSize : "";
  const titleColorClass = titleColor ? titleColor : "";
  return (
    <div className={`column ${columnSizeClass} ${fullHeightClass}`}>
      <article className=" notification is-white notification-full-width">
        <div className="media-content">
          <div className="content">
            {title && (
              <h1 className={`title is-size-4 ${titleColorClass}`}>{title}</h1>
            )}
            {children}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Module;
