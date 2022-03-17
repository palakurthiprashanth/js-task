import { capitalizeFirstLetter, formatURL } from "./";

describe("utility methods", () => {
    test("capitalizeFirstLetter", () => {
        const res= capitalizeFirstLetter("abcde");
        expect(res).toBe("Abcde");
    });

    test("formatURL if all params are specified", () => {
        const res= formatURL(1,'asc', 'audi', 'blue');
        expect(res).toBe("https://auto1-mock-server.herokuapp.com/api/cars?page=1&manufacturer=audi&color=blue&sort=asc");
    });

    test("if no params are specified then pageno should default to 1", () => {
        const res= formatURL();
        expect(res).toBe("https://auto1-mock-server.herokuapp.com/api/cars?page=1");
    });
});