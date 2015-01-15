/* 
  redllamas 2015
*/

var params = {
  url: "http://ws.audioscrobbler.com/2.0/",
  key: "0eabfc4a8115137c43388f0e23ab6afe",
  user: "",
  query: ""
};

$(document).ready(function() {
      // by clicking on the "Let's go!" button, we trigger the event
      $("#getData").click(function() {
          // first make sure the output boxes are empty
          $('#outbox').empty();
          // we set the username by obtaining the value from the input box
          params.user = $("#lfmuser").val();
          params.query = $("#lfminfo option:selected").val();
          console.log(params.url + "?method=user.get" + params.query + "&user="+ params.user + "&api_key=" + params.key + "&limit=15&format=json&callback=?");
          // then we get the JSON, using params and the username we just got
          $.getJSON(params.url + "?method=user.get" + params.query + "&user="+ params.user + "&api_key=" + params.key + "&limit=15&format=json&callback=?", function(json) {  
            // define the content to go in output
            var html = '';
            // parse each object in the array
            if (params.query === "topArtists") {
              $.each(json.topartists.artist, function(i, item) {  
                  html += "<p class=\"lfmitems\"><a href=" + item.url + " target='_blank'><img src=" + item.image[1]["#text"] + " alt=" + item.name + " /></a><a href=" + item.url + " target='_blank'>" + item.name + " (" + item.playcount + " plays)</a></p>";
              });
            }
            if (params.query === "topTracks") {
              $.each(json.toptracks.track, function(i, item) {  
                  html += "<p class=\"lfmitems\"><a href=" + item.url + " target='_blank'><img src=" + item.image[1]["#text"] + " alt=" + item.name + " /></a><a href=" + item.url + " target='_blank'>" + item.artist.name + " - " + item.name + " (" + item.playcount + " plays)</a></p>";
              });
            }
            // then output the HTML to the DOM
            $('#outbox').append(html);
        });
  });
});