const getXYVals = data => {
  /**
   * Expects a list of objects and returns two lists, one for X vals, one for Y vals.
   *
   * @param data: Array of objects
   */
  const xVals = [];
  const yVals = [];
  data.forEach((datum, idx) => {
    xVals.push(idx);
    yVals.push(datum.avg);
  });
  return {
    xVals,
    yVals
  };
};

export default getXYVals;
