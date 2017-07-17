var node = document.createElement("p");
var textnode = document.createTextNode("Hello world");
node.appendChild(textnode);
document.getElementById("app").appendChild(node);