import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        app: createSlice({
            name: "app",
            initialState: {},
        })
    }
})

export default store;