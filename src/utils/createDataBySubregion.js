const createDataBySubregion = data => {
  /**
   * Takes an array of objects indexed by date, returns an array of objects but restructured so
   * they're indexed by subregion instead.
   *
   *  Eg. Expects each object in the array to look something like this:
   *
   * {
   *   'date': <datetimeObj>,
   *   'bergen': int,
   *   'atlantic': int,
   *   'burlington': int,
   *   ...
   * }
   *
   * And returns each object restructured like this:
   *
   *  {
   *   'name': 'Bergen',
   *   'total': int
   *   'dates': [
   *     { 'date': <datetimeObj>, 'total': int, 'addedSincePrevDay': int},
   *     { 'date': <datetimeObj>, 'total': int, 'addedSincePrevDay': int},
   *     ...
   *   ]
   * }
   *
   * @param data (arr): An array of objects
   */

  // 1) Split region key-value pairs from date key-values
  const { date, ...subregions } = data[0];
  // 2) Get subregion names
  const subregionNames = Object.keys(subregions);
  /**
   * 3) Loop over subregion names and, for each name, loop over our data to
   * values for our final payload
   */
  const dataBySubregion = [];
  subregionNames.forEach(name => {
    const perDayData = [];
    data.forEach((item, idx) => {
      // get total for each date
      const totalForDate = item[name];
      let newlyAdded = 0;
      let newlyAddedPercent = null;
      if (idx > 0) {
        // get number of newly added values since previous date
        const prevTotal = data[idx - 1][name];
        newlyAdded = totalForDate - prevTotal;
        newlyAdded = newlyAdded > 0 ? newlyAdded : 0;
        // get percentage increase from previous total (represented as decimal)
        if (prevTotal > 0) {
          newlyAddedPercent = newlyAdded / totalForDate;
        }
      }
      // add to our 'perDay' payload
      perDayData.push({
        date: item.date,
        total: totalForDate,
        addedSincePrevDay: newlyAdded,
        percIncrease: newlyAddedPercent
      });
    });
    /**
     * 4) Get total values for subregion
     *  Because our data is an array of objs representing a running total, ordered by oldest data to newest,
     *  we get the total value from the final item in the array
     *  */
    const [lastItem] = data.slice(-1);
    const subRegionTotal = lastItem[name];
    // Create final payload of restructured data.
    dataBySubregion.push({
      name,
      total: subRegionTotal,
      perDay: perDayData
    });
  });
  return dataBySubregion;
};

export default createDataBySubregion;
