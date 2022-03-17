import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { formatURL } from "../../../utils";
import { carsRequest, carsResponse } from "../../../types"

export const getCarsByPage= createAsyncThunk(
    'cars/getAllCars',
    async (params: carsRequest) => {
        const { 
            page, 
            sortBy, 
            manufacturer, 
            color
         }= params;

        const url= formatURL(page, sortBy, manufacturer,color);
        const { data }= await axios.get(url) as carsResponse;

        return data;
    }
);

export const carsSlice= createSlice({
    name: 'cars',
    initialState: {
        cars: [{
            stockNumber: 0,
            manufacturerName: '',
            modelName: '',
            color: '',
            mileage: { number: 0, unit: '' },
            fuelType: '',
            pictureUrl: ''
          }],
        currentPageCount: 0,
        totalCarsCount: 0,
        totalPageCount: 0,
        isLoading: false,
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCarsByPage.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(getCarsByPage.fulfilled, (state, action) => {
            state.isLoading= false
            state.cars= action.payload.cars;
            state.currentPageCount= action.payload.cars.length;
            state.totalCarsCount= action.payload.totalCarsCount;
            state.totalPageCount= action.payload.totalPageCount;
        })
        .addCase(getCarsByPage.rejected, (state) => {
            state.isError= true;
        });
    }
});

export default carsSlice.reducer;
