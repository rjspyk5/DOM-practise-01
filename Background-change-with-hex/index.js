const input = document.querySelectorAll(".input")[0];
const btn = document.querySelectorAll(".btn")[0];
const copy = document.querySelectorAll(".copy")[0];
const parent = document.querySelectorAll(".parent")[0];

const genarateTextMessage = () => {
  const div = document.createElement("div");
  div.style.position = "fixed";
  div.style.top = "30%";
  div.style.left = "47%";

  div.innerText = "Text copied";
  document.body.appendChild(div);
};

const copyText = () => {
  navigator.clipboard.writeText(`${input.value}`);
  genarateTextMessage();
};

const changeBg = () => {
  const r = Math.floor(Math.random() * 255).toString(16);
  const g = Math.floor(Math.random() * 255).toString(16);
  const b = Math.floor(Math.random() * 255).toString(16);
  const hexcolor = `#${r}${g}${b}`;
  document.body.style.backgroundColor = `#${r}${g}${b}`;
  input.value = hexcolor;
};

btn.addEventListener("click", changeBg);
copy.addEventListener("click", copyText);
