const bouttons = document.querySelectorAll(".btn");
const resultat = document.getElementById("resultat");

bouttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    resultat.textContent += e.target.id;
  });
});

egal.addEventListener("click", () => {
  resultat.textContent = eval(resultat.textContent);
});

clear.addEventListener("click", () => {
  resultat.textContent = "";
});
