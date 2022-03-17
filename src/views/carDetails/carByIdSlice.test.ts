import reducer, { getCarDetailsById } from "./carById.slice";
import { store } from "../../app/store";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_BASE_URL } from "../../constants/urls";

var axiosMock = new MockAdapter(axios);

const initialState= {
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
    isLoading: false,
    isError: false
};

describe('CarbyId slice', () => {
    test("On pending of carbyId api", () => {
        const action= { type: getCarDetailsById.pending.type };
        const res= reducer(initialState, action);
        expect(res.isLoading).toBe(true);
    });

    test('should test async thunk "getCarDetailsById" on success', async () => {
        const data= {
            "car": {
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
          };
        axiosMock.onGet(`${API_BASE_URL}/cars/123`).reply(200, data);
          const res= await store.dispatch(getCarDetailsById(123));
          expect(res.type).toBe('cars/getCarById/fulfilled');
          expect(res.payload).toEqual(data);
    });

    test('should test async thunk "getCarDetailsById" on failure', async () => {
        axiosMock.onGet(`${API_BASE_URL}/cars/123`).reply(500, {});
          const res= await store.dispatch(getCarDetailsById(123));
          expect(res.type).toBe('cars/getCarById/rejected');
    });

});