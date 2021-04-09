// esercizio 1
var parola_1 = prompt("inserisci la prima parola");
console.log(parola_1.length);
var parola_2 = prompt("inserisci la seconda parola");
console.log(parola_2.length);

if(parola_1.length<parola_2.length){
  console.log(parola_1 + " la lunghezza della prima parola è piu corta della seconda " + parola_2);
}else if(parola_2.length<parola_1.length){
  console.log(parola_2 + " la lunghezza della seconda parola è più corta della prima " + parola_1);
}else{
  console.log("la lunghezza delle parole è uguale");
}

//esercizio 2
var numero_1 = parseInt(prompt("inserisci primo numero"));
var numero_2 = parseInt(prompt("inserisci secondo numero"));
var numero_3 = parseInt(prompt("inserisci terzo numero"));
var numero_4 = parseInt(prompt("inserisci quarto numero"));
var numero_5 = parseInt(prompt("inserisci quinto numero"));
var numero_6 = parseInt(prompt("inserisci sesto numero"));
var numero_7 = parseInt(prompt("inserisci settimo numero"));
var numero_8 = parseInt(prompt("inserisci ottavo numero"));
var numero_9 = parseInt(prompt("inserisci nono numero"));
var numero_10 = parseInt(prompt("inserisci decimo numero"));
//bisognava creare un ciclo
var numero = []
numero.push(numero_1,numero_2, numero_3, numero_4, numero_5,numero_6,numero_7, numero_8, numero_9, numero_10);
console.log(numero);

var somma = numero_1 + numero_2 + numero_3 + numero_4 + numero_5 + numero_6 + numero_7 + numero_8 + numero_9 + numero_10;
console.log(somma);


//esercizio 3
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

//esercizio 4
var odds = [];

for(var i= 0; i < 6; i++){
  var num = parseInt(prompt('inserisci un numero'));
  if(num%2 != 0 ){
    odds.push(num);
    console.log('dispari');
  }else{
    console.log('pari');
  }
}
console.log(odds);