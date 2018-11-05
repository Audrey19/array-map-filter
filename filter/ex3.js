/* Array.prototype.filter - Exercice 3

Ecrire une fonction keepStarks, qui prend en arguments un tableau de chaînes
(plus spécifiquement, des noms de personnages de Game of Thrones).

La fonction doit renvoyer un tableau ne contenant que les membres de la famille Stark.

Il y a plusieurs façons d'écrire cette fonction, et outre filter, tu auras probablement
besoin d'une de ces méthodes de String: endsWith ou split.

Exemple d'entrée:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

Sortie attendue:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']

 */
const personnage = [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

function keepStarks(names) {
const keepStarks = personnage.filter( function(string){
  return string.includes("Stark");
});
return keepStarks;
}

keepStarks(personnage);

// Ne pas modifier l'export
module.exports = keepStarks;
