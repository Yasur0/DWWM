const perm = document.querySelector('input[type="submit"]');
let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let p = "";
// console.log(typeof txt1);
// console.log(typeof txt2);

txt1.addEventListener("input", (e) => {
  console.log(e.target.value);
});

txt2.addEventListener("input", (e) => {
  console.log(e.target.value);
});

perm.addEventListener("click", (e) => {
  e.preventDefault();
  p = txt1.value;
  txt1.value = txt2.value;
  txt2.value = p;
});
