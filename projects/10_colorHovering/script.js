console.log("Welcome");

let colorElements = document.querySelectorAll('.color'); //Grab the array of color elements
let centerSpace = document.querySelector('.center'); //Grab the center space

//Grab all individual color element
let redElement = document.querySelector('.red');
let cyanElement = document.querySelector('.cyan');
let violetElement = document.querySelector('.violet');
let orangeElement = document.querySelector('.orange');
let pinkElement = document.querySelector('.pink');


//Function to find color 
const findColor = (element) => {
    return window.getComputedStyle(element).backgroundColor;
}

//Function to change the color in the center area
const magicColorChange = (element) => {
    color = findColor(element);
    centerSpace.style.backgroundColor = color;
}

redElement.addEventListener('mouseenter',()=>{
    magicColorChange(redElement);
});
cyanElement.addEventListener('mouseenter',()=>{
    magicColorChange(cyanElement);
});
violetElement.addEventListener('mouseenter',()=>{
    magicColorChange(violetElement);
});
orangeElement.addEventListener('mouseenter',()=>{
    magicColorChange(orangeElement);
});
pinkElement.addEventListener('mouseenter',()=>{
    magicColorChange(pinkElement);
});

