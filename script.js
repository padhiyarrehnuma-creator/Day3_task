const form = document.getElementById("registerForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const course = document.getElementById("course");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const terms = document.getElementById("terms");

const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");

// Show Hide Password

togglePassword.onclick = () => {
password.type =
password.type === "password"
? "text"
: "password";
};

toggleConfirm.onclick = () => {
confirmPassword.type =
confirmPassword.type === "password"
? "text"
: "password";
};

// Password Strength

password.addEventListener("input", () => {

let value = password.value;

let strength = 0;

if(value.length >= 8) strength++;
if(/[A-Z]/.test(value)) strength++;
if(/[0-9]/.test(value)) strength++;
if(/[!@#$%^&*]/.test(value)) strength++;

if(strength == 1){

strengthBar.style.width = "25%";
strengthBar.style.background = "red";
strengthText.innerHTML = "Weak";

}

else if(strength == 2){

strengthBar.style.width = "50%";
strengthBar.style.background = "orange";
strengthText.innerHTML = "Medium";

}

else if(strength == 3){

strengthBar.style.width = "75%";
strengthBar.style.background = "#FFD700";
strengthText.innerHTML = "Good";

}

else if(strength >= 4){

strengthBar.style.width = "100%";
strengthBar.style.background = "limegreen";
strengthText.innerHTML = "Strong";

}

else{

strengthBar.style.width = "0%";
strengthText.innerHTML = "Password Strength";

}

});

// Validation

form.addEventListener("submit",function(e){

e.preventDefault();

let valid = true;

document.querySelectorAll(".error").forEach(error=>{
error.innerHTML="";
});

function showError(input,msg){

let error=input.parentElement.querySelector(".error");

if(error){

error.innerHTML=msg;

}

input.classList.add("error-border");

input.classList.remove("success");

valid=false;

}

function showSuccess(input){

input.classList.remove("error-border");

input.classList.add("success");

}

// Name

if(fullname.value.trim()==""){

showError(fullname,"Enter Full Name");

}else{

showSuccess(fullname);

}

// Email

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email.value==""){

showError(email,"Enter Email");

}

else if(!emailPattern.test(email.value)){

showError(email,"Invalid Email");

}

else{

showSuccess(email);

}

// Password

if(password.value.length<8){

showError(password,"Minimum 8 Characters");

}

else{

showSuccess(password);

}

// Confirm Password

if(confirmPassword.value!==password.value){

showError(confirmPassword,"Password Not Match");

}

else{

showSuccess(confirmPassword);

}

// Course

if(course.value==""){

course.parentElement.querySelector(".error").innerHTML="Select Course";

valid=false;

}

// Phone

const phonePattern=/^[0-9]{10}$/;

if(!phonePattern.test(phone.value)){

phone.parentElement.querySelector(".error").innerHTML="Enter Valid Phone Number";

phone.classList.add("error-border");

valid=false;

}

else{

phone.classList.remove("error-border");

phone.classList.add("success");

}

// Address

if(address.value.trim()==""){

showError(address,"Enter Address");

}

else{

showSuccess(address);

}

// Terms

if(!terms.checked){

terms.parentElement.parentElement.querySelector(".error").innerHTML="Accept Terms & Conditions";

valid=false;

}

// Success Popup

if(valid){

popup.style.display="flex";

form.reset();

strengthBar.style.width="0%";

strengthText.innerHTML="Password Strength";

}

});

// Popup Close

okBtn.onclick=function(){

popup.style.display="none";

};

window.onclick=function(e){

if(e.target==popup){

popup.style.display="none";

}

};
