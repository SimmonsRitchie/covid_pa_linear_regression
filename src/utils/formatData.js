import dayjs from "dayjs";
import { cleanNumber } from "./parserHelpers";

const formatData = data =>
  /**
   * Takes an array of objects and returns an array of objects with data formatted
   * into appropriate types.
   *
   * @param data (arr): An array of objects
   */
  data.map(item => {
    // Convert date from str to dayjs object
    const { Date, ...subregions } = item;
    const cleanDate = dayjs(Date, "YYYY-MM-DD");
    // Convert county counts from str to int
    const subRegionNames = Object.keys(subregions);
    const cleanSubregions = {};
    subRegionNames.forEach(name => {
      // remove any whitespace from key names and lowercase
      const cleanName = name.trim().toLowerCase();
      cleanSubregions[cleanName] = cleanNumber(item[name]);
    });
    return {
      date: cleanDate,
      ...cleanSubregions
    };
  });

export default formatData;
