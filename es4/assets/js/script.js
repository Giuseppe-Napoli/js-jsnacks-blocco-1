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