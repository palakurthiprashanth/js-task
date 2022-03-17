import { render, screen } from "@testing-library/react";
import Banner from "./";


describe("Banner Component", () => {
    test("Banner component should be visible", () => {
        render(<Banner imageSrc="https://test/test" imageAlt="alt text" />);
        const banner= screen.getByTestId("banner");
        expect(banner).toBeVisible();
    });
});