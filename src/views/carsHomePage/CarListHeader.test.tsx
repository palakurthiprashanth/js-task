import { render, screen } from "@testing-library/react";
import CarListHeader from "./CarListHeader";


describe('Carlist header component', () => {
    test('should display car list header component', () => {
        const onSelect= function (a: string) {}
        render(
            <CarListHeader
                currentCount= { 10 }
                totolCount= { 1000 }
                sortOptions= {[{text: 'Text', value: 'test'}]}
                selectedSort= { {text: 'Text', value: 'test'}}
                onSortSelect= { onSelect }
            />
        );
        // Showing {currentCount} of {totolCount} results
        const text= "Showing 10 of 1000 results";
        expect(screen.getByText(text)).toBeVisible();
        expect(screen.getByTestId('select')).toBeVisible();
    });
});