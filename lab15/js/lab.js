// Using the core $.ajax() method to fetch data from Chuck Norris API
$(document).ready(function() {
  $('#activate').click(function() {
      $.ajax({
          url: "https://api.chucknorris.io/jokes/random",
          type: "GET",
          dataType: "json",
          success: function(data) {
              $('#output').html(data.value);
              console.log(data);
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.log("Error:", textStatus, errorThrown);
              $('#output').html("An error occurred while fetching the joke.");
          }
      });
  });
});
