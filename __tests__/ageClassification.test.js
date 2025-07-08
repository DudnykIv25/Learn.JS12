const ageClassification = require("../src/ageClassification");

describe("ageClassification", () => {
    test("returns null for negative age", () => {
        expect(ageClassification(-1)).toBe(null);
    });

    test('returns "Дитинство" for 0–24', () => {
        expect(ageClassification(0)).toBe(null);
        expect(ageClassification(1)).toBe("Дитинство");
        expect(ageClassification(24)).toBe("Дитинство");
    });

    test('returns "Молодість" for >24–44', () => {
        expect(ageClassification(24.01)).toBe("Молодість");
        expect(ageClassification(44)).toBe("Молодість");
    });

    test('returns "Зрілість" for >44–65', () => {
        expect(ageClassification(44.01)).toBe("Зрілість");
        expect(ageClassification(65)).toBe("Зрілість");
    });

    test('returns "Старість" for >65–75', () => {
        expect(ageClassification(65.1)).toBe("Старість");
        expect(ageClassification(75)).toBe("Старість");
    });

    test('returns "Довголіття" for >75–90', () => {
        expect(ageClassification(75.01)).toBe("Довголіття");
        expect(ageClassification(90)).toBe("Довголіття");
    });

    test('returns "Рекорд" for >90–122', () => {
        expect(ageClassification(90.01)).toBe("Рекорд");
        expect(ageClassification(122)).toBe("Рекорд");
    });

    test("returns null for >122", () => {
        expect(ageClassification(122.01)).toBe(null);
        expect(ageClassification(150)).toBe(null);
    });
});
