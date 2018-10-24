$(document).ready(function () {

    var topics = ["Wicked", "Dear Evan Hansen", "Hamilton", "Kinky Boots", "School of Rock",
        "Nosies Off", "Lion King", "The King and I", "Aladdin", "Oklahoma", "My Fair Lady", "Death of a Salesman"];

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "Kinky Boots" + "&api_key=jjjBHEPaQomZZDjCcCZcKkXRbpGmeS89";
        console.log(queryURL);



        for (var i = 0; i < topics.length; i++) {
            var buttons = $("<button>");
            buttons.attr("class", "showgif");
            buttons.text(topics[i]);
            $("#broadway-button").append(buttons);

        }
    
        $(document).on("click", ".showgif", function () {
           
            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function (response) {
                console.log("buttons");
                //storing the image from the retruned object var
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    // var topicDiv = $("<div class='col-md-4''>");
                    var gifhy = $("<img>");
                    gifhy.attr("src", results[i].images.fixed_height_small_still.url);
                    $("#broadway-gifs").append(gifhy);


                }

            })
        })
    })





















