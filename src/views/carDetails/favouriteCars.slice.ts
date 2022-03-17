import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favouriteCarsSlice= createSlice({
    name: 'favouriteCars',
    initialState: {
        isCarExistInFavourite: false
    },
    reducers: {
        updateFavouriteCar(state, action: PayloadAction<{
            carId: number,
            type: string
        }>) {
            let { carId, type }= action.payload;
            let favCars: number[]= JSON.parse(localStorage.getItem('favCars') || '[]');
            let isAdded: boolean= false;

            if (type ==='save') {
                favCars.push(carId);
                isAdded= true;
            }else if (type === 'remove') {
                favCars = favCars.filter(carNumber => carNumber !== carId);
                isAdded= false;
            }
            localStorage.setItem('favCars', JSON.stringify(favCars));
            state.isCarExistInFavourite= isAdded;
        },
        checkIfCarExistInFavourite(state, action: PayloadAction<{ carId: number}>) {
            const { carId }= action.payload
            let favCars: number[] = JSON.parse(localStorage.getItem('favCars') || '[]');
            state.isCarExistInFavourite= favCars.includes(carId);
        }
    }
});

export const { updateFavouriteCar, checkIfCarExistInFavourite } = favouriteCarsSlice.actions

export default favouriteCarsSlice.reducer