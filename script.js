//Makes API call and geta a random number and updates DOM as well
function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        if(response.quoteAuthor=="" || response.quoteAuthor=="null" || response.quoteAuthor=="undefined" || response.quoteAuthor == " "){
          response.quoteAuthor="Unknown";
        }
        $(".random_quote").html("<h2>" + response.quoteText + "&dash;"  + "<span class='author'>" + response.quoteAuthor + "</span>" + "</h2>");
      }
  });
}

//Function call to randomQuote
$(function() {
  randomQuote();
});

//Initializes random quote everytime a user clicks the button
$("button").click(function(){
  randomQuote();
});
