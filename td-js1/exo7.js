const prompt = require("prompt-sync")();

let age = prompt ("Votre âge ? ");
let date = prompt ("Quel jour sommes-nous ? ");

console.log (`Vous avez ${age} ans et nous sommes ${date}.`);

if (date == "mercredi") {
    console.log("6 €")
}

else if (age < 12) {
    console.log("5 €");
}

else if (age >= 12 && age <= 25) {
    console.log("7 €");
}

else {
    console.log("10 €");
}