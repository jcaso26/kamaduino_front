$(document).ready(function() {
    $("#loginBtn").click(function() {
        event.preventDefault();
        var loginData = {
            "user" : $('#userVal').val(), 
            "pass" : $('#passVal').val()
        }
        $.ajax({
            type: "GET",
            async: false,
            dataType : 'json',
            contentType: 'application/json',
            url: "http://localhost:8080/api/login?" + $.param(loginData),
            cache: false,
            statusCode: {
                200: function (response) {
                    window.location.href = "http://localhost:8001/pages/blank.html";
                },
                401: function (response) {
                    $('#msgLogin').append("<h2>Error de login</h2>");
                }
             }
        });
    });
});