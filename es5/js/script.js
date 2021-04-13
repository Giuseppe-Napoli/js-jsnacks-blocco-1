var inserisci_numero = parseInt(prompt('numeri cubi da sommare'));

//var somma
var somma = 0;

//ciclo per calcolare i cubi e le loro somme
for(var i = 1; i<= inserisci_numero; i++){
  somma += Math.pow(i,3);
}

console.log(somma);


