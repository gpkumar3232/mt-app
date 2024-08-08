import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./slices/countrySlice";

const store = configureStore({
  reducer: {
    countries: countrySlice,
  },
});

export default store;
