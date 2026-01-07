
const container = document.getElementsByClassName("container");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("cnf-password");
const form = document.getElementById("validate-form");

// ! nextElementSibling --> "give me the element right after this input"
// * Optimized way


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isUsernameValid = checkUsername();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isCnfValid = checkcnfPassword();
    
    const result = isUsernameValid && isEmailValid && isPasswordValid && isCnfValid;

    if(result){
         form.submit();
    } else{
        console.log("form is invalid");
    }

    console.log({ isUsernameValid, isEmailValid, isPasswordValid, isCnfValid });

})


function showError(input, message){
    input.classList.add("error");
    input.classList.remove("success");
    input.nextElementSibling.innerText = message;
}

function showSuccess(input){
    input.classList.add("error");
    input.classList.remove("success");
    input.nextElementSibling.innerText = "";
}

function checkUsername(){
    if(username.value.trim().length < 6){
        showError(username, "Username length should be more than 6");
        return false;
    }
    else{
        showSuccess(username);
        return true;
    }
}

function checkEmail(){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value.trim())){
        showError(email, "Enter the correct email");
        return false;
    }
    else{
        showSuccess(email);
        return true;
    }
}

function checkPassword(){
    if(password.value.trim().length < 8){
        showError(password, "Password length should be more than 8");
        return false;
    }
    else{
        showSuccess(password);
        return true;
    }
}

function checkcnfPassword(){
    if(cnfPassword.value.trim() !== password.value){
        showError(cnfPassword, "Confirm password should be same as password");
        return false;
    }
    else{
        showSuccess(cnfPassword);
        return true;
    }
}



// ! My way
// function formValidate([isUsernameValid, isEmailValid, isPasswordValid, isCnfValid]){

//     return isEmailValid && isUsernameValid && isPasswordValid && isCnfValid;
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const isUsernameValid = checkUsername();
//     const isEmailValid = checkEmail();
//     const isPasswordValid = checkPassword();
//     const isCnfValid = checkcnfPassword();
    
//     const result = formValidate([isUsernameValid, isEmailValid, isPasswordValid, isCnfValid]);

//     if(result){
//          form.submit();
//     } else{
//         console.log("form is invalid");
//     }

//     console.log({ isUsernameValid, isEmailValid, isPasswordValid, isCnfValid });

// })

// function checkUsername(){
//     if(username.value.length < 6){
//         username.style.border = "2px solid red";
//         return false;
//     }
//     else{
//         username.style.border = "2px solid green";
//         return true;
//     }
// }

// function checkEmail(){
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!emailPattern.test(email.value)){
//         email.style.border = "2px solid red";
//         return false;
//     }
//     else{
//         email.style.border = "2px solid green";
//         return true;
//     }
// }

// function checkPassword(){
//     if(password.value.length < 8){
//         email.style.border = "2px solid red";
//         return false;
//     }
//     else{
//         email.style.border = "2px solid green";
//         return true;
//     }
// }

// function checkcnfPassword(){
//     if(cnfPassword.value !== password.value){
//         cnfPassword.style.border = "2px solid red";
//         return false;
//     }
//     else{
//         cnfPassword.style.border = "2px solid green";
//         return true;
//     }
// }

