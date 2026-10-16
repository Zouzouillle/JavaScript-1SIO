const prompt = require("prompt-sync")();

let age = prompt("Quel est votre âge ? ");
age = Number(age);

console.log("votre âge est de " + age + " ans");

if (isNaN(age)==true) {
    console.log("Saisie invalide. ");
}

else if (age < 18) {
    console.log("Vous êtes mineur.");
} 

else if (age < 65) {
    console.log("Vous êtes majeur.");
} 

else {
    console.log("Vous êtes senior.");
}
