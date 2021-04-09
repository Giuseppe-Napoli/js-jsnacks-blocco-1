var invitati = ['marcello','luca','marco','luigi','lorenzo'];

var nome = prompt("Inserisci il tuo nome");

var nome_presente = false;

for(var i=0; i<invitati.length; i++){
  var nome_inserito = invitati[i];
  if(nome_inserito===nome){
    nome_presente= true;
  }
}

if(nome_presente){
  console.log('invitato trovato');
}else{
  console.log('invitato non trovato');
}