//  ------------------ VARIABLES ----------------------

const inputMin = document.getElementById("min");
const inputMax = document.getElementById("max");
const valid = document.getElementById("valid");
let interval;
let mini = "";
let maxi = "";

// -------------------- TEST VARIABLES ---------------------

// console.log(valid);
// console.log(inputMin);
// console.log(inputMax);

// -------------------- FONCTION RANDOM --------------------

function nbRandom(min, max) {
  let nb = min + (max - min + 1) * Math.random();
  return Math.floor(nb);
}

// ------------------- SELECTION INTERVALLE ---------------

inputMin.addEventListener("input", (e) => {
  mini = e.target.value;
  console.log(mini);
  mini = parseFloat(mini);
  console.log(typeof mini);
});
inputMax.addEventListener("input", (e) => {
  maxi = e.target.value;
  console.log(maxi);
  maxi = parseFloat(maxi);
  console.log(typeof maxi);
});
valid.addEventListener("click", () => {
  if (mini != "" && maxi != "" && mini < maxi) {
    interval = nbRandom(mini, maxi);
    console.log(interval);
    console.log(mini);
    console.log(typeof mini);
    document.querySelector("div#test").innerHTML = `
    <p>Un nombre aléatoire a été choisi</p>
    `;
  } else {
    alert("Vous devez choisir une intervalle valide avant de continuer");
  }
});

// let nombre;
// let tentatives;
// tentatives = 0;

// let min = prompt("Entrez le minimum de l'intervalle de la valeur");
// min = parseFloat(min);
// let max = prompt("Entrez le maximum de l'intervalle de la valeur");
// max = parseFloat(max);

// // Nombre à deviner aléatoire

// let nbDev = nbRandom(min, max);
// console.log(nbDev);

// nombre = prompt("Entrez un nombre à deviner");
// tentatives++;
// nombre = parseFloat(nombre);
// while (nombre !== nbDev) {
//   if (nombre < nbDev) {
//     alert("La valeur à trouver est plus grande");
//     nombre = prompt("Veuillez réessayer");
//     nombre = parseFloat(nombre);
//     tentatives++;
//   } else {
//     alert("La valeur à trouver est plus petite");
//     nombre = prompt("Veuillez réessayer");
//     nombre = parseFloat(nombre);
//     tentatives++;
//   }
// }

// if (nombre === nbDev) {
//   alert(`Bravo vous avez trouvé le nombre en ${tentatives} tentatives !`);
// }
