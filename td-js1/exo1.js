const prompt = require("prompt-sync")();

const prenom = prompt("Votre prénom ? ");
const age = prompt("Votre âge ? ");
const ville = prompt("Votre ville ? ");
console.log("Je m'appelle " + prenom + ", j'ai " + age + " ans et j'habite à " + ville + ".");
