import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CarItemShort from "./CarItemShort";


const car= {
    stockNumber: 0,
    manufacturerName: 'Audi',
    modelName: 'A1',
    color: 'blue',
    mileage: { number: 20712, unit: 'km' },
    fuelType: 'Diesel',
    pictureUrl: '/images/car.svg'
  };

describe('CarItemShort component',() => {
    test('it should load all the elements', () => {
        render(
            <BrowserRouter>
                <CarItemShort car= { car }/>
            </BrowserRouter>  
        );
        const container= screen.getByTestId('carItemShort');
        const image= screen.getByRole('img');
        const link= screen.getByRole('link', { name: 'View Details'});
        // ${stockNumber} - ${mileageNumber} KM - ${fuelType} - ${color}`}
        const text= "Stock # 0 - 20712 KM - Diesel - blue";
        expect(container).toBeVisible();
        expect(image).toBeVisible();
        expect(screen.getByText(text)).toBeVisible();
        expect(link).toBeVisible();
    });
});