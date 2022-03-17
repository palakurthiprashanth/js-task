import reducer, { getCarsByPage } from "./carsContainer.slice";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { store } from "../../../app/store";
import { API_BASE_URL } from "../../../constants/urls";

var axiosMock = new MockAdapter(axios);

describe('Testing Car container slice', () => {
    test ("should test async thunk 'getCarsByPage' on success", async() => {
        const data= {
            "cars": [
              {
                "stockNumber": 41400,
                "manufacturerName": "Fiat",
                "modelName": "Marea",
                "mileage": {
                  "number": 100141,
                  "unit": "km"
                },
                "fuelType": "Diesel",
                "color": "white",
                "pictureUrl": "http://localhost:3001/car.svg"
              }
            ],
            "totalPageCount": 2,
            "totalCarsCount": 16
          };
        axiosMock.onGet(`${API_BASE_URL}/cars?page=1`).reply(200, data);
        const result = await store.dispatch(getCarsByPage({
            page: 1
        }))
        expect(result.type).toBe('cars/getAllCars/fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('On getCarsByPage api pending', () => {
        const initialState= {
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
            isLoading: true,
            isError: false
        };
        const payload= {...initialState, isLoading: true}
        const action = { type: getCarsByPage.pending.type, payload }
        const res= reducer(initialState, action);
        expect(res.isLoading).toBe(true);
    });

    test ("should test async thunk 'getCarsByPage' on rejection", async() => {
        axiosMock.onGet(`${API_BASE_URL}/cars?page=1`).reply(500, {});
        const result = await store.dispatch(getCarsByPage({
            page: 1
        }))
        expect(result.type).toBe('cars/getAllCars/rejected');
    });
});