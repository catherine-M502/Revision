# Javascript cheatsheet

# Table of Contents

- [Javascript cheatsheet](#javascript-cheatsheet)
- [Table of Contents](#table-of-contents)
  - [Les variables](#les-variables)
  - [Les types des variables](#les-types-des-variables)
  - [La balise script](#la-balise-script)
  - [La console](#la-console)
  - [Conditions](#conditions)
  - [Modules](#modules)
  - [Fonctions fléchées](#fonctions-fléchées)
  - [Structure de données](#structure-de-données)
    - [Collection](#collection)
    - [Les maps](#les-maps)
    - [Les sets](#les-sets)
    - [For...of](#forof)
  - [Méthodes pour tableaux](#méthodes-pour-tableaux)
  - [Manipulation du Dom](#manipulation-du-dom)
  - [Destructuration](#destructuration)
  - [Spread](#spread)
  - [Traitement asychrones](#traitement-asychrones)
  - [Noms de variable dynamique](#noms-de-variable-dynamique)
  - [Shorthand Property Names](#shorthand-property-names)
  - [Optional chaining](#optional-chaining)
    - [Nullish coalescing](#nullish-coalescing)

## Les variables

__Déclaration de variable__

- `const` permet de définir une constante, soit une variable qui ne peut être redéfinis, C'est le type de déclaration à favoriser.
- `let` permet de définir une variable qui peut être modifiée.
- `var` ancien mot clé pour déclarer une variable, ⚠️  à ne pas utiliser.

__la portée des variable (scope)__

Une variable n'est accesible que dans le scope ou elle à été déclarée.
- le scope `global` représente le plus haut niveau du fichier
- les scopes de `local` ou `block` sont délimité par `{}`

```javascript
// Cette variable est définis dans le scope global
// elle est donc accesible n'importe ou dans le code
const a = true

function printHello() {
    // Cette variable est définis dans une fonction
    // elle est donc uniquement accesible dans cette fonction
    if (a == true) {
        // Cette variable est définis dans un bloc de condition
        // elle est donc uniquement accesible dans ce bloc
        const messageBonus = 'Hello world' 
        console.log(messageBonus)
    }
    const message = 'Hello'
    console.log(message)
}
```

## Les types des variables

Le langage javascript est __faiblement typé__ ce qui signifie qu'il autorise une variable à contenir n'importe quel type de données et à en changer en cours d'éxécution.

__Les 6 types primitifs en javascript__

- boolean
- null
- number
- string
- symbol
- undefined

__Quelques exemples__

```javascript
const a = 10, b = 20, c = '5'
console.log(a+b)
// retourne 30
console.log(a+c)
// retourne 105
console.log(a-c)
// retourne 5
```

On constate que javascript est capable de faire des opérations mathématiques sur des chaînes de caractères contenant des nombres. Cependant, on ne peut pas additioner un nombre avec une chaîne de caractère car l'opérateur `+` est alors interprétét comme l'opérateur de concaténation.

📚 l'opérateur `typeof` permet de conaître le type d'une variable. On peut par exemple utiliser `console.log(typeof nomDeVariable)`

⚠️  `null` est un type mais `typeof null === object`. Il s'agit d'un reste de la première version de javascriptt 

## La balise script

```javascript 
<head>
    <script defer type="module" src="chemin/relatif/vers/le/fichier.js"></script>
</head>
```

- La balise `script` doit être placée dans la balise `head`
- L'attribut `defer` permet charger un fichier javascript seulement après le chargement de la page.
- Un fichier de module javascript peut utiliser l'extension `.mjs`, mais ce n'est pas obligatoire.
- `type="module"` permet d'utilser les `export` et les `import`

## La console

- `console.log()` Méthode standart pour afficher qqch. dans la console
- `console.dir()` Permet d'afficher les propriétés d'un objet
- `console.table()` permet une meilleur représentation d'un tableau

## Conditions

__Opérateur de comparaison__

- `==` égalité de valeur
- `===` égalité de valeur et de type
- `!=` non égalité de valeur
- `!==` non égalité de valeur et de type
- `>` plus grand que 
- `<` plus petit que
- `>=` plus grand ou égale à
- `<=` plus petit ou égale à
- `&&` et
- `||` ou
- `!` non : exemple `const x = !true` -> x = false 
 
__Condition simple__

```javascript
if (x > y) {
    console.log("supérieur à y")
}else if (x < y) {
    console.log("inférieur à y")
}else{
    console.log("x égale à y")
}
```

__Condition sur une ligne__

```javascript
if (x > y && x > z) console.log("x supérieur à y et inférieur à z")
```

__Opérateur ternaire__

```javascript
x > y ? console.log("x supérieur à y") : console.log("x inférieur à y")
const z = x > y ? true : false
```

__Valeurs évaluée comme fausse__

- `false`
- `0`
- `""`
- `null`
- `undefined`
- `NaN`

📚 A cause de ces extravagence, il est recommandé de toujours utiliser l'opérateur `===` à la place de `==`

## Modules

__Exporter un module__

- 📚 `export default` signifie que le module est importé avec son nom par défault, il n'est donc pas possible de renommer l'export.
- ⚠️  Il ne peut y avoir que un seul `export default` dans un fichier javascript.
 
```javascript
const conf = {
    'swapi' : 'https//swapi.dev/api'
}
export default conf;
```

⚠️  contrairement aux fonctions, la notation `export default conf = 'valeur'` n'est pas permise. 

```javascript
export default function afficheHello(){
    console.log('hello');
}
```

__Importer un module utilisant 'export default'__

```javascript
import conf from './conf.mjs'
```

__Export multiple__

```javascript
export fun1(){}
export fun2(){}
```

__Import multiple__

```javascript
import {fun1, fun2} from './helpers/func.mjs'
```

__Tout importer__

```javascript
import * as helpers from './helpers/func.mjs'
```

## Fonctions fléchées

```javascript
// toutes ces notations sont identiques
const add = (a, b) => a + b; 
const add2 = (a, b) => return a + b; 
const add3 = (a, b) => { return a + b }; 
const add4 = (a, b) => { a + b }; 
```

- 📚 Si la fonction ne prend que un paramètre, pas besoin des parenthèses
- 📚 Pas besoin de préciser le mot clé `return` pour retourner quelquechose.
- 📚 Si la fonction tient sur une ligne, on peut omettre les `{}`

## Structure de données

__Cloner un tableau__

```javascript
const array = [0,1,2,3];
const clone = [...array];
```

__Parcourir une structure__

```javascript
function cl(...arr){
    for (const value of arr){
        console.log(arr);
    }
}
```

### Collection

Une collection, comme dans java est un tableau d'objet

```javascript
const collection = [{radius: 7, x:0, y:0}];
```

### Les maps

Aussi appelé tableau associatif ou table de hashage. Une map peut utiliser n'importe quoi comme clé ou comme valeur.

```javascript
const domTitle = document.querySelector('h1')
const m = new Map()
//mettre des données dans une map
m.set( 'swapi', 'https//swapi.dev/api')
m.set( domTitle, {metadata1: 'test'})
//récupérer des données sur une map
console.log(m.get(domTitle))
```

### Les sets

Cette structure de données permet de stocker des valeurs unique de tout types.

```javascript
const mySet1 = new Set()
mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
mySet1.has(1)           // true
mySet1.has(3)           // false, since 3 has not been added to the set
mySet1.has(5)           // true
mySet1.size             // 5
mySet1.delete(5)        // removes 5 from the set
```

### For...of

Le `for...of` est une façon facile d'itérer sur une structure de données.

```javascript
let fruits = [ 'apple', 'pear' ];
for (let fruit of fruits) {
  console.log('fruit: ' + fruit);
}
```

__Facon alternative d'itérer sur un objet__

```javascript
let person = { firstname: 'John', lastname: 'Doe' }
// méthode 1
Object.entries(person).forEach(entry => {
  const [key, value] = entry;
  console.log(key, value);
});

// méthode 2
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```

📚 On peut aussi utiliser `Object.values()` pour itérer sur les valeurs d'un objet ou `Object.keys()` pour itérer sur les clés d'un objet.

## Méthodes pour tableaux

__concat()__

Retourne un nouveau tableau constitué de la fusion entre le tableau sur lesquel elle s'applique et le tabelaux passé en paramètre.

_Exemple_

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// output: Array ["a", "b", "c", "d", "e", "f"]
```

__every()__

Test si l'ensemble des éléments du tableau vérifie la conditions passé par la fonction de callback.

_Exemple_

```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// output: true
```

__map()__

La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

_Exemple_

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// output: Array [2, 8, 18, 32]
```

__filter()__

Crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction de callback.

_Exemple_

Créer une nouvelle liste où tous les éléments dont la valeur est inférieure à 10 ont été retirés.
```javascript
function suffisammentGrand(element) {
  return element >= 10;
}
var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand);
// filtre vaut [12, 130, 44]
```

__forEach()__

Execute un fonction fournis pour chaque éléments du tableau

_Exemple_

```javascript
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
```

__slice()__

Renvoie un objet tableau, contenant une copie superficielle d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.

_Exemple_

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// output: Array ["camel", "duck"]
```

__sort()__

Trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.

_Exemple_

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: Array ["Dec", "Feb", "Jan", "March"]
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// output: Array [1, 100000, 21, 30, 4]
```

__some()__

Teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.

_Exemple_

```javascript
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// output: true
```

__indexOf()__

La méthode `indexOf()` renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.

_Exemple_

```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// output: 1
```
__lastIndexOf()__

La méthode `lastIndexOf()` permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau. Si la valeur recherchée n'est pas présente, le résultat sera -1. Lors de la recherche, le tableau est parcouru dans le sens des index décroissants, à partir de l'index indexDébut.

_Exemple_

```javascript
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// output: 3
```

__reduce()__

Applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.

_Exemple_

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer));
// output: 10
```

## Manipulation du Dom

__QuerySelector et QuerySelectorAll__

les méthodes `querySelector` et `querySelectorAll` de `document` permettent de séléctionner des éléments html du DOM afin de manipuler les dits éléments.

la syntaxe est la suivante: `noeudHtml.querySelecor('sélécteur css valid')` ou `noeudHtml.querySelectorAll('sélécteur css valid')` pour récupérer toutes les éléments qui match le sélécteur css en question.

```javascript
const forms = document.querySelectorAll('form')
const premier_input = forms[0].querySelector('input')
```

__EventListener__

La méthode `addEventListener` permet d'attacher un écouteur d'élément sur un noeud html. la syntaxe est la suivante: `noeudHtml.addEventListener("nom de l'événement", callback`

_Exemple_

```javascript
// cette exemple ajoute la classe css 'clicked'
// sur chaque boutons clické

const buttons = document.querySelectorAll('button')
buttons.forEach(button, () => {
    button.addEventListener('click' (event) => {
        event.target.classlist.add('clicked')
    }
}
```

__Ajouter/retirer des classes CSS__

```javascript
const header = document.querySelector('header')
// ajoute la class 'active' sur l'élément header
header.classlist.add('active')
// ajoute la classe 'active' sur l'élément header si celui-ci
// n'est pas déjà présent, sinon retire la classe 'active'
header.classlist.toggle('active')
// supprime la class 'active' sur l'élément header
header.classlist.remove('active')
```

__Cloner un élément HTML__

```javascript
const header__clone = header.cloneNode(true);
```

📚 le paramètre optionnel `true` permet de cloner également les enfants de l'élément concerné.

__Ajouter un enfant à un noeud HTML__

```javascript
noeud_html_parent.append(noeud_html_enfant)
```
__Créer un élément HTML__

```javascript
const nouveau_paragraphe = document.createElement('p')
```

⚠️  Ne pas oublier d'utiliser la méthode `append` pour ajouter l'élément nouvellement crée au DOM.

## Destructuration

La destrucuration est une façon d'assigner rapidement plusieurs variables à partir d'un objet ou d'un tableau

__Destructuration avec objet__

```javascript
const friend = {name: 'Sam', age: 15, is_majeur: false};
const {name, age, is_majeur} = friend;
console.log(name); //output: Sam
```

__Destructuration avec alias__

```javascript
const friend = {name: 'Sam', age: 15, is_majeur: false};
const {name: friendName, age: friendAge, is_majeur} = friend;
```

__Destructuration avec tableau__

Les valeurs peuvent être sautées en laissant la syntaxe de déstructuration vide entre les virgules

```javascript
const[age1, age2, ,...ageN] = [45 ,23 ,14 ,23 ,22];
console.log(age1); //output: 45
console.log(ageN); //output: [14, 23, 22]
```

__Destructuration avec fonction flechée__

```javascript
const heroes = [
  { name: 'Batman' },
  { name: 'Joker' }
];
const names = heroes.map(
  function({ name }) {
    return name;
  }
);
console.log(names); //output: ['Batman', 'Joker']
```

__Déstructurer les paramètres d'une fonction__

```javascript
const note = {id: 1, title: 'My first note', date: '01/01/1970'};
// Using forEach
Object.entries(note).forEach(([key, value]) => {
  console.log(`${key}: ${value}`)
})
// Using a for loop
for (let [key, value] of Object.entries(note)) {
  console.log(`${key}: ${value}`)
}
```

__Déstructurer un objet passé en paramètre__

```javascript
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"
```
__Inverser deux valeur avec la destrucuration__

```javascript
[value.nom, value.prenom] = [value.prenom, value.nom]
```

__Appeler une fonction avec des paramètres par défaults__

on va passer une objet comme paramètre de la fonction et déstructurer l'objet
grâce au `= ()` on peut se permettre de ne passer aucuns paramètres à la fonction

```javascript
function randomInt({min = 1, max} = () ) {}
randomInt({max: 6});
```

## Spread

La syntaxe Spread `(...)` est un autre ajout utile au JavaScript pour travailler avec des tableaux, des objets et des appels de fonction. Spread permet de déballer ou d'étendre des objets et des itérables (tels que des tableaux), qui peuvent être utilisés pour faire des copies superficielles de structures de données afin d'accroître la facilité de manipulation des données.

__Concaténer deux tableaux__

```javascript
const tools = ['hammer', 'screwdriver'];
const otherTools = ['wrench', 'saw'];
const allTools = [...tools, ...otherTools];
```

__Copier un tableau__

```javascript
const originalArray = ['one', 'two', 'three'];
const secondArray = [...originalArray];
```

__Copier un objet__

```javascript
const originalObject = { enabled: true, darkMode: false };
const secondObject = { ...originalObject };
```

__Spread avec des appels de fonctions__

Si toutes les valeurs que vous voulez passer à la fonction existent déjà dans un tableau, la syntaxe de spread vous permet d'utiliser chaque élément d'un tableau comme argument

```javascript
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);
```

## Traitement asychrones

__Fetch: récupérer des données depuis un URL__

```javascript
fetch('<url>')
    .then(response => response.text());
    .then(txt => console.logo(txt));
```

__Assigner le retour de fetch à une variable__

fetch précédé de `await` permet d'assigner le retour de fetch à une variable
```javascript
const response await fetch('<url>');
```

__Await__

le mot clé `await` signifie que le code suivant ne sera pas exécuté tant que l'opération courante n'aura pas aboutie. Il ne peut être utilisée que dans une fonction asynchrone.

Lorsque le mot clé `await` est utilisé dans une fonction, il est nécessaire de précéder la fonction du mot clé `async`. Le mot clé `async` signifie également que la fonction ne va pas tout de suite retourner un résultat. 

```javascript
async function load() {}
```

## Noms de variable dynamique

```javascript
let cake = '🍰';

// ❌ Old way requires 2 steps
let pan = {
  id: 1,
};
pan[cake] = '🥞';

// ✅ YAY, much easier with ES6
let pan = {
  id: 1,
  [cake]: '🥞',
};
```

__3 facons d'accéder aux propriété d'un objet__

```javascript
let me = {
  name: 'samantha',
};

// 1. Dot notation
me.name; // samantha

// 2. Bracket notation (string key)
me['name']; // samantha

// 3. Bracket notation (variable key)
let key = 'name';
me[key]; // samantha
```

## Shorthand Property Names

Lorsque une variable est nommé identiquement à une méthode ou propriété d'un objet, au moment de construire l'objet, on peut omettre le nom de la méhtode ou de la propriété

__Exemple__

```javascript
// Ceci
function formatMessage (name, id, avatar) {
  return {
    name: name,
    id: id,
    avatar: avatar,
    timestamp: Date.now()
     save: function () {
      // save message
    }
  }
}
// peut devenir cela
function formatMessage (name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now()
    save () {
      //save message
    }
  }
}
```

## Optional chaining

_L'opérateur de chaînage optionnel_ `?.` permet de lire la valeur d'une propriété située profondément dans une chaîne d'objets connectés sans avoir à valider expressément que chaque référence dans la chaîne est valide.

L'opérateur `?.` fonctionne de manière similaire à l'opérateur de chaînage `.`, à ceci près qu'au lieu de causer une erreur si une référence est _null_ ou _undefined_.

l'expression se court-circuite avec _undefined_ pour valeur de retour. Quand il est utilisé avec des appels de fonctions, il retourne _undefined_ si la fonction donnée n'existe pas.

__Exemple__

```javascript
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// output: undefined
console.log(adventurer.someNonExistentMethod?.());
// output: undefined
```

### Nullish coalescing

L'Opérateur de coalescence des nuls (Nullish coalescing operator) peut être utilisé après un chaînage optionnel afin de construire une valeur par défaut quand aucune n'a été trouvée

__Exemple__

```javascript
let customer = {
  name: "Carl",
  details: { age: 82 }
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```

