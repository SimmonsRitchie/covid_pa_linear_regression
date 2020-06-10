import React from "react";

const DataSource = ({
  dataSourceOptions,
  dataSource,
  handleDataSourceChange
}) => (
  <div className="field">
    <label className="label">Data source</label>
    <div className="control is-expanded">
      <div className="select is-fullwidth">
        <select
          name="dataSource"
          onChange={handleDataSourceChange}
          value={dataSource}
        >
          {dataSourceOptions.map(source => (
            <option key={source.id} value={source.id}>
              {source.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default DataSource;
