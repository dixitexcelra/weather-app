import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "weather",
  initialState: {
    weatherData: {},
  },
  reducers: {
    fetchCityWeather: (state, action) => {
      state.weatherData = action.payload;
    },
    resetCityWeather: (state) => {
      state.weatherData = {};
    },
  },
});

export const { fetchCityWeather, resetCityWeather } = slice.actions;
export const selectCityData = (state) => state;

export default slice.reducer;
