import { render, screen } from "@testing-library/react";
import PageNotFound from "./PageNotFound";


describe("Page Not Found", () => {
    test("Should display the error message", () => {
        render(
            <PageNotFound/>
        );
        const container= screen.getByTestId('pageNotFound');
        const heading= screen.getByRole('heading', { name: "404 - Not Found" });
        const img= screen.getByRole('img', { name: "Auto1.com Logo" });
        const link= screen.getByRole('link', { name: "homepage" });

        expect(container).toBeVisible();
        expect(heading).toBeVisible();
        expect(img).toBeVisible();
        expect(link).toBeVisible();
    });
});