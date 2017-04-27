var fs = require("fs");

var twitKeys = require("./keys.js");

var twitter = require("twitter");

var client = new twitter(twitKeys.twitterKeys);

var params = {dg74155: 'nodejs'};

function tweetFun() {
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for (var i =0; i < tweets.length; i++) {
	  		  if (i > 19) {
		    	break;
		    }
		    console.log("Tweet:  " + tweets[i].text);
		    console.log("Date of Tweet:  " + tweets[i].created_at);
		    console.log("_______________________________________________")

		    	var tweet = tweets[i].text

		    	var date = tweets[i].created_at

		    	var tweetAppend = "\r\n" + tweet + "\r\n" + date + "\r\n"

		    	  	fs.appendFile("log.txt", tweetAppend, function(err) {
					 if (err) {
					 return console.log(err);
			}
		});
	  };
	};
})};
var spotify = require("spotify");

function noSong() {
    spotify.search({ type: 'track', query: "The Sign"}, function(err, data) {
    	if ( err ) {
      		console.log('Error occurred: ' + err);
        return;
    	} 
    		console.log("-------------------------------------");
    		console.log("Artist: " + data.tracks.items[3].artists[0].name);
    		console.log("-------------------------------------");
		    console.log("Song: " + data.tracks.items[3].name);
		    console.log("-------------------------------------");
			console.log("Preview URL: " + data.tracks.items[3].preview_url);
			console.log("-------------------------------------");
		    console.log("Album: " + data.tracks.items[3].album.name);


			   var artist = data.tracks.items[3].artists[0].name

			   var song = data.tracks.items[3].name

			   var preview = data.tracks.items[3].preview_url

			   var album = data.tracks.items[3].album.name

			   var appendSong = "\r\n" +  artist + "\r\n" + song + "\r\n" + preview + "\r\n" + album + "\r\n"

			   	fs.appendFile("log.txt", appendSong, function(err) {
				 if (err) {
				return console.log(err);
			}
		});
    })};
function songFun() {
	spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	   };	
	   		console.log("-------------------------------------");
		    console.log("Artist: " + data.tracks.items[0].artists[0].name);
		    console.log("-------------------------------------");
			console.log("Song: " + data.tracks.items[0].name);
			console.log("-------------------------------------");
		    console.log("Preview URL: " + data.tracks.items[0].preview_url);
		    console.log("-------------------------------------");
		    console.log("Album: " + data.tracks.items[0].album.name);

			   var artist = data.tracks.items[0].artists[0].name

			   var song = data.tracks.items[0].name

			   var preview = data.tracks.items[0].preview_url

			   var album = data.tracks.items[0].album.name

			   var appendSong = "\r\n" +  artist + "\r\n" + song + "\r\n" + preview + "\r\n" + album + "\r\n"

			   	fs.appendFile("log.txt", appendSong, function(err) {
				 if (err) {
				return console.log(err);
			}
		});
	});
};

var request = require("request");

var movieChoice = process.argv[3];


