const ul = document.getElementById("ul");
const li = document.getElementsByClassName("li");
const ulChilds = ul.children;
for (const ulChild of ulChilds) {
  ulChild.classList.add("li");
}

for (const el of li) {
  ul.addEventListener("click", function (event) {
    if (event.target.classList[0] == "li") {
      event.target.remove();
    }
  });
}

const addButton = document.getElementById("add");
const handleAdd = () => {
  const newElement = document.createElement("li");
  newElement.innerText = "new List item added";
  newElement.classList.add("li");
  ul.appendChild(newElement);
};
addButton.addEventListener("click", handleAdd);
