const input = document.querySelectorAll(".input")[0];
const btn = document.querySelectorAll(".btn")[0];

const changeBg = () => {
  const r = Math.floor(Math.random() * 255).toString(16);
  const g = Math.floor(Math.random() * 255).toString(16);
  const b = Math.floor(Math.random() * 255).toString(16);
  const hexcolor = `#${r}${g}${b}`;
  document.body.style.color = `#${r}${g}${b}`;
  document.body.style.backgroundColor = `#${r}${g}${b}`;
  input.value = hexcolor;
};
btn.addEventListener("click", changeBg);
