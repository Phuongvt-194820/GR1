$(document).ready(function() {

    // $ajax({
    //     type: "GET",
    //     url: "http://localhost:3000/auth/login",
        
    // })

    
    // on click Sign In Button checks that username =='admin@gmail.com' and password == 'password'
    $("#idSignIn").click(function() {
        if($("#txUser").val() == 'admin@gmail.com' && $("#txPass").val() == 'password') {
            // $("#first").hide();
            // $("#second").append(<a href= '../html/management.html'>Management</a> );
            window.location.href= '../html/management.html';
        }else{
            alert("Please try again");
        }
        
        // window.location.href= '../html/management.html';
    });

    
});







// var username = document.getElementById('idUser');
// var password = document.getElementById('idPass');
// var buttonSignIn = document.getElementById('idSignIn');
// var spanPass = document.getElementById('pass-validate');
// var spanUser = document.getElementById('user-validate');
// var userValidate = document.getElementById('idUser');
// var passValidate = document.getElementById('idPass');

// buttonSignIn.onclick = function() {
//     if(username.value == 'admin' && password.value == 'admin') {
//         window.location = "../../html/management.html";
//     }else if(username.value == 'admin' && password.value != 'admin' && password.value != ''){
//         spanPass.innerHTML = "Incorrect password";
//         passValidate.classList.add("input-error");
//     }

// }




