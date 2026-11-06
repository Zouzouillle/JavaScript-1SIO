function calculerTTC (prixHT, taux= 0.2) {
    return (prixHT * (1 + taux)).toFixed(2);
}

console.log (calculerTTC(49.9)) ;
console.log (calculerTTC(50, 0.1)) ;