/**
 * Formula for linear least square reregression.
 *
 * Courtesy of: https://dracoblue.net/dev/linear-least-squares-in-javascript/
 *  */

function getM(values_x, values_y) {
  /**
   * Takes two arrays representing X values and Y values and returns two arrays representing
   * the X and Y values of a linear least squares regression line.
   */
  var sum_x = 0;
  var sum_y = 0;
  var sum_xy = 0;
  var sum_xx = 0;
  var count = 0;

  /*
   * Use these variables for faster read/write access.
   */
  var x = 0;
  var y = 0;
  var values_length = values_x.length;

  /*
   * If the array of X values is an empty array, return an empty array.
   */
  if (values_length === 0) {
    return [[], []];
  }

  /*
   * Calculate the sum for each of the parts necessary.
   */
  for (var v = 0; v < values_length; v++) {
    x = values_x[v];
    y = values_y[v];
    sum_x += x;
    sum_y += y;
    sum_xx += x * x;
    sum_xy += x * y;
    count++;
  }

  /*
   * Calculate m and b for the formula:
   * y = x * m + b
   */
  var m = (count * sum_xy - sum_x * sum_y) / (count * sum_xx - sum_x * sum_x);

  return m;
}

export default getM;
