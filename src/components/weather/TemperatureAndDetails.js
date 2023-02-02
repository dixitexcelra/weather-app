import React from "react";

import { formatToLocalTime, iconUrlFromCode } from "../api";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
    name,
    country,
  },
}) {
  return (
    <div>
      <div className="mt-3">
        <h4>
          {name}, {country}
        </h4>
      </div>
      <div className="d-flex align-item-center justify-content-center mt-3">
        <div className="me-5">
          <p className="mb-0">{details}</p>
          <img
            src={iconUrlFromCode(icon)}
            alt=""
            className=""
            style={{ width: "50px" }}
          />
          <p className="">{`${temp?.toFixed()}°`}</p>
        </div>
        <div>
          <div className="">Real fell: {`${feels_like?.toFixed()}°`}</div>
          <div className="">Huminity: {`${humidity?.toFixed()}%`}</div>
          <div className="">Wind: {`${speed?.toFixed()} km/h`}</div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center rounded border border-dark ms-2 me-2 pt-2">
        <p className="me-2">
          Rise: {formatToLocalTime(sunrise, timezone, "hh:mm a")}
        </p>
        <p className="font-light">|</p>
        <p className="ms-2 me-2">
          Set: {formatToLocalTime(sunset, timezone, "hh:mm a")}
        </p>
        <p className="font-light">|</p>
        <p className="ms-2 me-2">High: {`${temp_max?.toFixed()}°`}</p>
        <p className="font-light">|</p>
        <p className="ms-2">Low: {`${temp_min?.toFixed()}°`}</p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
