require('./style/index.scss');

var node = document.createElement("h1");
var textnode = document.createTextNode("Hello world");
node.appendChild(textnode);
document.getElementById("app").appendChild(node);