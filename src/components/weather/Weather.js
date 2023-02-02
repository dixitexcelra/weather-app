import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

import {
  fetchCityWeather,
  resetCityWeather,
  selectCityData,
} from "../reduxSlice/weatherSlice/WeatherSlice";
import { useDispatch, useSelector } from "react-redux";
import getFormattedWeatherData from "../api";
import Forecast from "./Forcast";
import TemperatureAndDetails from "./TemperatureAndDetails";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Weather = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({ q: "" });

  const selectedCity = useSelector(selectCityData);
  const { weatherData } = selectedCity?.weather;

  const handleChange = (e) => {
    if (e.target.value === "") {
      dispatch(resetCityWeather());
    } else {
      setQuery({ q: e.target.value });
    }
  };

  const handleClick = async () => {
    await getFormattedWeatherData({ ...query, units: "metric" }).then(
      (data) => {
        dispatch(fetchCityWeather(data));
      }
    );
  };

  return (
    <>
      <div>
        <h2 className="">Weather App</h2>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => handleChange(e)}
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "10px",
            marginTop: "20px",
            marginRight: "10px",
          }}
        />
        <Button variant="contained" onClick={handleClick}>
          <SearchIcon />
        </Button>
      </div>
      {weatherData?.dt ? (
        <div>
          <TemperatureAndDetails weather={weatherData} />
          <div className="">
            <Forecast title="hourly forecast" items={weatherData.hourly} />
            <Forecast title="daily forecast (H/L)" items={weatherData.daily} />
          </div>
        </div>
      ) : (
        <h1>Data Not Found!</h1>
      )}
    </>
  );
};

export default Weather;
