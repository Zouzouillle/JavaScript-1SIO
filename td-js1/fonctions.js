//Déclarer une fonction

// function afficher (texte) {
//     console.log ("===============================") ;
//     console.log (texte);
//     console.log ("===============================") ;
// }

let texte = " un texte declaré globalement" ;
function afficher (texte, repeatChar = '-', times = 20) {
    console.log (repeatChar.repeat(times));
    console.log (texte);
    console.log (repeatChar.repeat(times));
}

function printAddition (a,b) {
    afficher (`${a} + ${b} vaut ${a+b}`);
}

let x=15;
// afficher("Hello");
// afficher("Autre texte","+");
// afficher (`x vaut ${x}`, "*",30)

printAddition(5,7);