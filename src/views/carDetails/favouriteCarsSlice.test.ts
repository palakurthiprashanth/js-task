import reducer, { updateFavouriteCar, checkIfCarExistInFavourite } from "./favouriteCars.slice";
import { store } from "../../app/store";


describe('Favourite Cars Slice', () => {
    test('updateFavouriteCar reducer on save', () => {
        
        const res= store.dispatch(updateFavouriteCar({
            carId: 1,
            type: 'save'
        }));
        const storeObj= store.getState();
        expect(res.type).toBe('favouriteCars/updateFavouriteCar');
        expect(storeObj.favouriteCars.isCarExistInFavourite).toBe(true);
    });

    test('updateFavouriteCar reducer on remove', () => {
        const res= store.dispatch(updateFavouriteCar({
            carId: 1,
            type: 'remove'
        }))
        const storeObj= store.getState();
        expect(res.type).toBe('favouriteCars/updateFavouriteCar');
        expect(storeObj.favouriteCars.isCarExistInFavourite).toBe(false);
    });

    test('updateFavouriteCar reducer on random action type', () => {
        const res= store.dispatch(updateFavouriteCar({
            carId: 1,
            type: 'random'
        }))
        const storeObj= store.getState();
        expect(res.type).toBe('favouriteCars/updateFavouriteCar');
        expect(storeObj.favouriteCars.isCarExistInFavourite).toBe(false);
    });

    test('checkIfCarExistInFavourite reducer', () => {
        // saving to favourite.
        store.dispatch(updateFavouriteCar({
            carId: 1,
            type: 'save'
        }));

        const res= store.dispatch(checkIfCarExistInFavourite({
            carId: 1,
        }));
        const storeObj= store.getState();
        expect(res.type).toBe('favouriteCars/checkIfCarExistInFavourite');
        expect(storeObj.favouriteCars.isCarExistInFavourite).toBe(true);
    });

});