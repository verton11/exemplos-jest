describe('soma',() => {
    describe('A soma de dois numeros inteiros devera resultar em um inteiros.',() => {
        test('soma de 5 e 5 devera ser 10',() => {
            expect(soma(5,5)).toBe(10)
        })
    })
    describe('A soma de dois numeros literal devera resultar em um inteiros.',() => {
        test('soma de "5" e 5 devera ser 10',() => {
            expect(soma("5", 5)).toBe(10)
        })
    })
    describe('A soma de duas strings devera gera uma mensagem de erro',() => {
        test(soma('de strings dervera ser erro')),toThrow(Error)
    })
})

function soma(x, y){
    let x = Number(a)
    let y = Number(b)

    if(isNaN(x) || isNaN(y)) throw Error('error');

    return x, y
}