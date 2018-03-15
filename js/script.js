// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	title: "Overnight",
	artist: "Logic",
	mp3Url: "https://www.youtube.com/watch?v=SFKPktgfQdI",
	imageUrl: "https://i0.wp.com/s1.xclusivejams.com/2018/03/01-Overnight-500x500.jpg?resize=500%2C500",
	songLengthMinutes: 3,
	songLengthSeconds: 37
}





// DOCUMENT READY FUNCTION
$(document).ready(function() {

	function humanTime(x) {
		var numMinutes = x / 60;
		var numSeconds = numMinutes
	}







	var myPlaylist = [{
			title: "Overnight",
			artist: "Logic",
			mp3Url: "https://www.youtube.com/watch?v=SFKPktgfQdI",
			imageUrl: "./overnight.jpg",
		},
		{
			title: "Pick It Up (feat.A$AP Rocky)",
			artist: "Famous Dex",
			mp3Url: "https://www.youtube.com/watch?v=KzPRznjok2E",
			imageUrl: "./pickitup.png",
		},
		{
			title: "After The Storm (feat. Tyler, The Creator & Bootsy",
			artist: "Tyler, The Creator, Bootsy Collins, Kali Uchis",
			mp3Ul: "www.youtube.com/watch?v=oskq36AaIS4",
			imageUrl: "./afterthestorm.jpg",
		}

	]





	for ( var i=0; i<myPlaylist.length; i=i+1) {
		$("#songs").append("<h3>" + myPlaylist[i].title + "</h3>" + "<p>" + myPlaylist[i].artist + "</p>" + "<a href=" + myPlaylist[i].mp3Url + ">Play Song</a>" + "<img src="+myPlaylist[i].imageUrl+" />" + "<h1>Length in Minutes: " + myPlaylist[i].songLengthMinutes + "</h1>" + "<h1>Length in seconds: " + myPlaylist[i].songLengthSeconds + "</h1>")
	}


});

function displayList() {



}

function clearList() {



}

function addSong() {



}
