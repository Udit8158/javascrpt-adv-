console.log("Welcome in Ajax");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",onClickFetchBtn);

function onClickFetchBtn(){
    console.log("You have clicked");

    //Make a xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    xhr.open('GET','this.txt',true);   //GET request,fileName(where data is stored),Asynchronous(true) or synchronous(false);

    //On progress(optional) print when the request is posting
    xhr.onprogress = function(){
        console.log("On Progress");
    }

    //What do when response is ready 
    xhr.onload = function(){
        if (this.status == 200){        //doing to ignore error //status code 200 means all ok.
            console.log(this.responseText);
        }
        else {
            console.log("Some error occured")
        }
    }

    //Sending the data
    xhr.send()
}