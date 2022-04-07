let nombre1 = prompt("Entrez le premier nombre");
nombre1 = parseFloat(nombre1);
console.log(nombre1);
console.log(typeof nombre1);

let nombre2 = prompt("Entrez le deuxième nombre");
nombre2 = parseFloat(nombre2);
console.log(nombre2);
console.log(typeof nombre2);

alert(`L'addition entre ${nombre1} et ${nombre2} = ${nombre1 + nombre2}`);

alert(`La soustracton entre ${nombre1} et ${nombre2} = ${nombre1 - nombre2}`);

alert(
  `La multiplication entre ${nombre1} et ${nombre2} = ${nombre1 * nombre2}`
);

alert(`La division entre ${nombre1} et ${nombre2} = ${nombre1 / nombre2}`);
