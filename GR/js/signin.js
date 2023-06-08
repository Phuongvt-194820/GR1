var username = document.getElementById('idUser');
var password = document.getElementById('idPass');
var buttonSignUp = document.getElementById('idSignIn');
var spanPass = document.getElementById('pass-validate');
var spanUser = document.getElementById('user-validate');
var userValidate = document.getElementById('idUser');
var passValidate = document.getElementById('idPass');

buttonSignUp.onclick = function() {
    if(username.value == 'admin' && password.value == 'admin') {
        window.location = "../html/management.html";
    }else if(username.value == 'admin' && password.value != 'admin' && password.value != ''){
        spanPass.innerHTML = "Incorrect password";
        passValidate.classList.add("input-error");
    }

}
