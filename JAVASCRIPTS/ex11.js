// se a hora estiver entre 6 às 12, dar bom dia, se estiver entre 13 às 18, dar boa tarde. 
// se não estiver em nehuma das opções anteriores, der boa noite.

let horario = 17
if(horario > 6 && horario < 12 ){
  console.log('Bom dia!')
}else if(horario > 12 && horario < 18){
  console.log('Boa tarde!')
}else{
  console.log('Boa noite!')
}