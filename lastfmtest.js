/* 
  This will be the base for a test app called lastfm-test, which will output
  info from last.fm for my account
*/

var params = {
  url: "http://ws.audioscrobbler.com/2.0/",
  key: "0eabfc4a8115137c43388f0e23ab6afe",
  user: "etrinsou"
};

$(document).ready(function() {  
    $("#getTopArtists").click(function() { 
      $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists" + "&user="+ params.user+ "&api_key=" + params.key + "&limit=15&format=json&callback=?", function(json) {  
        var html = '';  
        $.each(json.topartists.artist, function(i, item) {  
            html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";  
        });  
        $('#outbox').append(html);  
      });
  });
});
