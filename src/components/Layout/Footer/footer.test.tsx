import { render, screen} from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
    test('footer component should be visible', () => {
        render(
            <Footer/>
        );
        const footer= screen.getByTestId('footer');
        const text= footer.getElementsByTagName('span')[0];
        expect(text).toHaveTextContent("© AUTO1 Group 2019");
    });
});