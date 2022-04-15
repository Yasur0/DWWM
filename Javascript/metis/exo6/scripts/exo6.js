const btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.bgColor = "#565656";
});
