export function verifica(n1, n2, n3, n4){
    const res = (n1*1 + n2*1 + n3*1 + n4*1) / 4 

    console.log(res)
    if(res >= 7.0 ){
        return "aprovado"
    }
    else{
        return "reprovado"
    }
}