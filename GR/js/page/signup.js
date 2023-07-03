$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/auth/register",
        success: function(response){
            $("#idSignUp").click(function() {
                window.location.href()= '../html/management.html';
            });
            // window.location.href= '../html/management.html';
        },
        error: function(response){

        }
    })

    // $("#idSignUp").click(function() {
    //     window.location.href= '../html/management.html';
    // });
});

