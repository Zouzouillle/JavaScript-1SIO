// document.write("Hello");
// console.log("Hello world!");

//selector peut valoir = 
//  h1-> ous les éléments h1
//  #id -> éléments d'id id
//  .css -> éléments de classe css

//document.querySelectorAll sert à sélectionner tous les éléments correspondant au sélecteur CSS passé en paramètre. Il retourne une NodeList de tous les éléments correspondants.
//document.querySelector sert à sélectionner le premier élément correspondant au sélecteur CSS passé en paramètre. Il retourne le premier élément correspondant.
//addEventListener sert à ajouter un écouteur d'événement à un élément. Il prend en paramètre le type d'événement et une fonction de rappel qui sera exécutée lorsque l'événement se produira.
//forEach est une méthode qui permet d'exécuter une fonction pour chaque élément d'un tableau ou d'une NodeList. Elle prend en paramètre une fonction de rappel qui sera exécutée pour chaque élément, avec l'élément courant passé en paramètre.
//elm est un paramètre de la fonction de rappel passé à forEach. Il représente l'élément courant de la NodeList sur lequel la fonction est exécutée. On peut accéder aux propriétés et méthodes de cet élément en utilisant elm.


function onClick(elmSelector, callback) {
    const elms=document.querySelectorAll(elmSelector);
    elms.forEach (elm=>elm.addEventListener('click',callback));
}

const h1Elements=document.querySelectorAll("h1");

// document.querySelector("button").addEventListener('click',
// ()=>{h1Elements.forEach(elm=>elm.style.color="pink")}
// ); PEUT ETR REMPLACER PAR -->

onClick("button",()=>{
    const color=document.querySelector("#color").value || "blue";
    h1Elements.forEach(elm=>elm.style.color=color)});


console.log(h1Elements);