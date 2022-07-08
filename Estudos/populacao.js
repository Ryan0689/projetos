let a = 80000
let b = 200000
let ano = 0

while (a <= b){
a += a * (3/100)
b += b * (1.5/100)
ano += 1
}

console.log('O país A igualou ou ultrapassou o país B em ' + ano + ' anos.')