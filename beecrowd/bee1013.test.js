import {main} from"./bee1013";

describe('cenarios de teste', () => {
    const cenarios = [ ]
    cenarios.forEach((cenarios, i) => {
        test('caso #' + i, () => {
            let{lines, result} = cenarios;

            let output = main(lines);

            expect(output).toBe(result)
        })
    })
})