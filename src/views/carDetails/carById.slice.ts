import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../constants/urls";

export const getCarDetailsById= createAsyncThunk(
    'cars/getCarById',
    async(carID: number) => {
        const { data }= await axios.get(`${API_BASE_URL}/cars/${carID}`);
        return data;
    }
);

const carByIdSlice= createSlice({
    name: 'carById',
    initialState: {
        car: {
            color: "",
            fuelType: "",
            manufacturerName: "",
            mileage: {
                number: 0, unit: "km"
            },
            number: 0,
            unit: "",
            modelName: "",
            pictureUrl: "",
            stockNumber: 0
        },
        isLoading: true,
        isError: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getCarDetailsById.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(getCarDetailsById.fulfilled, (state, action) => {
            state.car= action.payload.car;
            state.isLoading= false
        })
        .addCase(getCarDetailsById.rejected, (state) => {
            state.isLoading= false;
            state.isError= true;
        })
    }
});

export default carByIdSlice.reducer;