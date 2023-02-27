import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const country = createSlice({
    name: "selectCountry",
    initialState: "india",
    reducers: {
        update: (_, action) => action.payload
    }
})

const coordinates = createSlice({
    name: "coordinates",
    initialState: [28.644800, 77.216721],
    reducers: {
        update: (_, action) => data[action.payload].coordinates
    }
})

const info = createSlice({
    name: "info",
    initialState: null,
    reducers: {
        update: (_, action) => data[action.payload]
    }
})

export const countryAction = country;
export const coordinatesAction = coordinates;
export const infoAction = info
export default {
    country: country.reducer,
    coordinates: coordinates.reducer,
    info: info.reducer
};