import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../../constants/urls";
import { capitalizeFirstLetter } from "../../../utils";
import { Manufacturers } from "../../../types";


export const getAllCarManufacturers= createAsyncThunk(
    'cars/Manufacturers',
    async () => {
        const { data }= await axios.get(`${API_BASE_URL}/manufacturers`) as Manufacturers;
        const manufacturers = data.manufacturers.map(item => ({
            text: capitalizeFirstLetter(item.name),
            value: item.name
        }));
        manufacturers.unshift({ text: 'All manufacturers', value: '' });
        return manufacturers;
    }
)

const carManufacturersSlice= createSlice({
    name: 'manufacturers',
    initialState: {
        manufacturers: [
            {
                text: '',
                value: ''
            }
        ],
        isLoading: true,
        isError: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getAllCarManufacturers.pending, (state) => {
            state.isLoading= true
        })
        .addCase(getAllCarManufacturers.fulfilled, (state, action) => {
            state.isLoading= false;
            state.manufacturers= action.payload;
        })
        .addCase(getAllCarManufacturers.rejected, (state) => {
            state.isError= true;
        })
    }
}
);

export default carManufacturersSlice.reducer;