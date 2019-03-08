$(document).ready(function() {
    $("#readDataBtn").click(function() {
        // event.preventDefault();
        // var loginData = {
        //     "user" : $('#userVal').val(), 
        //     "pass" : $('#passVal').val()
        // }
        $.ajax({
            type: "GET",
            async: false,
            dataType : 'json',
            contentType: 'application/json',
            url: "http://localhost:8080/api/ardread",
            cache: false,
            statusCode: {
                200: function (response) {
                    $('#divData').append("<h2>Error</h2>");
                },
                400: function (response) {
                    $('#divData').append("<h2>Error</h2>");
                }
             }
        });
    });
});