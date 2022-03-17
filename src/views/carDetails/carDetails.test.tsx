import { defaultInitialState } from "../../utils/mockStore";
import { render } from "@testing-library/react"
import CarDetails from "./CarDetails";
import { useAppDispatch, useAppSelector} from "../../app/hooks";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        carStockNumber: "123"
    })
}));

jest.mock("../../app/hooks");

const mockedDispatch= useAppDispatch as jest.Mock;
const mockedSelector= useAppSelector as jest.Mock;
const dispatch= jest.fn();

describe("Car Details", () => {
    beforeEach(() => {
        const selectorData= {...defaultInitialState.carById, ...defaultInitialState.favouriteCars }
        mockedSelector.mockImplementation(() => selectorData);
        mockedDispatch.mockImplementation(() => dispatch);
    });
    test('child components should render', () => {
        const { getByTestId }= render(
            <CarDetails/>,
        );
        const banner= getByTestId('banner');
        const carDetails= getByTestId('carDetailsContainer');
        expect(banner).toBeVisible();
        expect(carDetails).toBeVisible();
        expect(dispatch).toHaveBeenCalled();
    });

    test('if car is not in favourites save button should be visible', () => {
        const favourite= {
            ...defaultInitialState.favouriteCars,
            isCarExistInFavourite: false 
        }
        const selectorData= {...defaultInitialState.carById, ...favourite }
        mockedSelector.mockImplementation(() => selectorData);
        const { getByTestId }= render(
            <CarDetails/>,
        );
        const btnSave= getByTestId('button');
        expect(btnSave).toHaveTextContent('Save');
        userEvent.click(btnSave);
        expect(dispatch).toHaveBeenCalledWith({
            type: "favouriteCars/updateFavouriteCar",
            payload: {
                "carId": 123,
                "type": "save"
            }
        });
    });

    test('if car is in favourites remove button should be visible', () => {
        const favourite= {
            ...defaultInitialState.favouriteCars,
            isCarExistInFavourite: true 
        }
        const selectorData= {...defaultInitialState.carById, ...favourite }
        mockedSelector.mockImplementation(() => selectorData);
        const { getByTestId }= render(
            <CarDetails/>,
        );
        const btnRemove= getByTestId('button');
        expect(btnRemove).toHaveTextContent('Remove');
        userEvent.click(btnRemove);
        expect(dispatch).toHaveBeenCalledWith({
            type: "favouriteCars/updateFavouriteCar",
            payload: {
                "carId": 123,
                "type": "remove"
            }
        });
    });

    test('should display "loading" if promise is pending', () => {
        const selectorData= {...defaultInitialState.carById, ...defaultInitialState.favouriteCars }
        selectorData.isLoading= true;
        mockedSelector.mockImplementation(() => selectorData);
        const { getByText }= render(
            <CarDetails/>,
        );
        const loading= getByText('Loading...');
        expect(loading).toBeVisible();
    });

    test('should display "something went wrong" if promise is rejected', () => {
        const selectorData= {...defaultInitialState.carById, ...defaultInitialState.favouriteCars }
        selectorData.isError= true;
        mockedSelector.mockImplementation(() => selectorData);
        const { getByTestId }= render(
            <CarDetails/>,
        );
        const error= getByTestId('somethingWentWrong');
        expect(error).toBeVisible();
    });

});