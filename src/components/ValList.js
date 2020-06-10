import React from "react";

const ValList = ({ keys, vals }) => {
  return (
    <div class="table-container">
      <table className="table is-fullwidth is-narrow is-bordered">
        <tbody>
          <tr>
            {vals.map((val, idx) => {
              return <td key={keys[idx]}>{val}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ValList;
