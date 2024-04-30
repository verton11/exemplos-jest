describe('test atividade 1018', () => {
    const cenarios = [
        {
            lines: ["567"],
            result: [
                '5 nota(s) de R$ 100,00',
                '1 nota(s) de R$ 50,00',
                '1 nota(s) de R$ 20,00',
                '0 nota(s) de R$ 10,00',
                '1 nota(s) de R$ 5,00',
                '0 nota(s) de R$ 2,00',
                '1 nota(s) de R$ 1,00',
            ]
        },
        {
            lines: ["11257"],
            result: [
                '112 nota(s) de R$ 100,00',
                '1 nota(s) de R$ 50,00',
                '0 nota(s) de R$ 20,00',
                '0 nota(s) de R$ 10,00',
                '1 nota(s) de R$ 5,00',
                '1 nota(s) de R$ 2,00',
                '0 nota(s) de R$ 1,00',
            ]
        },
        {
            lines: ["503"],
            result: [
                '5 nota(s) de R$ 100,00',
                '0 nota(s) de R$ 50,00',
                '0 nota(s) de R$ 20,00',
                '0 nota(s) de R$ 10,00',
                '0 nota(s) de R$ 5,00',
                '1 nota(s) de R$ 2,00',
                '1 nota(s) de R$ 1,00',
            ]
        },
    ]

    cenarios.forEach(function(cenario, i) {
        test('caso' + i, () => {
            let {lines, result} = cenario;

            let output = resolve(lines)

            expect(output).toBe(result)
        })
    })
});
