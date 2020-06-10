import React from "react";
import Module from "../Module";
import DataSource from "./DataSource";
import Random from "./Random";
import County from "./County";
import Dummy from "./Dummy";

const Controls = ({
  dataSource,
  dataSourceOptions,
  handleDataSourceChange,
  genRandomData,
  useDummyData,
  submitCountyData,
  countyData
}) => {
  const dataSourceEnum = {
    random: <Random genRandomData={genRandomData} />,
    live: (
      <County countyData={countyData} submitCountyData={submitCountyData} />
    ),
    dummy: <Dummy useDummyData={useDummyData} />
  };
  const { descrip } = dataSourceOptions.find(
    source => source.id === dataSource
  );
  return (
    <Module title={"Analyze data"} fullHeight columnSize="is-5">
      <h3 className="subtitle is-size-6">
        Select a data source and click submit to analyze data.
      </h3>
      <DataSource
        dataSource={dataSource}
        dataSourceOptions={dataSourceOptions}
        handleDataSourceChange={handleDataSourceChange}
      />
      <Notification descrip={descrip} />
      {dataSourceEnum[dataSource]}
    </Module>
  );
};

export default Controls;

const Notification = ({ descrip }) => {
  return (
    <div className="notification is-size-6">
      <article className="media ">
        <div className="media-left">
          <span className="icon has-text-info">
            <i className="fas fa-info-circle" />
          </span>
        </div>
        <div className="media-content">
          <div className="content">
            <p>{descrip}</p>
          </div>
        </div>
      </article>
    </div>
  );
};
