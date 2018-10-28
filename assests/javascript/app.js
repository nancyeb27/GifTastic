$(document).ready(function () {

    var topics = ["Wicked", "Dear Evan Hansen", "Hamilton", "Kinky Boots", "School of Rock",
        "Nosies Off", "Lion King", "The King and I", "Aladdin", "Oklahoma", "My Fair Lady", "Death of a Salesman"];
 
    function renderButtons() {
         $("#broadway-button").empty();
 
        for (var i = 0; i < topics.length; i++) {
            var buttons = $("<button>");
            buttons.attr("class", "showgif");
            buttons.attr("show-button", topics[i]);
            buttons.text(topics[i]);
            $("#broadway-button").append(buttons);
        }
    }
 
    $(document).on("click", ".showgif", function () {
        console.log(document);
       
 
        var x = $(this).attr("show-button");
        console.log(x);
 
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=jjjBHEPaQomZZDjCcCZcKkXRbpGmeS89&limit=10";
        console.log(queryURL);
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
 
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
 
                $("#broadway-gifs").prepend(gifhy);
 
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
 
                gifDiv.prepend(p);
                gifDiv.prepend(gifhy);
 
                $("#broadway-gifs").prepend(gifDiv);
 
 
                // This function handles events where a Topic button is clicked
               
    $("#add-topic").on("click", function (event) {
         event.preventDefault();
               // This line grabs the input from the textbox
        var newShow = $("#topic-input").val().trim();

       
        // Adding movie from the textbox to our array
        topics.push(newShow);
        console.log(topics);

       renderButtons();
       
   });

               
           
            }
       
        })  
 
             })
    renderButtons();
        })
 
    
 
 