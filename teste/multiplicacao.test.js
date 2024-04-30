test('multiplicacao', () =>{
    let a = 10 
    let b = 2

    let res = multiplica(a,b)

    expect(res).toBe(20)
})

function multiplica(a,b){
    return a * b
}