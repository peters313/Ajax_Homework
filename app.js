
$(document).ready(function() {
    console.log("we're up and running!")
    $.ajax('data.json', {
        success: function(response){
            $.each(response, function(index, response) {
                $('.container').append("<div class='newDiv'</div>")
                var msg = $("<p></p>").css("background-color", response.value);
                msg.append("Color: " + response.color);
                msg.append("<br>Value: " + response.value);
                $('.container').append(msg)
            })

        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

})