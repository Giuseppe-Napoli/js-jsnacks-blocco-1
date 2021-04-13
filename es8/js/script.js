// Chiedi un numero di 4 cifre all’utente
var numero = parseInt(prompt("Inserisci un numero di quattro cifre:"))
// creo una variabile somma
var somma = 0;

//calcola la somma di tutte le cifre che compongono il numero.
while (numero) {
  somma += numero % 10;
  numero = Math.floor(numero / 10);
}

// output
console.log(somma); 