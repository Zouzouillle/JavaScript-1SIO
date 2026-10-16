const prompt = require("prompt-sync")();

const choix = ["pierre", "feuille", "ciseaux"];
const ordi = choix[Math.floor(Math.random() * 3)];

for (let i = 0; i < choix.length; i++) {
    console.log(i + 1, "-", choix[i]);
}

let choixJoueurNum = Number(prompt("Choisissez un chiffre entre 1 et 3 : "));
let choixJoueur = choix[choixJoueurNum - 1];

while (!choix.includes(choixJoueur)) {
    console.log("Choix invalide !");
    choixJoueurNum = Number(prompt("Choisissez un chiffre entre 1 et 3 : "));
    choixJoueur = choix[choixJoueurNum - 1];
}

console.log(`Vous : ${choixJoueur} / ordinateur : ${ordi}`);

if (choixJoueur === ordi) {
    console.log("Égalité !");
}
else if (choixJoueur === "pierre" && ordi === "ciseaux" ||
         choixJoueur === "feuille" && ordi === "pierre" ||
         choixJoueur === "ciseaux" && ordi === "feuille") {
    console.log("Vous avez gagné !");
}
else {
    console.log("Vous avez perdu !");
}