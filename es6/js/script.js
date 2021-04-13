
//var somma
var potenza = 1 ;

//ciclo per calcolare i cubi e le loro somme
for(var i = 1; potenza < 1000; i++){
  potenza = Math.pow(2,i);
  console.log(potenza)
}

console.log(potenza);

/* --------- */

var limite = 1000;
var potenza = 1;
var counter_potenza = 1;

while(potenza < limite){
  potenza = Math.pow(2,counter_potenza);
  counter_potenza++;
}

/* ++++++++ */

while(potenza < limite){
  console.log(potenza);
  potenza *=2;
}
