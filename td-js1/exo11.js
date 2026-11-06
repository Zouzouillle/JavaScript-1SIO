const prompt = require("prompt-sync")();


const secret = Math.floor(Math.random() * 100) + 1;


let essai = 0;
let joueur = prompt("Trouvez le nombre secret (entre 1 et 100) ");




while (joueur != secret && essai <7) {


    if (joueur < secret) {
        console.log("Trop petit");
    } else {
        console.log("Trop grand");
    }


    essai = essai + 1;
    joueur = prompt("Trouvez le nombre secret à nouveau (entre 1 et 100) ");
   
}


if (essai >= 7) {
    console.log("Perdu, le nombre était "+secret);
} else {
    console.log("Bravo, tu as trouvé en "+ essai +" essais");
}
