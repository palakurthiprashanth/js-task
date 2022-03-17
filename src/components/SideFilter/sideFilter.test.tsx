import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SideFilter from ".";


const colors= [
    { text: 'All car colors', value: '' },
    { text: 'Red', value: 'red' },
    { text: 'Blue', value: 'blue' },
    { text: 'Green', value: 'green' },
    { text: 'Black', value: 'black' },
    { text: 'Yellow', value: 'yellow' },
    { text: 'White', value: 'white' },
    { text: 'Silver', value: 'silver' }
  ];

  const manufacturers= [
    { text: 'All manufacturers', value: '' },
    { text: 'Audi', value: 'Audi' },
    { text: 'BMW', value: 'BMW' },
    { text: 'Chrysler', value: 'Chrysler' },
    { text: 'Dodge', value: 'Dodge' },
    { text: 'Fiat', value: 'Fiat' },
    { text: 'Mercedes-Benz', value: 'Mercedes-Benz' },
    { text: 'Porsche', value: 'Porsche' },
    { text: 'Skoda', value: 'Skoda' },
    { text: 'Tesla', value: 'Tesla' },
    { text: 'Volkswagen', value: 'Volkswagen' }
  ];

  const selectedColor= colors[2];
  const selectedManufacturer= manufacturers[2];
  
  describe("Side Filter", () => {
      test("should render colors and manufactures dropdown when they have length > 0", () => {
        const onChangeColorFilter= jest.fn();
        const onChangeManufacturFilter= jest.fn();
        const onFilterClick= jest.fn();
        render(
            <SideFilter 
              colors={ colors }
              manufacturers={ manufacturers }
              selectedColor= { selectedColor }
              selectedManufacturers= { selectedManufacturer }
              onChangeColorFilter= { onChangeColorFilter }
              onChangeManufacturFilter= { onChangeManufacturFilter }
              onFilterClick= { onFilterClick }
            />
        );
        const btn= screen.getByTestId('button');
        userEvent.click(btn);
        expect(onFilterClick).toHaveBeenCalledTimes(1);
      });

      test("should not render colors and manufactures dropdown when they have no data", () => {
        const onChangeColorFilter= jest.fn();
        const onChangeManufacturFilter= jest.fn();
        const onFilterClick= jest.fn();
        render(
            <SideFilter 
              colors={ [] }
              manufacturers={ [] }
              selectedColor= { selectedColor }
              selectedManufacturers= { selectedManufacturer }
              onChangeColorFilter= { onChangeColorFilter }
              onChangeManufacturFilter= { onChangeManufacturFilter }
              onFilterClick= { onFilterClick }
            />
        );
        const color= screen.queryByTestId('color');
        const manufacturers= screen.queryByTestId('Manufacturers');
        expect(color).toBeNull();
        expect(manufacturers).toBeNull();
        expect(color).not.toBeInTheDocument();
        expect(manufacturers).not.toBeInTheDocument();
      });
  });
