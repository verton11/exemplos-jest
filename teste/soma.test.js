describe('soma()', () => {
    describe('A soma de dois numeros inteiros devera resultar em um inteiros.', () => {
        test('soma de 5 e 5 devera ser 10', () => {
            expect(soma(5,5)).toBe(10)
        });
        test('soma de 3 e 3 desvera ser 6', () => {
            expect(soma(3,3)).toBe(6)
        });
        test('soma de 7 e 7 desvera ser 14', () => {
            expect(soma(7,7)).toBe(14)
        });
    });

    describe('A soma de dois numeros literal devera resultar em um inteiros.', () => {
        test('soma de "5" e 5 devera ser 10', () => {
            expect(soma('5',5)).toBe(10)
        });
        test('soma de 3 e "3" desvera ser 6', () => {
            expect(soma(3,'3')).toBe(6)
        });
        test('soma de "7" e "7" desvera ser 14', () => {
            expect(soma('7','7')).toBe(14)
        });
    });

    describe('A soma de duas strings devera gera uma mensagem de erro', () => {
        test('soma de strings dervera ser erro',() => {
            expect(() => soma('abc', 2)).toThrow(Error)
        });
        test('soma de strings dervera ser erro',() => {
            expect(() => soma(2, 'acb')).toThrow(Error)
        });
        test('soma de strings dervera ser erro',() => {
            expect(() => soma('abc', 'acb')).toThrow(Error)
        });
    });
});

function soma(x,y){
    let a = Number(x)
    let b = Number(y)

    if(isNaN(a) || isNaN(b)){
        throw Error('erro');
    } 

    return a + b
}
    