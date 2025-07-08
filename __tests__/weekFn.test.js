const weekFn = require("../src/weekFn");

describe("weekFn", () => {
    test("returns correct day for 1–7", () => {
        expect(weekFn(1)).toBe("Понеділок");
        expect(weekFn(2)).toBe("Вівторок");
        expect(weekFn(3)).toBe("Середа");
        expect(weekFn(4)).toBe("Четвер");
        expect(weekFn(5)).toBe("П'ятниця");
        expect(weekFn(6)).toBe("Субота");
        expect(weekFn(7)).toBe("Неділя");
    });

    test("returns null for invalid numbers", () => {
        expect(weekFn(0)).toBe(null);
        expect(weekFn(9)).toBe(null);
        expect(weekFn(1.5)).toBe(null);
    });

    test("returns null for non-numeric inputs", () => {
        expect(weekFn("2")).toBe(null);
        expect(weekFn(null)).toBe(null);
        expect(weekFn(undefined)).toBe(null);
    });
});
