const button = document.getElementById("delete");
const inputField = document.getElementById("input");

const handleButton = () => {
  const delteText = document.getElementById("deleteText");
  delteText.style.display = "none";
};

const handleInputField = (event) => {
  if (event.target.value === "delete") {
    button.removeAttribute("disabled");
  }
  if (event.target.value !== "delete") {
    button.setAttribute("disabled", true);
  }
};

inputField.addEventListener("keyup", handleInputField);
button.addEventListener("click", handleButton);
