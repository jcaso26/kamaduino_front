$("#test").click(function(e) {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/test",
        cache: false,
        success: function (data) {
            console.log("SUCCESS : ", data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status);
            alert(textStatus);
            alert(errorThrown);
        },

    });
});

$("#search-form").click(function(e) {
         //stop submit the form, we will post it manually.
         //event.preventDefault();
         fire_ajax_submit();
});

function fire_ajax_submit() {

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/login",
        cache: false,
        success: function (data) {
            // var json = "<h4>Ajax Response</h4><pre>"
            //     + JSON.stringify(data, null, 4) + "</pre>";
            // $('#feedback').html(json);

        console.log("SUCCESS : ", data);
            // $("#btn-search").prop("disabled", false);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status);
            alert(textStatus);
            alert(errorThrown);
        },

    });

    // $.ajax({
    //     type: 'POST',
    //     url: '/controller/action',
    //     data: $form.serialize(),
    //     success: function(data){
    //         alert('horray! 200 status code!');
    //     },
    //     error: function(data){
    //         //get the status code
    //         if (code == 400) {
    //             alert('400 status code! user error');
    //         }
    //         if (code == 500) {
    //             alert('500 status code! server error');
    //         }
    //     },
    // });

}