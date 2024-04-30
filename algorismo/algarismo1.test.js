import {toString} from "./algarismo1"

describe('Transforme um algorismo em um texto', () => {
    test('Caso seja zero', () => {
        let algarismo = "zero";

        let texto = toString(algarismo);

        expect(texto).toBe(0)
    })

    test('Caso seja um', () => {
        let algarismo = "um";

        let texto = toString(algarismo);

        expect(texto).toBe(1)
    })
    
    test('Caso seja dois', () => {
        let algarismo = "dois";

        let texto = toString(algarismo);

        expect(texto).toBe(2)
    })

    test('Caso seja tres', () => {
        let algarismo = "tres";

        let texto = toString(algarismo);

        expect(texto).toBe(3)
    })

    test('Caso seja quatro', () => {
        let algarismo = "quatro";

        let texto = toString(algarismo);

        expect(texto).toBe(4)
    })

    test('Caso seja cinco', () => {
        let algarismo = "cinco";

        let texto = toString(algarismo);

        expect(texto).toBe(5)
    })

    test('Caso seja seis', () => {
        let algarismo = "seis";

        let texto = toString(algarismo);

        expect(texto).toBe(6)
    })

    test('Caso seja sete', () => {
        let algarismo = "sete";

        let texto = toString(algarismo);

        expect(texto).toBe(7)
    })

    test('Caso seja oito', () => {
        let algarismo = "oito";

        let texto = toString(algarismo);

        expect(texto).toBe(8)
    })

    test('Caso seja nove', () => {
        let algarismo = "nove";

        let texto = toString(algarismo);

        expect(texto).toBe(9)
    })

    // test('Caso seja "9"', () => {
    //     let algarismo = "9";

    //     let texto = toString(algarismo);

    //     expect(texto).toBe("nove")
    // })

    // test('Caso seja 50', () => {
    //     let algarismo = 50;

    //     let texto = toString(algarismo);

    //     expect(texto).toBe(`${algarismo} nao e um algarismo`)
    // })

    // test('Caso seja 40', () => {
    //     let algarismo = 40;

    //     let texto = toString(algarismo);

    //     expect(texto).toBe(`${algarismo} nao e um algarismo`)
    // })

    // test('Caso seja "a"', () => {
    //     let algarismo = "a";

    //     let texto = toString(algarismo);

    //     expect(texto).toBe(`${algarismo} nao e um algarismo`)
    // })

    // test('Caso seja false', () => {
    //     let algarismo = false;

    //     let texto = toString(algarismo);

    //     expect(texto).toBe(`${algarismo} nao e um algarismo`)
    // })

    // test('Caso seja true', () => {
    //     let algarismo = true;

    //     let texto = toString(algarismo);

    //     expect(texto).toBe(`${algarismo} nao e um algarismo`)
    // })
})