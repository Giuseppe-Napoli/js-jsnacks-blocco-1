//Calcola la somma e la media dei primi 10 numeri.

//creo un array con 10 numeri
var n = [1,2,3,4,5,6,7,8,9,10]
console.log(n);

//creo una var somma e una media
var somma = 0;
var media;

//con un ciclo sommo tutti i valori dell array
for (i = 0; i < n.length; i++){
  var el_n= n[i]
  somma += el_n;
}
//risultato somma
console.log(somma);

//calcolo la media 
media = somma / n.length;

//risultato media
console.log(media);
