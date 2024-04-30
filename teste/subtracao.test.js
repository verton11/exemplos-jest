test('subtracao', () => {
    let a = 10
    let b = 2

    let res = subtracao(a,b)

    expect(res).toBe(8)
})

function subtracao(a,b){
    return a - b
}