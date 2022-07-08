let vhora = 5
let htrabalho = 220
let sbruto = (vhora * htrabalho)

if(sbruto <= 900){
    desconto = 0.0
}else if(sbruto <= 1500){
    desconto = 5
}else if (sbruto <= 2500){
    desconto = 10
}else{
    desconto = 20
}

let IR = sbruto * (desconto / 100)
let INSS = sbruto* (10 / 100)
let FGTS = sbruto * (11 / 100)
let tdescontos = IR + INSS
let sliquido = sbruto - tdescontos

console.log('Salário bruto: R$' + sbruto)
console.log('(-) IR (5%): R$' + IR)
console.log('(-) INSS ( 10%): R$' + INSS)
console.log('FGTS (11%): R$' + FGTS)
console.log('Total de descontos: R$' + tdescontos)
console.log('Salário Liquido: R$' + sliquido)