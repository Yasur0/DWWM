let caractere;
let ligne;

caractere = prompt("Entrez un nombre ou un caractère à afficher");

console.log(caractere);
console.log(typeof caractere);

ligne = prompt("Entrez le nombre de lignes à afficher");

console.log(ligne);
ligne = parseFloat(ligne);
console.log(typeof ligne);

for (let i = 0; i < ligne; i++) {
  document.write(caractere + "<br />");
}
