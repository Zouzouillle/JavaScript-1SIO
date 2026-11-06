const prompt = require ("prompt-sync") () ;

//Déclarer une variable
let b = Number (prompt("saisir une valeur : ")) ;

// Poser une condition 
if(b>0) {
    //Executer si condition vraie
    console.log ("b positif");
} else {
    //Condition fausse
    console.log ("b négatif ou null") ;
}

// Effectuer une itération (plusieurs fois)

//Itération de 0 jusqu'à b-1, par pas de 1
for(let i=0 ; i<b ; i++) {
    console.log(i);
}