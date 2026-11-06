const prompt = require ("prompt-sync") () ;

function estMajeur (age) {
        if (age >= 18) {
        return true;
    } else {
        return false;
    }

}

 
age = Number (prompt("Quel âge avez-vous ?")) ;

if (estMajeur(age)) {
    console.log ("Accès autorisé");
} else {
    console.log ("Accès refusé");
}

function estPair(n) {
    return n % 2 == 0;
}

for (let n = 1; n <= 20; n++) {
    if (estPair(n)== true) {
    console.log (n);
}
}

// expliation for (let i= 1; i <= 20; i++) peut etre traduit par tant que i inferieur ou égal à 20, on fait i + 1 à chaque fois. Donc on va de 1 à 20. et a chaque itération il execute ce que contient les accolades. Donc on va tester si i est pair, si oui on l'affiche.
// avec i = 1 en valeur initiale i + 1 à chaque itération, donc i = 1, 2, 3, 4, 5 ... jusqu'à 20. Donc on va tester si i est pair, si oui on l'affiche. Donc on va afficher tous les nombres pairs de 1 à 20.