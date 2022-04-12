let nombre;
let tentatives;
tentatives = 0;

let min = prompt("Entrez le minimum de l'intervalle de la valeure");
min = parseFloat(min);
let max = prompt("Entrez le maximum de l'intervalle de la valeure");
max = parseFloat(max);

// Nombre à deviner aléatoire
function nbRandom(min, max) {
  let nb = min + (max - min + 1) * Math.random();
  return Math.floor(nb);
}

let nbDev = nbRandom(min, max);
console.log(nbDev);

nombre = prompt("Entrez un nombre à deviner");
tentatives++;
nombre = parseFloat(nombre);
while (nombre !== nbDev) {
  if (nombre < nbDev) {
    alert("La valeure à trouver est plus grande");
    nombre = prompt("Veuillez réessayer");
    nombre = parseFloat(nombre);
    tentatives++;
  } else {
    alert("La valeure à trouver est plus petite");
    nombre = prompt("Veuillez réessayer");
    nombre = parseFloat(nombre);
    tentatives++;
  }
}

if (nombre === nbDev) {
  alert(`Bravo vous avez trouvé le nombre en ${tentatives} tentatives !`);
}
