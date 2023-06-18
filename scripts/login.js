// import { authenticateUser } from "./login1";

container = document.getElementsByClassName("container")
data = document.getElementsByClassName("form__input");
login = document.getElementById("login");
signup = document.getElementById("signup");
reset__password = document.getElementById("resetPassword");
spinner = document.getElementById("spinner");
error_messages = document.getElementsByClassName("form__message__error");
input__error = document.getElementsByClassName("form__input-error-message");
form_input = document.getElementsByClassName("form_input");

async function authenticateUser(user__name, pass__word){
    
}

async function check__user(){
    console.log("Login");
    login.style.display = "none";
    resetPassword.style.display = "none";
    signup.style.display = "none";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    spinner.style.display = "block";
    var verify= false;
    console.log(username,password);
    var timer = setInterval(function(){
        if (username == "Rahul" && password == 12345   ){
            verify=true;
        }
       
        if (verify){
            spinner.style.display = "none";
            window.location.href="../pages/home.html";
        }
        else {
            for (var i = 0; i<error_messages.length; i++){
                spinner.style.display = "none";
                error_messages[i].style.display = "block";
                login.style.display = "block";
            }   
        }
    },5000);
    
}
    

async function create__account(){
    console.log("Create account");
    login.style.display = "none";
    resetPassword.style.display = "none";
    signup.style.display = "none";
    spinner.style.display = "block";
}

async function password__reset(){
    console.log("Reset Password");
    login.style.display = "none";
    resetPassword.style.display = "none";
    signup.style.display = "none";
    spinner.style.display = "block";
    
}

function switch__to__sign__up(){
    login.style.display = "none";
    resetPassword.style.display = "none";
    signup.style.display = "block";
    for (var i = 0; i<error_messages.length; i++){
        error_messages[i].style.display = "none";
    }

    console.log("switch to sign up");
}

function switch__to__reset__password(){
    signup.style.display = "none";
    login.style.display = "none";
    resetPassword.style.display = "block";
    for (var i = 0; i<error_messages.length; i++){
        error_messages[i].style.display = "none";
    }
    console.log("switch to reset password");
}
function switch__to__login(){
    signup.style.display = "none";
    resetPassword.style.display = "none";
    login.style.display = "block";

    for (var i = 0; i<error_messages.length; i++){
        error_messages[i].style.display = "none";
    }
    console.log("switch to login");
}

