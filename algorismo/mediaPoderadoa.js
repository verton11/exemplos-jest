export function calculaMedia(n1, n2, n3, n4, p1 = 1, p2 = 1, p3 = 1, p4 = 1){
    return(n1 * p1 + n2 * p2 + n3 * p3 + n4 * p4) / (p1*1 + p2*1 + p3*1 + p4*1)
}

export function verificaAprovacao(media){
    return media >= 7 ? true : false
}

export function verificaPresenca(presenca){
    if(presenca >= 0.75){
        return true
    }else{
        return false
    }
}

export function mediaPoderado(n1, n2, n3, n4, p1 = 1, p2 = 1, p3 = 1, p4 = 1, presenca = 0.75){

    let media = calculaMedia(n1, n2, n3, n4, p1, p2, p3, p4)

    if(verificaAprovacao(media) && verificaPresenca(presenca)) return "aprovado"

    return "reprovado"

}