let n = 11
let qtd_divisao = 0

for(let i = n; i > 0; i--){
    if(n % i == 0)
    qtd_divisao++
}

if (qtd_divisao == 2){
    console.log('O número ' + n + ' é primo!')
}else {
    console.log('O número ' + n + ' não é primo!')
    console.log('______Divisores______')

    for(let i = n; i > 0; i--){
        if(n % i == 0)
        console.log(i)
    }
}