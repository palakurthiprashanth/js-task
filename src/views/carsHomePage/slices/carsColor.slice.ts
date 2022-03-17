import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../../constants/urls";
import { capitalizeFirstLetter } from "../../../utils";

type AllColors = {
    data: {
        colors: string[];
    };
}

export const getAllCarColors= createAsyncThunk(
    'cars/colors',
    async () => {
        const { data }= await axios.get(`${API_BASE_URL}/colors`) as AllColors;
        const colors = data.colors.map(item => ({
        text: capitalizeFirstLetter(item),
        value: item
        }));
        colors.unshift({ text: 'All car colors', value: '' });
        return colors;
    }
);

export const carColorSlice= createSlice({
    name: 'colors',
    initialState: {
        colors: [
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
        .addCase(getAllCarColors.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(getAllCarColors.fulfilled, (state, action) => {
             state.colors= action.payload;
            state.isLoading= false;
        })
        .addCase(getAllCarColors.rejected, (state) => {
            state.isLoading= false;
            state.isError= true;
        })
    }
});

export default carColorSlice.reducer;