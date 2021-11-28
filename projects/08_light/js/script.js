console.log("Welcome in my light project");

//grab the elements
let imgContainer = document.querySelector(".imgContainer");
let img = document.getElementById("img");
let btn = document.querySelector(".btn");

//define the function
const lightToggle = ()=>{
    console.log("clicked");
    if (btn.innerText == "Turn On"){
       img.src = "img/bulbOn.jpg" ;
       btn.innerText = "Turn Off";
    }
    else{
        img.src = "img/bulbOff.jpg" ;
       btn.innerText = "Turn On";
    }
}

//adding the event listner
btn.addEventListener("click",lightToggle);
