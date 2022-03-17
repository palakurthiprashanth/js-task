import { render, screen } from "@testing-library/react";
import SomethingWentWrong from "./SomethingWentWrong";


describe("SomethingWentWrong", () => {
    test("should display error message", () => {
        render (
            <SomethingWentWrong/>
        );
        const container= screen.getByTestId('somethingWentWrong');
        const heading= screen.getByRole("heading", { name: "Something went wrong." });
        const text= screen.getByText("Pleast try again after sometime.");

        expect(container).toBeVisible();
        expect(heading).toBeVisible();
        expect(text).toBeVisible();
    });
});