import React from "react";
import "bulma/css/bulma.css";
import "./styles.scss";
import getTrendDesc from "./utils/getTrendDesc";
import LineChart from "./components/LineChart";
import Controls from "./components/Controls/Controls";
import Header from "./components/Header";
import InputData from "./components/InputData";
import BodySection from "./components/Section";
import OutputData from "./components/OutputData";
import { SAMPLE_DATASETS, DATA_SOURCE_OPTIONS } from "./constants";
import getXYVals from "./utils/getXYVals";
import _ from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: "live",
      xVals: [],
      yVals: [],
      range: 7,
      sampleDataCounter: -1,
      dataName: "",
      countyData: [],
      selectedCounty: "",
      fullTrendOutput: [],
      trendDesc: ""
    };
  }

  componentDidMount() {
    // this.genRandomData();
    const countyData = this.props.data.paCases;
    this.setState({
      countyData,
      selectedCounty: countyData[0].name
    });
  }

  useDummyData = () => {
    const { sampleDataCounter } = this.state;
    let newCount = sampleDataCounter;
    if (sampleDataCounter === SAMPLE_DATASETS.length - 1) {
      newCount = 0;
    } else {
      newCount += 1;
    }
    const sampleData = SAMPLE_DATASETS[newCount].data;
    const sampleDataName = SAMPLE_DATASETS[newCount].name;
    const xVals = sampleData.map(datum => datum.x);
    const yVals = sampleData.map(datum => datum.y);
    const { fullTrendOutput, trendDesc } = getTrendDesc(xVals, yVals, {
      fullOutput: true
    });
    this.setState({
      xVals,
      yVals,
      sampleDataCounter: newCount,
      dataName: sampleDataName,
      fullTrendOutput,
      trendDesc
    });
  };

  handleCountyChange = e => {
    const selectedCounty = e.target.value;
    this.setState({
      selectedCounty
    });
  };

  submitCountyData = (selectedCounty, selectedDays) => {
    const { countyData } = this.state;
    const selectedCountyData = countyData.find(
      county => county.name === selectedCounty
    );
    const recentDays = _.takeRight(selectedCountyData.perDay, selectedDays);
    const { xVals, yVals } = getXYVals(recentDays);
    const { fullTrendOutput, trendDesc } = getTrendDesc(xVals, yVals, {
      fullOutput: true
    });
    console.log(selectedCountyData);
    this.setState({
      selectedCounty,
      xVals,
      yVals,
      dataName: selectedCountyData.name,
      fullTrendOutput,
      trendDesc
    });
  };

  genRandomData = () => {
    const xVals = this.genXData();
    const yVals = this.genYData();
    const { fullTrendOutput, trendDesc } = getTrendDesc(xVals, yVals, {
      fullOutput: true
    });
    this.setState({
      dataName: "random",
      xVals,
      yVals,
      fullTrendOutput,
      trendDesc
    });
  };

  genYData = () => {
    const { range } = this.state;
    const yVals = Array(range)
      .fill()
      .map(() => Math.round(Math.random() * 9));
    return yVals;
  };

  genXData = () => {
    const { range } = this.state;
    const xVals = Array(range)
      .fill()
      .map((v, i) => i);
    return xVals;
  };

  handleDataSourceChange = e => {
    const dataSource = e.target.value;
    this.setState({
      dataSource
    });
  };

  render() {
    const {
      dataSource,
      xVals,
      yVals,
      dataName,
      countyData,
      fullTrendOutput,
      trendDesc
    } = this.state;
    const chartData = xVals.map((val, idx) => {
      return { x: val, y: yVals[idx] };
    });
    return (
      <div className="">
        <Header />
        <BodySection>
          <Controls
            dataSource={dataSource}
            dataSourceOptions={DATA_SOURCE_OPTIONS}
            handleDataSourceChange={this.handleDataSourceChange}
            genRandomData={this.genRandomData}
            useDummyData={this.useDummyData}
            submitCountyData={this.submitCountyData}
            countyData={countyData}
            dataExists={xVals.length > 0}
          />
          {xVals.length > 0 && (
            <InputData xVals={xVals} yVals={yVals} dataName={dataName} />
          )}
          {xVals.length > 0 && (
            <OutputData trendOutput={fullTrendOutput} trendDesc={trendDesc} />
          )}
          {xVals.length > 0 && <LineChart data={chartData} />}
        </BodySection>
      </div>
    );
  }
}

export default App;
