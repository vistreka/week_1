import "./styles.css";


const myButton = document.getElementById("my-button");
const addDataButton = document.getElementById("add-data");

myButton.addEventListener("click", function () {
  console.log("hello world");

  const message = document.getElementById("message");
  message.innerText = "My notebook";
});

addDataButton.addEventListener("click", function () {
  const node = document.createElement("li");
  const textnode = document.createTextNode(
    document.getElementById("text").value
  );
  node.appendChild(textnode);
  document.getElementById("my-list").appendChild(node);
});
