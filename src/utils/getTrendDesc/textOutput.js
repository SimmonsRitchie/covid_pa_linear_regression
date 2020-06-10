const textOutput = (
  pVal,
  percChange,
  { thresholdRising = 0.025, thresholdFalling = -0.025 } = {}
) => {
  /**
   * @param thresholdRising: Int. If percChange is above this value, then 'rising'
   * @param thresholdFalling: Int. If percChange is below this value, then 'falling'
   */
  if (pVal < 0.05) {
    if (percChange >= thresholdRising) {
      return "rising";
    } else if (percChange <= thresholdFalling) {
      return "falling";
    } else {
      return "no trend";
    }
  } else {
    return "no trend";
  }
};

export default textOutput;
