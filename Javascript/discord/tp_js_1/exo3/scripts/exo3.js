let nombre = prompt("Entrez un nombre");
nombre = parseFloat(nombre);
for (let i = 0; i < 13; i++) {
  document.write(`${i} x ${nombre} = ${i * nombre} <br />`);
}