function movieFUN() {

	request("http://www.omdbapi.com/?t=" + movieChoice + "&y=&plot=short&r=json&tomatoes=true", function(error, response, body) {
		
	  		if (!error && response.statusCode === 200) {

    		console.log("Title: " + JSON.parse(body).Title);
    		console.log("-------------------------------------");
    		console.log("Year: " + JSON.parse(body).Year);
    		console.log("-------------------------------------");
    		console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    		console.log("-------------------------------------");
    		console.log("Country: " + JSON.parse(body).Country);
    		console.log("-------------------------------------");
    		console.log("Language: " + JSON.parse(body).Language);
    		console.log("-------------------------------------");
    		console.log("Plot: " + JSON.parse(body).Plot);
    		console.log("-------------------------------------");
    		console.log("Actors: " + JSON.parse(body).Actors);
    		console.log("-------------------------------------");
    		console.log("Rotten Tomatoes Link: " + JSON.parse(body).tomatoURL);
    		console.log("-------------------------------------");
			}
			var title = JSON.parse(body).Title

			var year = JSON.parse(body).Year

			var rating = JSON.parse(body).imdbRating

			var country = JSON.parse(body).Country

			var lang = JSON.parse(body).Language

			var plot = JSON.parse(body).Plot

			var actors = JSON.parse(body).Actors

			var rotten = JSON.parse(body).tomatoURL

			var whatToAppend = '\r\n' + title + '\r\n' + year + '\r\n' + rating + '\r\n' + country + '\r\n' + lang + '\r\n' + plot + '\r\n' + actors + '\r\n' + rotten + '\r\n'

	fs.appendFile("log.txt", whatToAppend, function(err) {
				 if (err) {
				return console.log(err);
			}
		});
	});
};

 function noMovie() {
	request("http://www.omdbapi.com/?t=mr.nobody&y=&plot=short&r=json&tomatoes=true", function(error, response, body) {

			 if (!error && response.statusCode === 200) {
			 	console.log("Title: " + JSON.parse(body).Title);
	    		console.log("-------------------------------------");
	    		console.log("Year: " + JSON.parse(body).Year);
	    		console.log("-------------------------------------");
	    		console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
	    		console.log("-------------------------------------");
	    		console.log("Country: " + JSON.parse(body).Country);
	    		console.log("-------------------------------------");
	    		console.log("Language: " + JSON.parse(body).Language);
	    		console.log("-------------------------------------");
	    		console.log("Plot: " + JSON.parse(body).Plot);
	    		console.log("-------------------------------------");
	    		console.log("Actors: " + JSON.parse(body).Actors);
	    		console.log("-------------------------------------");
	    		console.log("Rotten Tomatoes Link: " + JSON.parse(body).tomatoURL);
	    		console.log("-------------------------------------");
	    		};
	    		var title = JSON.parse(body).Title

			var year = JSON.parse(body).Year

			var rating = JSON.parse(body).imdbRating

			var country = JSON.parse(body).Country

			var lang = JSON.parse(body).Language

			var plot = JSON.parse(body).Plot

			var actors = JSON.parse(body).Actors

			var rotten = JSON.parse(body).tomatoURL

			var whatToAppend = '\r\n' + title + '\r\n' + year + '\r\n' + rating + '\r\n' + country + '\r\n' + lang + '\r\n' + plot + '\r\n' + actors + '\r\n' + rotten + '\r\n'

	fs.appendFile("log.txt", whatToAppend, function(err) {
				 if (err) {
				return console.log(err);
			}
		});
    });
 };


 function readStuff() {
	fs.readFile("random.txt", "utf8", function(error, data) {

		var dataArr = data.split(",");
		var command = dataArr[0];
		var query = dataArr[1];

			spotify.search({ type: 'track', query: query}, function(err, data) {
    			if ( err ) {
      				console.log('Error occurred: ' + err);
        		return;
    			}	
    				console.log("-------------------------------------");	 
    				console.log("Artist: " + data.tracks.items[0].artists[0].name);
    				console.log("-------------------------------------");
					console.log("Song: " + data.tracks.items[0].name);
					console.log("-------------------------------------");
		    		console.log("Preview URL: " + data.tracks.items[0].preview_url);
		    		console.log("-------------------------------------");
		    		console.log("Album: " + data.tracks.items[0].album.name);

		    		   var artist = data.tracks.items[0].artists[0].name

					   var song = data.tracks.items[0].name

					   var preview = data.tracks.items[0].preview_url

					   var album = data.tracks.items[0].album.name

					   var appendSong = "\r\n" +  artist + "\r\n" + song + "\r\n" + preview + "\r\n" + album + "\r\n"

					   	fs.appendFile("log.txt", appendSong, function(err) {
						 if (err) {
						return console.log(err);
			}
		});
    })});
	};

if (process.argv[2] === "my-tweets") {
	tweetFun();
};
if (process.argv[2] === "spotify-this-song" && process.argv[3] === undefined) {
	noSong();
}
else if (process.argv[2] === "spotify-this-song") {
	songFun();
};
if (process.argv[3] === undefined && process.argv[2] === "movie-this") {
	noMovie();
}
else if (process.argv[2] === "movie-this") {
	movieFUN();
};

if (process.argv[2] === "do-what-it-says") {
	readStuff();
};





		 




