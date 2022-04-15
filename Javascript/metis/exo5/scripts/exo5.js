let caract = prompt(
  "Entrez un nombre ou un caractère que vous voulez afficher"
);
let rows = parseFloat(
  prompt("Entrez le nombre de lignes que vous voulez afficher")
);

for (let i = 0; i < rows; i++) {
  for (let j = 0; j <= i; j++) {
    document.write(caract);
  }
  document.write("<br/>");
}
