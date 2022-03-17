import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CarList from "./CarList";


const cars = [{
    stockNumber: 0,
    manufacturerName: 'Audi',
    modelName: 'A1',
    color: 'blue',
    mileage: { number: 20712, unit: 'km' },
    fuelType: 'Diesel',
    pictureUrl: '/images/car.svg'
  }];
describe('CarList component', () => {
    test('should display placeholders component', () => {
        render(
            <CarList cars= { cars } showPlaceholderBlocks= {true}/>
        );
        expect(screen.getAllByTestId('placeholders')).toHaveLength(10);
    });

    test('should display carItemShort component', () => {
        render(
            <BrowserRouter>
                <CarList cars= { cars } showPlaceholderBlocks= {false}/>
            </BrowserRouter>
        );
        expect(screen.getByTestId('carItemShort')).toBeVisible();
    });
});