test('soma', () =>{
    let a = 10
    let b = 5

    let res = soma(a, b)

    expect(res).toBe(15)
})

function soma(a,b){
    return a + b
}