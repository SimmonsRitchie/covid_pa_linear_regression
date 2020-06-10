import createDataBySubregion from "./createDataBySubregion";
import formatData from "./formatData";
import movingAvg from "./movingAvg";

const processData = data => {
  data = formatData(data);
  data = createDataBySubregion(data);
  // add moving avg
  console.log("data", data);
  data = data.map(county => {
    const { perDay } = county;
    const avgs = movingAvg(perDay, 7, "addedSincePrevDay");
    const newPerDay = perDay.map((day, idx) => {
      return {
        ...day,
        avg: avgs[idx]
      };
    });
    return {
      ...county,
      perDay: newPerDay
    };
  });
  return data;
};

export default processData;
