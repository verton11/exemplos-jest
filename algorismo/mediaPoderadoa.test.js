import { mediaPoderado, calculaMedia, verificaPresenca, verificaAprovacao} from "./mediaPoderadoa"
//import {presenca} from "./mediaPoderadoa"

describe('media poderado', () => {
    test('caso 1 ', () => {
        let n1 = 8, n2 = 8, n3 = 8, n4 = 8

        let media = mediaPoderado(n1, n2, n3, n4)

        expect(media).toBe("aprovado")
    });

    test('caso 2 ', () => { // 6 + 18 + 15 + 20 = 59/10 = 5.9  ==>  Reprovado
        let n1 = 6, n2 = 9, n3 = 5, n4 = 5, p1 = 1, p2 = 2, p3 = 3, p4 = 4

        let media = mediaPoderado(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe("reprovado")
    });
    
    

    test('caso 3 ', () => {
        let n1 = 8.5, n2 = 8, n3 = 7, n4 = 6.5

        let media = mediaPoderado(n1, n2, n3, n4)

        expect(media).toBe("aprovado")
    });

    test('caso 4 ', () => {
        let n1 = 7, n2 = 8, n3 = 9, n4 = 10

        let media = mediaPoderado(n1, n2, n3, n4)

        expect(media).toBe("aprovado")
    });

    test('caso 5 ', () => {
        let n1 = 1, n2 = 1, n3 = 1, n4 = 10

        let media = mediaPoderado(n1, n2, n3, n4)

        expect(media).toBe("reprovado")
    });
    
    test('caso 6 ', () => { // 6 + 18 + 15 + 32 = 71 / 7.1 ==> 
        let n1 = "6", n2 = "9", n3 = "5", n4 = "8", p1 = 1, p2 = 2, p3 = 3, p4 = 4

        let media = mediaPoderado(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe("aprovado")
    });

    test('caso 7 ', () => {
        let n1 = "1", n2 = "3", n3 = "7", n4 = "1", p1 = 1, p2 = 2, p3 = 3, p4 = 4

        let media = mediaPoderado(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe("reprovado")
    });

    test('caso 8 ', () => {// 10 + 6 + 21 + 40
        let n1 = 10, n2 = 3, n3 = 7, n4 = 10, p1 = "1", p2 = "2", p3 = "3", p4 = "4"

        let media = mediaPoderado(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe("aprovado")
    });

    test('caso 9 ', () => {
        let n1 = 1, n2 = 3, n3 = 7, n4 = 1, p1 = "1", p2 = "2", p3 = "3", p4 = "4"

        let media = mediaPoderado(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe("reprovado")
    });

    test('caso 10: presenca abaixo de 75%',()=>{
        let n1 = "6", n2 = "9", n3 = "5", n4 = "8", p1 = 1, p2 = 2, p3 = 3, p4 = 4, presenca = 0.5

        let media = mediaPoderado(n1, n2, n3, n4, p1, p2, p3, p4, presenca)

        expect(media).toBe("reprovado")

    })

    test('caso 10: presenca iqual de 75%',()=>{
        let n1 = "6", n2 = "9", n3 = "5", n4 = "8", p1 = 1, p2 = 2, p3 = 3, p4 = 4, presenca = 0.75

        let media = mediaPoderado(n1, n2, n3, n4, p1, p2, p3, p4, presenca)

        expect(media).toBe("aprovado")

    })
    test('caso 11: presenca acima de 75%',()=>{
        let n1 = "6", n2 = "9", n3 = "5", n4 = "8", p1 = 1, p2 = 2, p3 = 3, p4 = 4, presenca = 0.9

        let media = mediaPoderado(n1, n2, n3, n4, p1, p2, p3, p4, presenca)

        expect(media).toBe("aprovado")
    })
});


describe('media calculaMedia', () => {
    test('caso 1 ', () => {
        let me = [8, 8, 8, 8]

        let media = calculaMedia(...me)

        expect(media).toBe(8)
    });

    test('caso 2 ', () => {
        let n1 = 6, n2 = 9, n3 = 5, n4 = 5, p1 = 1, p2 = 2, p3 = 3, p4 = 4

        let media = calculaMedia(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe(5.9)
    });
    
    

    test('caso 3 ', () => {
        let n1 = 8.5, n2 = 8, n3 = 7, n4 = 6.5

        let media = calculaMedia(n1, n2, n3, n4)

        expect(media).toBe(7.5)
    });

    test('caso 4 ', () => {
        let n1 = 7, n2 = 8, n3 = 9, n4 = 10

        let media = calculaMedia(n1, n2, n3, n4)

        expect(media).toBe(8.5)
    });

    test('caso 5 ', () => {
        let n1 = 1, n2 = 1, n3 = 1, n4 = 10

        let media = calculaMedia(n1, n2, n3, n4)

        expect(media).toBe(3.25)
    });
    
    test('caso 6 ', () => {
        let n1 = "6", n2 = "9", n3 = "5", n4 = "8", p1 = 1, p2 = 2, p3 = 3, p4 = 4

        let media = calculaMedia(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe(7.1)
    });

    test('caso 7 ', () => {
        let n1 = "1", n2 = "3", n3 = "7", n4 = "1", p1 = 1, p2 = 2, p3 = 3, p4 = 4

        let media = calculaMedia(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe(3.2)
    });

    test('caso 8 ', () => {
        let n1 = 10, n2 = 3, n3 = 7, n4 = 10, p1 = "1", p2 = "2", p3 = "3", p4 = "4"

        let media = calculaMedia(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe(7.7)
    });

    test('caso 9 ', () => {
        let n1 = 1, n2 = 3, n3 = 7, n4 = 1, p1 = "1", p2 = "2", p3 = "3", p4 = "4"

        let media = calculaMedia(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(media).toBe(3.2)
    });

    test('caso 10 ', () => {
        let n1 = "1", n2 = "3", n3 = "7", n4 = "1"

        let media = calculaMedia(n1, n2, n3, n4)

        expect(media).toBe(3)
    });
});


describe('verificaPresenca',() =>{
    test('caso resultado 1', () => {
        let presenca = 0.75

        let verificar = verificaPresenca(presenca)

        expect(verificar).toBe(true)
    })

    test('caso resultado 3', () => {
            let presenca = 0.9

            let verificar = verificaPresenca(presenca)

            expect(verificar).toBe(true)
    })

    test('caso resultado 2', () => {
        let presenca = 0.5

        let verificar = verificaPresenca(presenca)

        expect(verificar).toBe(false)
    })
})

describe('verificaAprovacao',() => {
    test('caso 1',() => {
        let med = 7

        let me = verificaAprovacao(med)

        expect(me).toBe(true)
    })

    test('caso 2', () => {
        let med = 10

        let me = verificaAprovacao(med)

        expect(me).toBe(true)
    })

    test('caso 3', () => {
        let med = 2

        let me = verificaAprovacao(med)

        expect(me).toBe(false)
    })
})