function checkEmail(){
    const getEmail = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailformat =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(getEmail.value.length >3 && getEmail.value.match(emailformat)){
        emailError.textContent = "";
        emailError.classList.remove("error");
        emailError.classList.add("success");
    }
    else{
        emailError.textContent = "Make sure email is more than 3 characters and has @ and a ."
        emailError.classList.remove("success");
        emailError.classList.add("error");
    }
}

function checkPassword(){
    const getPassword = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");

    if(getPassword.value.length>8){
        passwordError.textContent = "";
        passwordError.classList.remove("error");
        passwordError.classList.add("success");
    }
    else{
        passwordError.textContent = "Make sure password is more than 8 characters.";
        passwordError.classList.remove("success");
        passwordError.classList.add("error");
       
    }
}
const getEmail = document.getElementById("email");
getEmail.addEventListener("blur",checker);
const getPassword = document.getElementById("password");
getPassword.addEventListener("blur",checker);
function checker(){
    const successMessage = document.getElementById("successMessage");
    const successEmail = document.getElementById("emailError").classList.contains("success");
    const successPassword = document.getElementById("passwordError").classList.contains("success");
    if(successEmail && successPassword){
        successMessage.innerText = "All good to go!"
}
}


function nowSubmit(){
  
    const successEmail = document.getElementById("emailError").classList.contains("success");
    const successPassword = document.getElementById("passwordError").classList.contains("success");

if(successEmail && successPassword){
  
    const confirmed = confirm("Are you sure you want to log in?");
    if(confirmed){
        alert("successful signup!");
    }
    else{
        window.location.href = window.location.href;
        document.getElementById('email').value ="";
        document.getElementById('password').value ="";
    }

}

}
