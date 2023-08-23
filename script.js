const container = document.querySelector('#container');
const gridWrapper = document.querySelector('#gridWrapper');

//Noting that code below did not work unless i used "querySelector-above"
//const square = document.createElement('div');
//square.classList.add('square');
//gridWrapper.appendChild(square);


//Multiple box-generator code
let boxes = new Array(3600).fill(['']).flat();

boxes.forEach(function(el) {
    var div = document.createElement('div');
    div.className = "square";
    div.innerHTML = el;
    gridWrapper.appendChild(div);

});

//Function to change background color when hovered over each box
let squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', function colorFiller(e) {
        
        square.setAttribute('style', 'background-color: black;');
    });
});

function gridGenerator() {
    let promptInput  = prompt('Enter a whole number between 1 and 100', '');
    return promptInput;
};

console.log(gridGenerator());
console.log(isNaN(gridGenerator()));