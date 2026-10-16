const prompt = require("prompt-sync")();

let poids = prompt("Votre poids ? ");
let taille = prompt("Votre taille ? ");

poids = Number(poids);
taille = Number(taille);

console.log("Votre poids est de " + poids + " kg et votre taille est de " + taille + " m.");

let IMC = poids / (taille * taille);

console.log("Votre IMC est de " + IMC.toFixed(1));

if (IMC < 18.5) {
    resultat = "Insuffissance pondérale.";
}

else if (IMC < 25) {
    resultat = "Corpulence normale.";
}

else if (IMC < 30) {
    resultat = "Surpoids.";
}

if (IMC >= 30) {
    resultat = "Obésité.";
}
console.log(resultat);
