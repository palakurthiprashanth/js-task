import reducer, { getAllCarManufacturers } from "./carManufacturers.slice";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { store } from "../../../app/store";
import { API_BASE_URL } from "../../../constants/urls";

var axiosMock = new MockAdapter(axios);

const  initialState= {
    manufacturers: [
        {
            text: '',
            value: ''
        }
    ],
    isLoading: true,
    isError: false
};

describe('getAllCarManufactures', () => {
    test('on Pending of getAllCarManufacturers', () => {
        const action= { type: getAllCarManufacturers.pending.type };

        const res= reducer(initialState, action);
        expect(res.isLoading).toBe(true);
    });

    test ("should test async thunk 'getAllCarManufacturers' on success", async() => {
        axiosMock.onGet(`${API_BASE_URL}/manufacturers`).reply(200, {
            "manufacturers": [
              {
                "name": "Fiat",
                "models": [
                  {
                    "name": "Marea"
                  }
                ]
              }
            ]
          });
          const expected= [
            { text: 'All manufacturers', value: '' },
            { text: 'Fiat', value: 'Fiat' }
          ];
        const result = await store.dispatch(getAllCarManufacturers())
        const payload= result.payload;
        expect(result.type).toBe('cars/Manufacturers/fulfilled');
        expect(result.payload).toEqual(payload);
    });

    test ("should test async thunk 'getAllCarManufacturers' on error", async() => {
        axiosMock.onGet(`${API_BASE_URL}/manufacturers`).reply(500, {});
          const expected= [
            { text: 'All manufacturers', value: '' },
            { text: 'Fiat', value: 'Fiat' }
          ];
        const result = await store.dispatch(getAllCarManufacturers());
        expect(result.type).toBe('cars/Manufacturers/rejected');
    });

});