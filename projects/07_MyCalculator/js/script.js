console.log("Welcome in my self made calculator");

//Grab the eleements 
let inputScreen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

//Define a variable for screenValue it is work as the value of button text
let screenValue = "";

for (item of buttons) {
    item.addEventListener('click',(e)=>{
        // console.log('clicked');
        var audio = new Audio("/projects/07_MyCalculator/clickSound.wav");
        audio.play();
        
        //Grab the inner text of the target button
        buttonText = e.target.innerText;

        //logicfor "X"
        if (buttonText == "X"){
            buttonText = "*";
            screenValue += buttonText;
            inputScreen.value = screenValue;
        }
        //logic for cancelling 
        else if(buttonText == "C"){
            screenValue = "";
            inputScreen.value = screenValue;
        }
        //logic for "=" eval function used to evaluate any value
        else if (buttonText == "="){
            inputScreen.value = eval(screenValue);
        }
        //others key just work as usual
        else {
            screenValue += buttonText;
            inputScreen.value = screenValue;
        }
    })
}

