// console.log("Welcome in my form validation");

//Grab the requird elements from DOM
const success = document.getElementById('success');
const failureName = document.getElementById('failureName');
const failureEmail = document.getElementById('failureEmail');
const failurePhone = document.getElementById('failurePhone');
const failureSubmit = document.getElementById('failureSubmit');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');
const adress = document.getElementById('adress');
const branchSelector = document.getElementById('branchSelector');

//Writing logics

//first time the alerts will not be shown
success.style.display = "none";
failureName.style.display = "none";
failureEmail.style.display = "none";
failurePhone.style.display = "none";
failureSubmit.style.display = "none";

//Assuming some values for submit action to be done
let userNameCheeck = false;
let emailCheeck = false;
let phoneCheeck = false;
let branchSelectionCheeck = false;
let addressCheeck = false;
//Applying Regular Expression
// 1.User Name 
userName.addEventListener('blur',()=>{
    // console.log("Blur event fired");
    let regForName = /^[A-Za-z\s+]([a-zA-z\s+]){2,15}$/;
    let strForName = userName.value;

    console.log(regForName,strForName)
    if (regForName.test(strForName)){
        console.log('Succeed in user name');
        failureName.style.display = "none";
        userNameCheeck = true;
    }
    else{
        console.log('failure in user name')
        failureName.style.display = "block";
    }
})

// 2.Email 
email.addEventListener('blur',()=>{
    // console.log("Blur event fired");
    let regForEmail = /([a-zA-z0-9]){4,30}@gmail.com/;
    let strForEmail = email.value;
    
    console.log(regForEmail,strForEmail)
    if (regForEmail.test(strForEmail)){
        console.log("Succeed in email");
        failureEmail.style.display = "none";
        emailCheeck = true;
    }
    else{
        console.log("Failure in email");
        failureEmail.style.display = "block";
    }
})

// 3.Phone
phone.addEventListener('blur',()=>{
    // console.log("Blur event fired");
    let regForPhone = /\+91[0-9]{10}^[a-z]^[A-Z]/;
    let strForPhone = phone.value;

    console.log(regForPhone,strForPhone);
    if (regForPhone.test(strForPhone)){
        console.log("Succeed in phone");
        failurePhone.style.display = "none";
        phoneCheeck = true;
    }
    else{
        console.log("Failure in phone");
        failurePhone.style.display = "block";
    }
})

//Adress and brachSelection Cheeck
if (adress.value == null){
    console.log('adress value null');
    addressCheeck = false;
}
else{
    addressCheeck = true;
}

if (branchSelector.value == 1,2,3){
    branchSelectionCheeck = true;
}
else{
    branchSelectionCheeck = false;
}

//Adding function on submit button work
submitBtn.addEventListener('click',(e)=>{
    // console.log("click event fired");
    e.preventDefault();   //It prevent the form submittion

    if (userNameCheeck && emailCheeck && phoneCheeck && branchSelectionCheeck && addressCheeck){
        // console.log('all success');
        success.style.display = "block";
    }
    else{
        // console.log('all not success');
        failureSubmit.style.display = 'block';
    }
})