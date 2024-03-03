let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")

function signin(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

function signup(){
    nameField.style.maxHeight = "40px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

