import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import carsReducer from "../views/carsHomePage/slices/carsContainer.slice";
import colorsReducer from "../views/carsHomePage/slices/carsColor.slice";
import manufacturersReducer from "../views/carsHomePage/slices/carManufacturers.slice";
import carByIdReducer from "../views/carDetails/carById.slice";
import favouriteCarsReducer from '../views/carDetails/favouriteCars.slice';
 

export const store = configureStore({
  reducer: {
    allCars: carsReducer,
    allCarColors: colorsReducer,
    allCarManufacturers: manufacturersReducer,
    carById: carByIdReducer,
    favouriteCars: favouriteCarsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const allCars= (state: RootState) => state.allCars;
export const allCarColors= (state: RootState) => state.allCarColors;
export const allCarManufacturers= (state: RootState) => state.allCarManufacturers;
export const carById= (state: RootState) => state.carById;
export const favouriteCars= (state: RootState) => state.favouriteCars;
