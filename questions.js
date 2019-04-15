/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire. 
 */
var tailleString = function (texte) {
    return texte.length;
    
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
    //on remplace le premier e par un espace
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
    // concatenation toute simple
}
var afficherCar5 = function (texte) {
    return texte.slice(4, 5);
    // ce n'est pas str.charAt(4); mais c'est couper le character de la position 5 a 6, et parce que en js la numerotation commence de 0 il faut compter 4 pour avoir le 5
}
var afficher9Car = function (texte) {
    return texte.slice(0, 9);
     //on extrait les 9 premiers caracteres
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
    // majuscule
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
    // minuscule
}
var SupprEspaceString = function (texte) {
    return texte.trim();
    // eliminer les espaces vides avant et après le string
}
var IsString = function (texte) {
    return isNaN(texte);
    // if it's not a number, it's a string
}
var AfficherExtensionString = function (texte) {
    return texte.slice(-3);
    // on montre les dernieres quatre de string: .jpg
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
    // On utilise split pour connaitre les espace vides. Pour avoir le nombre d'espace on compte le nombre de mot - 1.
    // ce n'est pas la bonne solution!!! Il faut avoir une methode plus directe
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return 'A completer';
}
var valeurAbsolue = function (nombre) {
    return 'A completer';
}
var valeurAbsolueArray = function (array) {
    return 'A completer';
}
var sufaceCercle = function (rayon) {
    return 'A completer';
}
var hypothenuse = function (ab, ac) {
    return 'A completer';
}
var calculIMC = function (poids, taille) {
    return 'A completer';
}