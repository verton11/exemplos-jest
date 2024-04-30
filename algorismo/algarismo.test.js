import {toString} from "./algarismo"

describe('Transforme um algorismo em um texto', () => {
    test('Caso seja 0', () => {
        let algarismo = 0;

        let texto = toString(algarismo);

        expect(texto).toBe("zero")
    })

    test('Caso seja 1', () => {
        let algarismo = 1;

        let texto = toString(algarismo);

        expect(texto).toBe("um")
    })
    
    test('Caso seja 2', () => {
        let algarismo = 2;

        let texto = toString(algarismo);

        expect(texto).toBe("dois")
    })

    test('Caso seja 3', () => {
        let algarismo = 3;

        let texto = toString(algarismo);

        expect(texto).toBe("tres")
    })

    test('Caso seja 4', () => {
        let algarismo = 4;

        let texto = toString(algarismo);

        expect(texto).toBe("quatro")
    })

    test('Caso seja 5', () => {
        let algarismo = 5;

        let texto = toString(algarismo);

        expect(texto).toBe("cinco")
    })

    test('Caso seja 6', () => {
        let algarismo = 6;

        let texto = toString(algarismo);

        expect(texto).toBe("seis")
    })

    test('Caso seja 7', () => {
        let algarismo = 7;

        let texto = toString(algarismo);

        expect(texto).toBe("sete")
    })

    test('Caso seja 8', () => {
        let algarismo = 8;

        let texto = toString(algarismo);

        expect(texto).toBe("oito")
    })

    test('Caso seja 9', () => {
        let algarismo = 9;

        let texto = toString(algarismo);

        expect(texto).toBe("nove")
    })

    test('Caso seja "9"', () => {
        let algarismo = "9";

        let texto = toString(algarismo);

        expect(texto).toBe("nove")
    })

    test('Caso seja 50', () => {
        let algarismo = 50;

        let texto = toString(algarismo);

        expect(texto).toBe(`${algarismo} nao e um algarismo`)
    })

    test('Caso seja 40', () => {
        let algarismo = 40;

        let texto = toString(algarismo);

        expect(texto).toBe(`${algarismo} nao e um algarismo`)
    })

    test('Caso seja "a"', () => {
        let algarismo = "a";

        let texto = toString(algarismo);

        expect(texto).toBe(`${algarismo} nao e um algarismo`)
    })

    test('Caso seja false', () => {
        let algarismo = false;

        let texto = toString(algarismo);

        expect(texto).toBe(`${algarismo} nao e um algarismo`)
    })

    test('Caso seja true', () => {
        let algarismo = true;

        let texto = toString(algarismo);

        expect(texto).toBe(`${algarismo} nao e um algarismo`)
    })
})