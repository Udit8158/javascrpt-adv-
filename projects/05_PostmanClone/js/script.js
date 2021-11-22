console.log("Welcome to my postman");

//Initilize the variables
let url = document.getElementById('url');
let submitBtn = document.getElementById('submitBtn');

//Adding event listner to the submit button
submitBtn.addEventListener('click',()=>{
    // console.log("clicked");
    let responseText = document.getElementById('responseText');
    responseText.innerHTML = "Your data is fetching,Please be paitent"
    let urlVal = document.getElementById('url').value;
    // console.log(urlVal);
    fetch(urlVal).then((response)=>{
        return response.text(); 
    }).then((data)=>{
        console.log(data);
        let responseText = document.getElementById("responseText");
        responseText.innerHTML = data;
        Prism.highlightAll();  //To make the json in highlight
    })
})
