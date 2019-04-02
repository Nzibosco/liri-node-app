require("dotenv").config();
var axios = require("axios");

var moment = require("moment");


var lineBreak = ("\n-------------------------------------------\n");

// searching songs on spotify 

// 1. grab user search 
var search = process.argv[2];
var input = process.argv.slice(3).join(" ");

switch (search) {
  case "spotify-this-song":
    songData();
    break;

  case "movie-this":
    movieData();
    break;

  case "concert-this":
    bandDetails();
    break;

  case "do-what-it-says":
    whatItSay();
    break;
};


var keys = require("./keys.js"); // linking api and secret keys stored in keys.js file

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// searching songs info 

function songData() {
var keys = require("./keys.js");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
  spotify.search({ type: "track", query: input },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      var music = data.tracks.items;
      for (var i = 0; i < music.length; i++) {
        console.log(lineBreak + "Artists: " + music[i].artists[0].name +
          "\n\n" + "Song Name: " + music[i].name +
          "\n\n" + "Album: " + music[i].album.name +
          "\n\n" + "Preview link: " + music[i].preview_url + "\n\n" + lineBreak);
      };

    });
};

// searching movies on OMDB
function movieData() {
  var queryURL = "https://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy"
  axios.get(queryURL).then(function (response) {
    var info = response.data;
    console.log("\n\n");
    console.log("Title: " + info.Title);
    console.log("Release Year: " + info.Year);
    console.log("IMDB Rating: " + info.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + info.Ratings[1].Value);
    console.log("Country: " + info.Country);
    console.log("Language: " + info.Language);
    console.log("Plot: " + info.Plot);
    console.log("Actors: " + info.Actors + lineBreak);

  });
};

// search concert 

function bandDetails() {
  axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function (response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var time = results[i].datetime;
        //format the event time
        time = moment(time).format("MM/DD/YYYY - HH:mm");
        console.log(lineBreak + "Venue: " + results[i].venue.name + "\n\n" +
          "City: " + results[i].venue.city + "\n\n" +
          "Date: " + time + lineBreak);
      };
    });
};

// do what it says 

function whatItSay() {
  var fs = require("fs");
  //Read random.txt file
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error)
    }
    //Split data into array
    var textArr = data.split(",");
    userCommand = textArr[0];
    userInput = textArr[1];

    spotify.search({ type: "track", query: userInput },
      function (err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var music = data.tracks.items;
        for (var i = 0; i < music.length; i++) {
          console.log(lineBreak + "Artists: " + music[i].artists[0].name +
            "\n\n" + "Song Name: " + music[i].name +
            "\n\n" + "Album: " + music[i].album.name +
            "\n\n" + "Preview link: " + music[i].preview_url + "\n\n" + lineBreak);
        };

      });
  })
};


