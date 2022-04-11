let nb;

function nbRandom(min, max) {
  let nb = min + (max - min + 1) * Math.random();
  return Math.floor(nb);
}

let test = nbRandom(0, 100);
console.log(test);

nombre = prompt("Entrez un nombre à deviner");
nombre = parseFloat(nombre);

while (nombre !== test) {
  if (nombre < test) {
    document.write("La valeure à trouver est plus grande");
    nombre = prompt("Veuillez réessayer");
    nombre = parseFloat(nombre);
  } else {
    document.write("La valeure à trouver est plus petite");
    nombre = prompt("Veuillez réessayer");
    nombre = parseFloat(nombre);
  }
}
