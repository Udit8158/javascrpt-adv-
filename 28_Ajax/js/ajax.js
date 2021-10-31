console.log("Welcome in Ajax");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", onClickFetchBtn);

function onClickFetchBtn() {
  console.log("You have clicked");

  //Starting AJAX concept

  //Example - 1
  //Make a xhr object
  const xhr = new XMLHttpRequest();

  //Open the object
  xhr.open("GET", "test.json", true); //GET request,fileName(where data is stored),Asynchronous(true) or synchronous(false);  as a file we can use any thing or also we can use any link

  //On progress(optional) print when the request is posting
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  // //xhr readyState
  // xhr.onreadystatechange = function(){
  //     console.log("Ready State is",xhr.readyState); //here is 5 ready state search it on google
  // }

  //What do when response is ready
  xhr.onload = function () {
    if (this.status == 200) {
      //doing to ignore error //status code 200 means all ok.
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };

  //Sending the data
  xhr.send();

  console.log("Testing the asychronus and synchronus concept");
}

//Example - 2
// Generate dummy information from 'fake Json ' when click the populate button
let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", clickPopBtn);

function clickPopBtn() {
  console.log("Clicked the populate btn");
  const popXhr = new XMLHttpRequest();

  popXhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  popXhr.onprogress = function () {
    console.log("Process is onProgress");
  };

  popXhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
      let populateInformationContainer = document.getElementById(
        "populateInformationContainer"
      );
      populateInformationContainer.innerText = this.responseText;
    } else {
      console.log("Error Occured");
    }
  };

  popXhr.send();
}

//Example - 3
//Missing of understanding in 'post'. 
let anotherFetchBtn = document.getElementById("anotherFetchBtn");
anotherFetchBtn.addEventListener('click',anotherFetchBtnClickHandler);

function anotherFetchBtnClickHandler(){
    const xhrAnotherFetch = new XMLHttpRequest();

    xhrAnotherFetch.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhrAnotherFetch.getResponseHeader("Content-type","application/json"); //extra line for post request

    xhrAnotherFetch.onprogress = function(){
        console.log("Progress is running");
    }

    xhrAnotherFetch.onload = function(){
        if (this.status == 200){
            console.log(this.responseText);
        }
        else {
            console.log("something went wrong")
        }
    }

    const parametere = `{"name" : "test32233ds,"salary" : "4234e3" , "age" : "2e34" }`;
    xhrAnotherFetch.send(parametere);
}