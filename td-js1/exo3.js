const prixHT=49.90;
const tva=0.2;

console.log(`Prix HT : ${(prixHT).toFixed(1)} €`)
console.log(`Prix TVA : ${(prixHT * tva).toFixed(2)} €`); 
console.log(`Prix TTC : ${((prixHT * tva)+prixHT).toFixed(2)} €`);