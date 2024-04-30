test('divisao', () =>{
    let a = 10
    let b = 2

    let res = divisao(a,b)

    expect(res).toBe(5)
})

function divisao(a,b){
    return a / b
}