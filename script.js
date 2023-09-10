const container = document.querySelector('#container');
const gridWrapper = document.querySelector('#gridWrapper');


//This function takes input from a prompt and creates an array of that length
const createArray = () => {
	const n = prompt('How many squares per side?');
	if (n === null) {
		return [];
	}
	const num = parseInt(n);
	if (isNaN(num) || num < 0) {
		return [];
	}
	return [...Array(num)].map((_, i) => `${i}`);

}
const result = createArray();

//Function that creates boxes based on the array length
result.forEach(function (el) {
	const div = document.createElement('div');
	div.classList.add('square');
	div.textContent = el;
	gridWrapper.appendChild(div);
});

//Function to change background color when hovered over each box
let squares = document.querySelectorAll('.square');

squares.forEach(square => {
	square.addEventListener('mouseover', function colorFiller(e) {

		square.setAttribute('style', 'background-color: rgba(0,0,0,0.8);');
	});
});
