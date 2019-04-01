require("dotenv").config(); 
var axios = require("axios"); 

var moment = require("moment"); 


var lineBreak = ("\n-------------------------------------------\n");

// searching songs on spotify 

// 1. grab user input 
var userInput = process.argv[2];
var keys = require("./keys.js"); // linking api and secret keys stored in keys.js file

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

spotify.search({ type: "track", query: userInput, limit: "4" }, 
function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log( lineBreak+ "Artists: " + data.tracks.items[0].artists[0].name + 
  "\n\n" + "Song Name: " + data.tracks.items[0].name + 
  "\n\n" + "Album: " + data.tracks.items[0].album.name +
  "\n\n" + "Preview link: " + data.tracks.items[0].preview_url +"\n\n" + lineBreak);
  });

// searching movies on OMDB


axios.get("http://www.omdbapi.com/?apikey=67ad12&t=avengers").then(function(response){ 
    console.log(lineBreak + "* Title: "+ response.data.Title + "\n\n"+
    "* Year: " + response.data.Year + "\n\n" +
    "* IMDB Rating: " + response.data.imdbRating + "\n\n" +
    "* Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n\n" +
    "* Production Country: " + response.data.Country + "\n\n" + 
    "* Languages: " + response.data.Language + "\n\n" + 
    "* Plot: " + response.data.Plot + "\n\n" + 
    "* Actors: " + response.data.Actors + lineBreak
    );
});

axios.get("https://rest.bandsintown.com/artists/khalid/events?app_id=codingbootcamp")
.then(function (response){
    var results = response.data;
    //console.log(results);
    for (var i =0; i<results.length; i++){
        //for (var i = 0; i<results; i++){
    var time =results[i].datetime;
    time = moment(time).format("MM/DD/YYYY - HH:mm");
    console.log(lineBreak + "Venue: " + results[i].venue.name + "\n\n" +
    "City: " + results[i].venue.city + "\n\n" + 
    "Date: " + time + lineBreak);
    };    
});

