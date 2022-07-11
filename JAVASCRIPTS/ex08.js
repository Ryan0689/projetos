// Função
// Verbo + Substantivo:
//ex: let resetarCor, alterarTamanho, e assim por diante.
let corFundoSite = "Verde Olíva"
function resetaCor(){
  corFundoSite = "Preto";
};
console.log(corFundoSite)
resetaCor();
console.log(corFundoSite)

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

let corfundoSite = "Verde Olíva"
function resetaCor(cor){
  corFundoSite = cor;
};
console.log(corfundoSite)
resetaCor(cor = "Preto")
console.log(corfundoSite)

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

let corFundosite = "Verde"
function resetaCor(cor,tonalidade){
  corFundosite = cor +' '+ tonalidade;
};
console.log(corFundosite)
resetaCor("Verde","Olíva")
console.log(corFundosite)

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

// função sem retorno
function dizerNome(){
  console.log("Ryan");
};
dizerNome();

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-")

// com retorno
function multiplicar(valor){
  return valor * 2;
};
let resultado = multiplicar(5)
console.log(resultado)