import { configureStore } from "@reduxjs/toolkit";

import WeatherSlice from "../weatherSlice/WeatherSlice";

export default configureStore({
  reducer: {
    weather: WeatherSlice,
  },
});
