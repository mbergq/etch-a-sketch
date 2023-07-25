const container = document.querySelector('#container');
const gridWrapper = document.querySelector('#gridWrapper');


//Noting that code below did not work unless i used "querySelector-above"
//const square = document.createElement('div');
//square.classList.add('square');
//gridWrapper.appendChild(square);


//Multiple box-generator code
var boxes = ["","","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",
"bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx","bx",];

boxes.forEach(function(el) {
    var div = document.createElement('div');
    div.className = "square";
    div.innerHTML = el;
    gridWrapper.appendChild(div);

})
