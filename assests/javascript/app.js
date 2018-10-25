$(document).ready(function () {

    var topics = ["Wicked", "Dear Evan Hansen", "Hamilton", "Kinky Boots", "School of Rock",
        "Nosies Off", "Lion King", "The King and I", "Aladdin", "Oklahoma", "My Fair Lady", "Death of a Salesman"];

       
        
        for (var i = 0; i < topics.length; i++) {
            var buttons = $("<button>");
            buttons.attr("class", "showgif");
            buttons.attr("show-button",topics[i]);
            buttons.text(topics[i]);
            $("#broadway-button").append(buttons);
        }
    // }

    $(document).on("click", ".showgif", function () {
        console.log("document");

        var x = $(this).attr("show-button");
       console.log(x);

       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=jjjBHEPaQomZZDjCcCZcKkXRbpGmeS89&limit=10";
       console.log(queryURL);

        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {

            // storing the image from the retruned object var
            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var gifhy = $("<img>");
                gifhy.attr("src", results[i].images.fixed_height_small_still.url);
                $("#broadway-gifs").append(gifhy);
            }

        })


    })
})



