console.log("Welcome in my form validation");

//Grab the requird elements from DOM
const success = document.getElementById('success');
const failureName = document.getElementById('failureName');
const failureEmail = document.getElementById('failureEmail');
const failurePhone = document.getElementById('failurePhone');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');

//Writing logics

//first time the alerts will not be shown
success.style.display = "none";
failureName.style.display = "none";
failureEmail.style.display = "none";
failurePhone.style.display = "none";

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
    }
    else{
        console.log("Failure in email");
        failureEmail.style.display = "block";
    }
})

// 3.Phone
phone.addEventListener('blur',()=>{
    // console.log("Blur event fired");
})

