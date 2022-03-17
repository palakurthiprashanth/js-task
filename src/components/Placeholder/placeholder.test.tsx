import { render, screen } from "@testing-library/react";
import Placeholder from "./Placeholder";


describe("Placeholder component", () => {
    test("should load placeholder component", () => {
        render(
            <Placeholder/>
        );
        const placeholder= screen.getByTestId('placeholders');
        expect(placeholder).toBeVisible();
    });
});