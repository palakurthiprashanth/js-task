import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from 'react-router-dom';


describe("Header Component", () => {
    test('Logo and Nav links should be visible', () => {
        render(
            <Router>
                <Header/>
            </Router>
        );
        const logo= screen.getByRole("img");
        const navLinks= screen.getAllByRole('link');
        expect(logo).toBeVisible();
        expect(logo.getAttribute('src')).toBe("/images/logo.png");
        expect(navLinks).toHaveLength(4);
        expect(navLinks[1].textContent).toBe("Purchase");
        expect(navLinks[2].textContent).toBe("My Orders");
        expect(navLinks[3].textContent).toBe("Sell");
    });
});