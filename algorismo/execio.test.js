import {verifica} from "./execio"

describe('media aritimetica', () => {
    test('caso de test 1 ', () => {
        let n1 = 8, n2 = 10, n3 = 5, n4 = 5

        let resul = verifica(n1, n2, n3, n4)

        expect(resul).toBe("aprovado")
    });

    test('caso de test 2 ', () => {
        let n1 = 8, n2 = 9, n3 = 5, n4 = 5

        let resul = verifica(n1, n2, n3, n4)

        expect(resul).toBe("reprovado")
    });

    test('caso de test 3 ', () => {
        let n1 = 8.5, n2 = 8, n3 = 7, n4 = 6.5

        let resul = verifica(n1, n2, n3, n4)

        expect(resul).toBe("aprovado")
    });

    test('caso de test 3 ', () => {
        let n1 = '7', n2 = '8', n3 = '9', n4 = '10'

        let resul = verifica(n1, n2, n3, n4)

        expect(resul).toBe("aprovado")
    });

    test('caso de test 3 ', () => {
        let n1 = '1', n2 = '7', n3 = '9', n4 = '1'

        let resul = verifica(n1, n2, n3, n4)

        expect(resul).toBe("reprovado")
    });
});