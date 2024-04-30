export function toString(algarismo){
    let res;

    const ra = ["zero", "um", "dois", "tres", "quatro", "cinco", "seis", ]

    if(algarismo == "zero") res = 0
    if(algarismo == "um") res = 1
    if(algarismo == "dois") res = 2
    if(algarismo == "tres") res = 3
    if(algarismo == "quatro") res = 4
    if(algarismo == "cinco") res = 5
    if(algarismo == "seis") res = 6
    if(algarismo == "sete") res = 7
    if(algarismo == "oito") res = 8
    if(algarismo == "nove") res = 9

    return res;
}