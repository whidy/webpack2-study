require('./style/index.scss');

var node = document.createElement("h1");
var textnode = document.createTextNode("Hello world");
node.appendChild(textnode);
document.getElementById("app").appendChild(node);


// window.onresize = window.onload = function () {
//   //自动设置基础值
//   var screenWidth = window.screen.width;
//   radio = (screenWidth / 375 * 0.625) * 100 + '%';
//   console.log(radio);
//   document.getElementsByTagName('html')[0].style.fontSize = radio;
// }


(function (doc, win) {
  var docEl = doc.documentElement,
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;

      docEl.style.fontSize = (clientWidth / 375 * 0.625) * 100 + '%';
      docEl.style.display = "none";
      docEl.clientWidth; // Force relayout - important to new Android devices
      docEl.style.display = "";
    };

  // Abort if browser does not support addEventListener
  if (!doc.addEventListener) return;

  // Test rem support
  var div = doc.createElement('div');
  div.setAttribute('style', 'font-size: 1rem');

  // Abort if browser does not recognize rem
  if (div.style.fontSize != "1rem") return;

  win.addEventListener('resize', recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);