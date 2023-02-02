import React from "react";

import { iconUrlFromCode } from "../api";

function Forecast({ title, items }) {
  return (
    <div className="d-flex align-items-center justify-content-center bg-info rounded m-2">
      <div className="me-5">
        <p className="font-medium uppercase">{title}</p>
      </div>

      <div className="d-flex flex-row justify-content-center">
        {items?.map((item, index) => (
          <div key={index} className="pe-3">
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className=""
              alt=""
              style={{ width: "50px" }}
            />
            <p className="font-medium">{`${
              title === "daily forecast (H/L)" ? "High/Low" : ""
            } ${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Forecast;
