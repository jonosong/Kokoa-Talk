const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");

function onLogInSubmit(event){
    const username = loginInput.value;
    localStorage.setItem("username", username);
}

loginForm.addEventListener("submit", onLogInSubmit);