$(document).ready(function() {
  $('#activate').click(function() {
      $.ajax({
          url: 'https://api.chucknorris.io/jokes/random',
          type: 'GET',
          dataType: 'json',
          success: function(data) {
              $('#output').html('<p>' + data.value + '</p>');
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.log("Error:", textStatus, errorThrown);
              $('#output').html('<p>Error occurred while fetching data.</p>');
          }
      });
  });
});
