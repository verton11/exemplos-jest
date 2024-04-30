export function toString(algarismo){
    let res;

    let nom = ["zero", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"]

    if(algarismo >= 0 && algarismo <= 9 ) res = nom[algarismo]

    if(typeof algarismo === "boolean" || isNaN(algarismo) || algarismo > 9 || algarismo < 0) res = `${algarismo} nao e um algarismo`

    
    return res
}

// type ="boolean" || isNaN(algarismo) || algarismo >= 0 && algarismo <= 9 