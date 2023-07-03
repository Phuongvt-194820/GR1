$(document).ready(function() {
    $("#idSignIn").click(function() {
        if($("#txUser").val() == 'admin@gmail.com' && $("#txPass").val() == 'password') {
            // $("#first").hide();
            // $("#second").append(<a href= '../html/management.html'>Management</a> );
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/auth/login",
                success: function(response){
                    window.location.href= '../html/management.html';
                },
                error: function(error){
                    console.error(error);
                }
            })
        }else{
            alert("Please try again");
        }
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:3000/auth/login",
    //     success: function(response){
    //         window.location.href= '../html/management.html';
    //     },
    //     error: function(error){
    //         console.error(error);
    //     }
    // })

});

    
    // on click Sign In Button checks that username =='admin@gmail.com' and password == 'password'
    // $("#idSignIn").click(function() {
    //     if($("#txUser").val() == 'admin@gmail.com' && $("#txPass").val() == 'password') {
    //         // $("#first").hide();
    //         // $("#second").append(<a href= '../html/management.html'>Management</a> );
    //         window.location.href= '../html/management.html';
    //     }else{
    //         alert("Please try again");
    //     }
        
    //     // window.location.href= '../html/management.html';
    // });

    
});






