# Liri

This is liri. Liri is a node application and a command line interface (CLI) app that allows you to search movies, concerts and songs. 

Liri takes in user input and returns information related to the users search criteria. 

The applications relies on NPM packages and axios dependencies. To use this application, you need to have package.JSON installed in the repository where you cloned this application. 

### how to use Liri

  ##### searching for songs 

We use Spotify API to get important data on a song being searched. 
Enter the following in your terminal to search songs: 

```node liri-node-app spotify-this-song <The song you want to search>``` 

The application will return suggested songs, associated artists, albums, and preview urls where they are available. 

   ##### searching for movies 

We use OMDB API to search data on movies. 
Enter the follow code in your terminal to search movies: 
```node liri-node-app movie-this <the name of movie you want>``` 

The application returns important information on the movie such as title, actors, plot, and ratings. 


   ##### searching for concerts 

To search for concerts, we use Bands in Town API to search concerts about an artist or whatever input the user is searching for. 
To get the exact concert time, we use ```moment.js``` library to output readable time format. 

Enter the code below to search concerts: 
```node liri-node-app concert-this <artists or bands>``` 

You get possible concerts from the artists / band, venue and time. 


------------------------------------------------------------

Aside, there is another cool search where random data search on spotify. This data are copied from ```random.txt``` file to search on spotify. 

enter the following code to perform such search: ```node liri-node-app do-what-it-says``` 

The gif attached will explain further functionalities of the application. 

![GitHub Logo](liri-node-app/liri.gif)
Format: ![Alt Text](url)
