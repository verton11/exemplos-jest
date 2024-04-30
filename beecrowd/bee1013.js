export function main(lines){
    let N = lines[0].split(' ');

    let a = Number(N[0]);
    let b = Number(N[1]);
    let c = Number(N[2]);

    let maior = Math.max(a, b);
    maior = Math.max(maior, c);

    return maior + "eh o maior";
}
