let play = true; //tant qu'on joue, on peut cliquer sur les bouton

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//On déclare le tableau

// let myLetter = "d";
// myLetter = myLetter.toUpperCase();
// let myKey = <button id="myKey${myLetter}">${myLetter}</button>; // on va creer un element Button et pour appeler une variable a l'interieur de magic quote on utilise la syntaxe ${}
// console.log(myKey)
// const myKeyboard = document.getElementById("myKeyboard");
// myKeyboard.innerHTML += (myKey); // on fait += pour rajouter a l'interieur sans ecraser ce qui est deja a l'interieur

// Dans un premier temps on ecrit comme ci-dessus, puis quand ca marche, on fait la boucle ci-dessous et on peut supprimer au-dessus
// const myKeyboard = document.getElementById("myKeyboard");

//Faire une boucle pour dupliquer les boutons
const myKeyboard = document.getElementById("myKeyboard");
const petlist = [
  "crevette",
  "pinguoin",
  "ecureuil",
  "babouin",
  "galinette",
  "sanglier",
];
// console.log(petlist[3]);

let pet = petlist[aleaNb(0, petlist.length)];
// console.log(pet); // console log pour tricher

// let myLetter = "c";
// let myIndex = 2;
// let myCase = `<div id="indexLetter${myIndex}" class="myLetter border border-dark col-lg-1 col-1 rounded text-center">${myLetter}</div>`;
// petName.innerHTML += myCase;
const arrayPet = pet.split("");
console.log(arrayPet);

arrayPet.forEach((element, index) => {
  // let myLetter = element.toUpperCase();
  let myIndex = index;
  let myCase = `<div id="indexLetter${myIndex}" class="myLetter border border-dark col-lg-1 col-1 rounded text-center">_ </div>`;
  petName.innerHTML += myCase;
});

//element correspont aux valeur du tableau
alphabet.forEach((element) => {
  let myKey = element; //on creer une variable pour l'inserer dans myKey
  // myLetter = "e"; // myLetter à maintenant "e" comme valeur
  myKey = myKey.toUpperCase(); //on transforme le minuscule en majuscule
  let myKeyButton = `<button class="m-2 btn btn-outline-primary col-2" id="myKey${myKey}">${myKey}</button>`; //on a copier l'element qu'on veut dupliquer <button...</button>
  myKeyboard.innerHTML += myKeyButton;
});

function aleaNb(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(aleaNb(0, petlist.length));

// -----------------------------------------------------------------------------------
// pet = pet.split("");
// console.log(pet);
//
// const myKeyboard2 = document.getElementById("petName");
// pet.forEach((element) => {
//   let myLetter2 = element;
//   myLetter2 = myLetter2.toUpperCase();
//   let myKey2 = `<span class="m-2 border border-danger bg-dark text-white" id="myKey2">${myLetter2}</span>`;
//   myKeyboard2.innerHTML += myKey2;
// });
// --------------------------------------------------------------------------

let nbLetter = 0;
let life = 8;

myKeyboard.addEventListener("click", (e) => {
  //au click on recupere l'evenement
  // console.log(e.target.nodeName); //on cible sur toute la div les elements
  if (e.target.nodeName == "BUTTON" && play === true) {
    let myScore = nbLetter;
    // Si e.target.nodename est egale a boutton
    // console.log(e.target.textContent); //textContent affiche le contenu du boutton
    e.target.className = "m-2 btn btn-primary col-2";
    e.target.disabled = true;

    arrayPet.forEach((element, index) => {
      if (e.target.innerText.toLowerCase() == element) {
        document.getElementById(`indexLetter${index}`).innerText = element;
        nbLetter++;
      }
    });
    console.log(life);

    if (nbLetter == arrayPet.length) {
      if (confirm("WIN, WANNA PLAY AGAIN ?")) {
        location.reload();
      }
      play = false;
    }

    if (myScore == nbLetter) {
      life--;
    }

    switch (life) {
      case 0:
        if (confirm("LOOSE, WANNA PLAY AGAIN ?")) {
          location.reload();
        }
        play = false;
        break;

      case 7:
        document.getElementById("myLife").innerHTML = "|||||||";
        break;
      case 6:
        document.getElementById("myLife").innerHTML = "||||||";
        break;
      case 5:
        document.getElementById("myLife").innerHTML = "|||||";
        break;
      case 4:
        document.getElementById("myLife").innerHTML = "||||";
        break;
      case 3:
        document.getElementById("myLife").innerHTML = "|||";
        break;
      case 2:
        document.getElementById("myLife").innerHTML = "||";
        break;
      case 1:
        document.getElementById("myLife").innerHTML = "|";
        break;
    }
  }
});
