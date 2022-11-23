let numberOfDivs = 16*16;
let containerSize = 600;
let playButton = document.querySelector('#playButton');

//this part print in html actual number of divs in one column
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
let num = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
} 

//this part count how big need to be 
let sizeCounter = ((600-num)/num);

//this function return number of divs
function returnValue() {
  numberOfDivs = num * num;
  return numberOfDivs;
}

//this function print divs and set up background color changing
function print() {
    removeCells()
const container = document.querySelector('#container');

    for (let i = 0; i < returnValue(); i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.width = `${sizeCounter}px`;
        content.style.height = `${sizeCounter}px`;
        container.appendChild(content);
        console.log(returnValue)
    }

const divs = document.querySelectorAll(".content");
divs.forEach(content => content.addEventListener('mouseover', fill));
}

//this function change background color on black
function fill(e) {
    e.target.style.backgroundColor = 'black';
}

//print divs
print()

//this function remove old divs vhen new divs are printed
function removeCells() {
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }
}