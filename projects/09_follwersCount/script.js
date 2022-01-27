//Grab the counter 
const counter = document.querySelector('.counter');
let followers = document.querySelector('.followers')

//Change the counter to number
let counterNumber = Number(counter.innerHTML);
// console.log(typeof counterNumber);

//Function to change the counter number
let counterChange = () => {
    counterNumber ++;
    counter.innerHTML = counterNumber;
}

//Set the interval to change the counter number
let myInterval = setInterval(counterChange,0.1);

//After some time it will stop the changing the counter number  (You can also do it with if statement in setInterval function)
setTimeout(()=>{
    clearInterval(myInterval);
    followers.innerHTML = `Congratulation! You reach ${counterNumber} followers in YouTube.`
},5000)