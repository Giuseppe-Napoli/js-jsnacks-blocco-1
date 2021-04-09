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
