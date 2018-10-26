$(document).ready(function () {

    var topics = ["Wicked", "Dear Evan Hansen", "Hamilton", "Kinky Boots", "School of Rock",
        "Nosies Off", "Lion King", "The King and I", "Aladdin", "Oklahoma", "My Fair Lady", "Death of a Salesman"];


    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>");
        buttons.attr("class", "showgif");
        buttons.attr("show-button", topics[i]);
        buttons.text(topics[i]);
        $("#broadway-button").append(buttons);

    }

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
                gifhy.attr("data-still", results[i].images.original_still.url);
                gifhy.attr("data-animate", results[i].images.original.url);
                gifhy.attr("data-state", "still");
                gifhy.attr("class", "gif");


                $(".gif").on("click", function () {
                    var state = $(this).attr("data-state");
                    var animateImage = $(this).attr("data-animate");
                    var stillImage = $(this).attr("data-still");

                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }


                })


                $("#broadway-gifs").append(gifhy);

                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                gifDiv.prepend(p);
                gifDiv.prepend(gifhy);

                $("#broadway-gifs").prepend(gifDiv);


                // This function handles events where one button is clicked
                $("#add-topic").on("click", function (event) {
                    event.preventDefault();

                    // This line grabs the input from the textbox
                    var newplay = $("#topic-input").val().trim();
                    console.log(newplay);
                 

                    // Adding the movie from the textbox to our array
                    newplay.push(topics);
                    console.log(topics);

                    //     // Calling renderButtons which handles the processing of our movie array
                    // gifhy();
                    //   });

                    //   // Function for displaying the movie info
                    //   // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
                    //   $(document).on("click", "x", topics);

                    //   // Calling the renderButtons function to display the initial buttons
                    // show-button();

                })
            
            }

        

    })
})
   
})
    











