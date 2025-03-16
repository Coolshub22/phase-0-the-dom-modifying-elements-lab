// Write your code here!
const mainTag = document.getElementById("main");
console.log(mainTag.remove());

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Arnold Kulavi is the champion";
document.body.append(newHeader);

