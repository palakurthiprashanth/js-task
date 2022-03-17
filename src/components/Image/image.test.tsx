import { render, screen, fireEvent , act, getByRole} from "@testing-library/react";
import Image from "./Image";


describe("Image component", () => {
    test("Image component should render", () => {
            render(
                <Image src="test" alt="alt text" className=""/>
            );
            expect(screen.getByRole('img')).toBeVisible();
        });
        

    test("Image component on Error", () => {
        render(
            <Image src="test" alt="alt text" className="" />
        );
        act(() => {
            fireEvent(screen.getByRole('img'), new Event('error'))
          })
        const img= screen.getByRole('img');
        expect(img.getAttribute('src')).toBe('/images/car-default.png');  
    });
});