const container = document.querySelector('#container');
const gridWrapper = document.querySelector('#gridWrapper');

//Noting that code below did not work unless i used "querySelector-above"
//const square = document.createElement('div');
//square.classList.add('square');
//gridWrapper.appendChild(square);


//Multiple box-generator code
let boxes = new Array(1024).fill(['']).flat();

boxes.forEach(function(el) {
    var div = document.createElement('div');
    div.className = "square";
    div.innerHTML = el;
    gridWrapper.appendChild(div);

});

let squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', function colorFiller(event) {
        console.log('mouse hovered', event);

        square.setAttribute('style', 'background-color: black;');
    });
})