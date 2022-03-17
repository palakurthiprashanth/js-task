import reducer, { getAllCarColors } from "./carsColor.slice";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { store } from "../../../app/store";
import { API_BASE_URL } from "../../../constants/urls";

const initialState= {
    colors: [
        {
            text: '', 
            value: ''
        }
    ],
    isLoading: false,
    isError: false
};

var axiosMock = new MockAdapter(axios);

describe('Cars color slice', () => {
    test('on Pending of colors api', () => {
        const action= { type: getAllCarColors.pending.type };
        const res= reducer(initialState, action);
        expect(res.isLoading).toBe(true);
    });
    test ("should test async thunk 'getAllCarManufacturers' on success", async() => {
        const data= {
            "colors": [
              "white"
            ]
          };
        const expected= [
            { text: 'All car colors', value: '' },
            { text: 'White', value: 'white' }
          ];  
        axiosMock.onGet(`${API_BASE_URL}/colors`).reply(200, data);
        const res= await store.dispatch(getAllCarColors());
        expect(res.type).toBe('cars/colors/fulfilled');
        expect(res.payload).toEqual(expected);
    });
    test ("should test async thunk 'getAllCarManufacturers' on rejection", async() => {
        axiosMock.onGet(`${API_BASE_URL}/colors`).reply(500, {});
        const res= await store.dispatch(getAllCarColors());
        expect(res.type).toBe('cars/colors/rejected');
    });
});