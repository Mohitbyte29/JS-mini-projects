const container = document.getElementsByClassName("container");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("cnf-password");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("validate-form");



function formValidate([isUsernameValid, isEmailValid, isPasswordValid, isCnfValid]){

    return isEmailValid && isUsernameValid && isPasswordValid && isCnfValid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isUsernameValid = checkUsername();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isCnfValid = checkcnfPassword();
    
    const result = formValidate([isUsernameValid, isEmailValid, isPasswordValid, isCnfValid]);

    if(result){
         form.submit();
    } else{
        console.log("form is invalid");
    }

    console.log({ isUsernameValid, isEmailValid, isPasswordValid, isCnfValid });

})

function checkUsername(){
    if(username.value.length < 6){
        // alert("username length shoul be more than 6 ")
        username.style.border = "2px solid red";
        return false;
    }
    else{
        username.style.border = "2px solid green";
        return true;
    }
}

function checkEmail(){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value)){
        email.style.border = "2px solid red";
        return false;
    }
    else{
        email.style.border = "2px solid green";
        return true;
    }
}

function checkPassword(){
    if(password.value.length < 8){
        email.style.border = "2px solid red";
        return false;
    }
    else{
        email.style.border = "2px solid green";
        return true;
    }
}

function checkcnfPassword(){
    if(cnfPassword.value !== password.value){
        cnfPassword.style.border = "2px solid red";
        return false;
    }
    else{
        cnfPassword.style.border = "2px solid green";
        return true;
    }
}

