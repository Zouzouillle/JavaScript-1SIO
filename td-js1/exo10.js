const prompt = require('prompt-sync')();

let total = 0;
let max = 0;
for (let n=1; n<6; n++) {
    const note = Number(prompt("Entrez la note " + n + " : "));
    total += note;
    //sert a rien --> note > max;
    if (note > max) {    
        max = note;
        console.log(max);
    }
}

let moyenne = total / 5;
console.log("moyenne = " + moyenne.toFixed(2));
console.log(max);



if (total>=10) {
console.log ("Admis");
}

else {
    ("Refusé");
}

