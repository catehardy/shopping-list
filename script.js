var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";   // Clear input value
  li.addEventListener("click", event => {
    li.classList.toggle("completed");
  })
  var button = document.createElement("button");
  button.innerText = "Delete";
  button.classList.add("delete-button");
  li.appendChild(button);
  button.addEventListener("click", event => {
    button.parentElement.remove();
  })
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);