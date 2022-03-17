import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Select from ".";

const preSelected= { text: 'Audi', value: 'Audi' };
describe('Select Component', () => {
    test('select component should be visible', () => {
        const onChange= jest.fn();
        render(
            <Select
            id="1"
            options={
                [
                    { text: 'Audi', value: 'Audi' },
                    { text: 'BMW', value: 'BMW' },
                    { text: 'Chrysler', value: 'Chrysler' },
                ]
            }
            onSelect={ onChange }
            label="select"
            placeholder="select box"
            preSelectedOption= { preSelected }
            />
        );
        const select= screen.getByTestId('select');
        expect(select).toBeVisible();
        const btn= screen.getByRole('button');
        userEvent.click(btn);
        const listItem= screen.getAllByRole('listitem');
        expect(listItem).toHaveLength(3);
        expect(listItem[0]).toHaveTextContent('Audi');
        expect(listItem[1]).toHaveTextContent('BMW');
        expect(listItem[2]).toHaveTextContent('Chrysler');

        userEvent.click(listItem[0]);
        const lists= screen.queryAllByRole('listitem');
        expect(lists).toHaveLength(0);
    });
});