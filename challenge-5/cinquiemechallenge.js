

const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);

//test

//réalisez les fonctionnalités ci-dessous.
//La structure de données initiale ne doit pas être modifiée ( structure immutable ).
//Vos solutions se doivent de rester fonctionnelles même si le tableau initial diffère.


//1. Afficher tous les nombres dans la console

console.log("Afficher tous les nombres dans la console");
console.log(numbers);


//2. Retourner un tableau avec les valeurs doublées

// Moi : La méthode Object.freeze() permet de geler un objet, c'est-à-dire qu'on empêche d'ajouter de nouvelles propriétés, de supprimer ou d'éditer des propriétés existantes, y compris en ce qui concerne leur caractère énumérable, configurable ou pour l'accès en écriture. L'objet devient ainsi immuable. La méthode renvoie l'objet ainsi « gelé ».

console.log("Retourner un tableau avec les valeurs doublées");

const nbDouble = numbers.map(nb => nb * 2);
console.log(nbDouble);

//3. Retourner un tableau ne contenant que les valeurs impairs

console.log("Retourner un tableau ne contenant que les valeurs impairs");

const odd = numbers.filter(n => n % 2)

console.log(odd);


//4. Retourner un tableau ne contenant pas le premier élément

console.log("Retourner un tableau ne contenant pas le premier élément");
const notFirstOne = numbers.slice(1);
console.log(notFirstOne);



//5. Retourner un tableau ne contenant pas le dernier élément

console.log("Retourner un tableau ne contenant pas le dernier élément");
const notLastone = numbers.slice(0, -1); 
console.log(notLastone);

//moi : méthode destrctive trouvée sur internet : .pop()

//6. Retourner la somme des nombres


console.log("Retourner la somme des nombres");
const sum = numbers.reduce((acc, nb) => acc += nb);
console.log(sum);

//moi :
//const initialValue = 0;
//const sumWithInitial = numbers.reduce(
  //(previousValue, currentValue) => previousValue + currentValue,
  //initialValue
//);

//console.log(sumWithInitial);


//7. Retourner le plus grand nombre

console.log("Retourner le plus grand nombre");
const max = Math.max(...numbers);
console.log(max);


//8. Indiquer si le tableau contient au moins un nombre multiple de 9


console.log("Indiquer si le tableau contient au moins un nombre multiple de 9");
const hasMulOf9 = numbers.some(nb => nb % 9 === 0);
console.log(hasMulOf9);



//9. Indiquer si le tableau ne contient que des nombres positifs


console.log("Indiquer si le tableau ne contient que des nombres positifs");
const hasOnlyPositiv = numbers.every(nb => nb >= 0);
console.log(hasOnlyPositiv);


//10. Retourner un tableau contenant les nombres pairs dans les premiers indices et les nombres impairs dans les indices restants

console.log("Retourner un tableau contenant les nombres pairs dans les premiers indices");
console.log(" et les nombres impairs dans les indices restants");
const even = numbers.filter(nb => nb % 2 === 0); 
const evenOdd = [...even, ...odd];
console.log(evenOdd);

//11. Retourner un tableau ordonné du plus petit au plus grand nombre

//ce qu'a fait caroline
console.log("Retourner un tableau ordonné du plus petit au plus grand nombre");
let cpyArray = numbers.slice();
cpyArray.sort(function (a,b){
  return a-b;

});

console.log(cpyArray);

//12. Retourner un tableau ordonné du plus grand au plus petit nombre

//ce qu'a fait caroline 

console.log("Retourner un tableau ordonné du plus grand au plus petit nombre");
console.log(cpyArray.reverse());


//Tableau de strings

const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);


//Réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée.

//1. Retourner tous les mots contenant au moins un **r**

console.log("Retourner tous les mots contenant au moins un r");
const wordWithRmin = strings.filter(word => word.indexOf("r") != -1);
const wordWithRmaj = strings.filter(word => word.indexOf("R") != -1);
const wordWithR = [...wordWithRmin, ...wordWithRmaj];
console.log(wordWithR);


