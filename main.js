function generateRandomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        // generating new quote and displaying within p tag
        $("#newquote").html("<p id='newquote'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " </p>");
        // tweeting the quote by setting up id on a tag
        $("#tweetme").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}

// call to display Quote on load
$(function() {
  generateRandomQuote();
});

$("button").click(function(){
  generateRandomQuote();
});
