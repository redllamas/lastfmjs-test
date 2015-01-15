/* 
  redllamas 2015
*/

var params = {
  url: "http://ws.audioscrobbler.com/2.0/",
  key: "0eabfc4a8115137c43388f0e23ab6afe",
  user: ""
};

$(document).ready(function() {
      // by clicking on the "Let's go!" button, we trigger the event
      $("#getData").click(function() {
          // first make sure the output boxes are empty
          $('#outbox').empty();
          $('#photobox').empty();
          // we set the username by obtaining the value from the input box
          params.user = $("#lfminfo").val();
          // then we get the JSON, using params and the username we just got
          $.getJSON(params.url + "?method=user.getTopArtists&user="+ params.user + "&api_key=" + params.key + "&limit=15&format=json&callback=?", function(json) {  
            // define the content to go in output
            var html = '',
                phtml = '';
            // parse each object in the array
            $.each(json.topartists.artist, function(i, item) {  
                html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " + item.playcount + "</a></p>";
                phtml += "<a href=" + item.url + " target='_blank'><img src=" + item.image[1]["#text"] + " alt=" + item.name + " /></a>";
            });
            // then output the HTML to the DOM
            $('#outbox').append(html);
            $('#photobox').append(phtml);
        });
  });
});