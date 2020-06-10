import getM from "./getM";
import pearson from "./pearson";
import getTDist from "./getTDist";
import textOutput from "./textOutput";

const getTrendDesc = (xVals, yVals, { fullOutput = false } = {}) => {
  /**
   * Takes an array of xVals and an array of yVals that represents a line.
   *
   * Treturns a string the trend of the line.
   *
   * @param xVals: Array of x values
   * @param yVals: Array of y values
   * @param fullOutput (option): Boolean. Defaults to false. Returns all values dervied during calculation

   */
  const mVal = getM(xVals, yVals);
  const DF = xVals.length - 2;
  const PC = pearson(xVals, yVals);
  const tStat = (PC * Math.sqrt(DF)) / Math.sqrt(1 - PC ** 2);
  const tStatAbsolute = Math.abs(tStat);
  const tDist = getTDist(tStatAbsolute, DF);
  const pVal = (1 - tDist) * 2;
  const percChange = mVal / yVals.slice(-1)[0];
  const thresholdRising = 0.025;
  const thresholdFalling = -0.025;
  const trendDesc = textOutput(pVal, percChange, {
    thresholdRising,
    thresholdFalling
  });

  const fullTrendOutput = [
    {
      name: "Final seven-day moving average",
      value: yVals.slice(-1)[0]
    },
    {
      name: "M value",
      value: mVal
    },
    {
      name: "Degrees of freedom",
      value: DF
    },
    {
      name: "Pearson correlation",
      value: PC
    },
    {
      name: "t Stat",
      value: tStat
    },
    {
      name: "t Dist",
      value: tDist
    },
    {
      name: "P value",
      value: pVal
    },
    {
      name: "Percent change",
      value: percChange
    },
    {
      name: "Threshold for 'rising'",
      value: `greater than ${thresholdRising}`
    },
    {
      name: "Threshold for 'falling'",
      value: `less than ${thresholdFalling}`
    }
  ];

  if (fullOutput) {
    return {
      fullTrendOutput,
      trendDesc
    };
  }
  return trendDesc;
};

export default getTrendDesc;
