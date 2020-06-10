import React, { useState } from "react";

const DAY_OPTIONS = [7, 14, 21, 28];

const County = ({ countyData, submitCountyData }) => {
  const [selectedCounty, changeCounty] = useState("adams");
  const [selectedDays, changeDays] = useState(14);

  return (
    <React.Fragment>
      <div className="field">
        <div class="label">County</div>
        <div className="control is-expanded">
          <div className="select is-fullwidth">
            <select
              name="county"
              onChange={e => changeCounty(e.target.value)}
              value={selectedCounty}
            >
              {countyData.map(county => (
                <option key={county.name} value={county.name}>
                  {county.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <div class="label ">Number of recent days</div>
        <div className="control is-expanded">
          <div className="select is-fullwidth">
            <select
              name="dayRange"
              onChange={e => changeDays(+e.target.value)}
              value={selectedDays}
            >
              {DAY_OPTIONS.map(days => (
                <option key={days} value={days}>
                  {days}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <div class="control is-expanded">
          <button
            onClick={() => submitCountyData(selectedCounty, selectedDays)}
            type="submit"
            class="button is-primary is-fullwidth"
          >
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default County;
