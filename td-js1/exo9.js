const prompt = require('prompt-sync')();
for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log("Nombres pairs");
for (let p=2; p < 21; p += 2) {
    if (p % 2 === 0) {
        console.log(p);
    }
}

console.log("Table de multiplication");
const nombre=Number (prompt("Entrez un nombre "));
for (let x=1; x < 11; x++) {
    console.log(nombre*x)
}


let somme = 0;
for (let y=1; y < 101; y++) {
    somme += y;
}
console.log("La somme des nombres de 1 à 100 est : " + somme);