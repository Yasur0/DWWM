let nombre1;
let nombre2;

nombre1 = prompt("Entrez le premier nombre");
nombre2 = prompt("Entrez le deuxième nombre");
nombre1 = parseFloat(nombre1);
nombre2 = parseFloat(nombre2);

if (nombre1 == nombre2) {
  alert(`Les nombres ${nombre1} et ${nombre2} sont égaux`);
} else {
  alert(`Les nombres ${nombre1} et ${nombre2} ne sont pas égaux`);
}
