// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target

// ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section, sert toi du button Exo1

let pSection = document.querySelector('section p');

function exo1(contenu) {
    pSection.innerHTML = contenu
};



// ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :
// - Les couleurs sont contenu dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1
// - Il faut que ces variables soient envoyés en parametre dans la function via le addEventListener.

let exo1h1 = document.querySelector('h1'); 

function exo2(couleurbg, couleurfont) {
    exo1h1.style.backgroundColor = couleurbg;
    exo1h1.style.color = couleurfont;
}

exo1h1.addEventListener('click' , function () {exo2(theBackground,theColor)})