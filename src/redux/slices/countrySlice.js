import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk("getCountries", async () => {
    const response = await axios.get("https://restcountries.com/v2/all?fields=name,region,flag");
    return response.data;
});

const CountrySlice = createSlice({
    name: "country",
    initialState: {
        loading: false,
        ogList: [],
        list: [],
        error: ""
    },
    reducers: {
        updateList: (state, action) => {
            if (action.payload !== "All")
                state.list = state.ogList.filter((item) => item.region === action.payload);
            else
                state.list = state.ogList
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCountries.fulfilled, (state, action) => {
            state.list = action.payload;
            state.ogList = action.payload;
            state.loading = false;
            state.error = "";
        });
        builder.addCase(getCountries.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCountries.rejected, (state, action) => {
            state.error = action.payload;
        });
    },
});

export const { updateList } = CountrySlice.actions;
export default CountrySlice.reducer;
