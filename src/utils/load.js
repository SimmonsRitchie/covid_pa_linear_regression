import { csv } from "d3-fetch";
import processData from "./processData";

// import dayjs from "dayjs";
// import movingAvg from "./calcAvg";

export const loadData = () => {
  /* Fetch and parse files.*/
  const paCasesPath =
    "https://interactives.data.spotlightpa.org/2020/coronavirus/data/inquirer/pa-cases.csv";
  return Promise.all([csv(paCasesPath)]).then(([cases]) => {
    const data = {};
    cases = processData(cases);

    data["paCases"] = cases;
    return data;
  });
};