//2. Indiquer si tous les mots font 5 lettres

console.log("Indiquer si tous les mots font 5 lettres");
const isEveryWords5letters = strings.every((word) => word.length == 5);
console.log(isEveryWords5letters);



//3. Retourner un tableau avec un mot de plus en début du tableau

console.log("Retourner un tableau avec un mot de plus en début du tableau");
const addWordBefore = ["first", ...strings];
console.log(addWordBefore);

//4. Retourner un tableau avec un mot de plus en fin de tableau

console.log("Retourner un tableau avec un mot de plus en fin de tableau");
const addWordAfter = [...strings, "last"];
console.log(addWordAfter);


//5. Retourner un tableau en remplaçant le mot du milieu par le mot **radar** (si le tableau à un nombre de mots pair, remplacer le mot qui se situe à l'indice juste avant le milieu)

console.log("Retourner un tableau en remplaçant le mot du milieu par le mot radar (si le tableau à un nombre de mots pair, remplacer le mot qui se situe à l'indice juste avant le milieu)");
const middle = Math.round(strings.length/2);
const replaceMiddle =[...strings.slice(0, middle-1), "radar", ...strings.slice(middle)];
console.log(replaceMiddle);


//6. Retourner la concaténation de tous les mots

console.log("Retourner la concaténation de tous les mots");
const concat = strings.join("");
console.log(concat);


//7. Retourner le mot qui vient en premier selon l'ordre alphabétique ([localeCompare](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare) peut être utile)

console.log("Retourner le mot qui vient en premier selon l'ordre alphabétique");

const firstByAlpha = [...strings].sort((w1, w2) => w1.localeCompare(w2)).shift();
console.log(firstByAlpha);

//autre correction prof

const sortedStrings = strings.slice().sort().shift()

console.log(sortedStrings);

//8. Indiquer si les chaines du tableau forment un palindrome (si elle sont lues dans l'ordre des indices du tableau).

console.log("Indiquer si les chaines du tableau forment un palindrome (si elles sont lues dans l'ordre des indices du tableau).");
const isPalindrome = str => {
  const upperCase = str.toUpperCase();  
  const reversed = upperCase.split("").reverse().join("");
  return upperCase === reversed;
}
console.log(isPalindrome(concat));

//Tableau d’objets

//A partir du tableau représentant des cercles dans un plan suivant:

const circles = Object.freeze([
    {x: 20, y: 10 , r: 10, color: "red"},
    {x: 10, y: 10 , r: 20, color: "green"},
    {x: 30, y: 25 , r: 15, color: "blue"},
    {x: 10, y:5 , r: 5, color: "red"}
  ]);
  circles.forEach(Object.freeze);



//Réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée.


//1. Retourner toutes les aires des cercles



console.log(circles);



console.log("Retourner toutes les aires des cercles");
const surfaces = circles.map(c => Math.PI * c.r * c.r); 
console.log(surfaces);



//2. Retourner tous les cercles de couleur rouge

console.log("Retourner tous les cercles de couleur rouge");
const redOnes = circles.filter(c => c.color === "red");
console.log(redOnes); 


//3. Retourner tous les centres des cercles

console.log("Retourner tous les centres des cercles");
const centers = circles.map(c => ({x: c.x, y: c.y}));
console.log(centers);


//4. Retourner tous les cercles en opérant une translation de 10 unités sur l'axe des abscisses

console.log("Retourner tous les cercles en opérant une translation de 10 unités sur l'axe des abscisses");
const clones = circles.map(c => {
  const clone = {...c};
  clone.x += 10;
  return clone;
});
// version sur une ligne:
//let clones = circles.map(c => ({x: c.x + 10, y: c.y, r: c.r, color: c.color}));
console.log(clones);