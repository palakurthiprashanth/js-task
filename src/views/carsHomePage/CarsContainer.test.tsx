import CarsContainer from "./CarsContainer";
import { defaultInitialState } from "../../utils/mockStore";
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import { useAppDispatch, useAppSelector} from "../../app/hooks";

jest.mock("../../app/hooks");

const mockedDispatch= useAppDispatch as jest.Mock;
const mockedSelector= useAppSelector as jest.Mock;
const dispatch= jest.fn();

describe('should test cars container', () => {
      beforeEach(() => {
        const selectorData= {...defaultInitialState.allCars, ...defaultInitialState.allCarColors, ...defaultInitialState.allCarManufacturers }
        mockedSelector.mockImplementation(() => selectorData);
        mockedDispatch.mockImplementation(() => dispatch);
       
    });
    test("should test side filter", () => {
      const { getByTestId, getAllByRole, getByRole }= render(
        <Router>
          <CarsContainer/>
        </Router>
      );
      
      const sidefilter= getByTestId('sidefilter');
      expect(sidefilter).toBeInTheDocument();
      // change sort by dropdown
      const sortBy= getByTestId('Sort By');
      userEvent.click(sortBy);
      // selecting value from sortBy filter.
      const sortingList= getAllByRole('listitem');
      userEvent.click(sortingList[1]);

      // changing the color dropdown
      const colorBtn= getByTestId('color');
      userEvent.click(colorBtn);
      const listItem= getAllByRole('listitem');
      expect(listItem).toHaveLength(1);
      userEvent.click(listItem[0]);

      // changing manufacturer dropdown.
      const manufactureBtn= getByTestId('Manufacturers');
      userEvent.click(manufactureBtn);
      const manufacturList= getAllByRole('listitem');
      userEvent.click(manufacturList[0]);

      // clicking on filter button.
      const filterBtn= getByRole('button', { name: 'Filter'});
      userEvent.click(filterBtn);
      expect(window.location.href).toContain("?color=blue&manufacturer=Audi&sort=asc");
    });
  
    test('should test car list header', async() => {
      const { getByText }= render(
        <Router>
        <CarsContainer/>
      </Router>
      );
      const text= getByText('Available Cars');
      const carListHeader= getByText('Sort By');
      expect(text).toBeVisible();
      expect(carListHeader).toBeVisible();
    });
  
    test('pagination results', () => {
      const { getByText, getByTestId, getByRole }= render(
        <Router>
        <CarsContainer/>
      </Router>
      );
      const text= getByText('Showing 10 of 100 results');
      const paginationButtons= getByTestId('paginationButtons');
      expect(text).toBeVisible();
      expect(paginationButtons).toBeVisible();
      const btn= getByRole('button', { name: 'Next' });
      userEvent.click(btn);
      expect(getByText("Page 2 of 10")).toBeVisible();
    });
  
    test('should load carItemshort component', () => {
      const { getAllByTestId }= render(
        <Router>
        <CarsContainer/>
      </Router>
      );
      const cars= getAllByTestId('carItemShort');
      expect(cars).toHaveLength(15);
    });

    test('on error it should display something went wrong component', () => {
        const selectorData= {...defaultInitialState.allCars, ...defaultInitialState.allCarColors, ...defaultInitialState.allCarManufacturers }
        selectorData.isError= true;
        mockedSelector.mockImplementation(() => selectorData);
        const { getByTestId }= render(
          <Router>
          <CarsContainer/>
        </Router>
        );
        const error= getByTestId('somethingWentWrong');
        expect(error).toBeVisible();
    });
  });