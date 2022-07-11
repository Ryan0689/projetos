// Operadores Aritiméticos
let salario = 470
console.log(salario + salario) // somando
console.log(salario - salario) // subtraindo
console.log(salario * salario) // multiplicando
console.log(salario / salario) // dividindo
console.log(salario ** salario) // exponenciando

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

// Operadores De Atribuição
let tecladoGamer = 200 //  atribuindo valor a variavel
let tecladoGamer += tecladoGamer // basicamente está somando ele com ele mesmo, e atribuindo à variável o valor da soma.
let tecladoGamer -= tecladoGamer // basicamente está subtraindo ele com ele mesmo, e atribuindo à variável o valor da subtração.

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

// Operadores De Comparação
//igualdade
consolelog(1 === 1) // igualdade estrita -> true, compara tudo
console.log("1" === 1) // igualdade estrita -> false, por que compara tudo.
console.log(1 == 1) // igualdade solta -> true, só compara os valores
console.log("1" == 1) // igualdade solta -> true, só compara os valores
// ternário
//ex: tem um cliente, 100 pontos para cima é premium, abaixo é comun.
let pontos = 100
let tipo = pontos > 100 ? "premium" : "comum"
console.log(tipo)
// falsy -> é: undefined, 0, null, false, '', NaN
// truthy -> é: tudo aquilo que não é falsy

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

// Operadores Lógicos
// "i" (&&)
//retorna true se os dois operando forem verdadeiros
let maiorDeIdade = false
let temCarteiraDeTrabalho = true
let podeAplicar = maiorDeIdade && temCarteiraDeTrabalho
console.log(podeAplicar)
//"ou" (||)
//retorna true se houver pelo menos um operando for verdadeiro
let maiorDeIdade = false
let temCarteiraDeTrabalho = true
let podeAplicar = maiorDeIdade || temCarteiraDeTrabalho
console.log(podeAplicar)
//"not" (!)
let candidatoRecusado = !podeAplicar
console.log(candidatoRecusado)

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

// Operadores Bitwise
//O operador bitwise XOR (^) retorna o numero 1 em cada posição de bit para a qual os bits correspondentes de ambos, mas não de ambos os operandos, são 1s.
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 6

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

// Operadores De Incremento Ou Decremento
let numero = 10
console.log(numero++) // incrementando por 1
console.log(numero)
console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")
let idade = 21
console.log(idade--) // decrementando por 1
console.log(idade)