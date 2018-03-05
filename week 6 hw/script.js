var ghibli;

function preload() {
  // var url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  // var url = 'https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3';
  var url = 'https://ghibliapi.herokuapp.com/species/';
  ghibli = loadJSON(url);
}

function setup () {
	noLoop();
	// console.log("what color the cats are");
	// console.log(ghibli.hair_colors);
	// console.log("What color the cat's eyes are")
	// console.log(ghibli.eye_colors);
	// console.log("cats are")
	// console.log(ghibli.classification);
	console.log(ghibli);
	createCanvas(500, 500);
}


function draw(){

let barWidth = 30;
let barHeightMultiplier = 10;

let xPadding = 60;

var godSpecies = ghibli["3"];

text(godSpecies["name"], 10, 10);
rect(30, 30, barWidth, godSpecies.films.length * barHeightMultiplier);
text(godSpecies["films"].length, 10, 20);

var catSpecies = ghibli["4"];

text(catSpecies["name"], 10 + xPadding, 10);
rect(30 + xPadding, 30, barWidth, catSpecies.films.length * barHeightMultiplier);
text(catSpecies["films"].length, 10 + xPadding, 20);

var elkSpecies = ghibli["1"];

text(elkSpecies["name"], 10 + xPadding * 2, 10);
rect(30 + xPadding * 2, 30, barWidth, elkSpecies.films.length * barHeightMultiplier);
text(elkSpecies["films"].length, 10 + xPadding * 2, 20);

var humanSpecies = ghibli["0"];

text(humanSpecies["name"], 10 + xPadding * 3, 10);
rect(30 + xPadding * 3, 30, barWidth, humanSpecies.films.length * barHeightMultiplier);
text(humanSpecies["films"].length, 10 + xPadding * 3, 20);

var spiritSpecies = ghibli["5"];

text(spiritSpecies["name"], 10 + xPadding * 4, 10);
rect(30 + xPadding * 4, 30, barWidth, spiritSpecies.films.length * barHeightMultiplier);
text(spiritSpecies["films"].length, 10 + xPadding * 4, 20);

var totoroSpecies = ghibli["2"];

text(totoroSpecies["name"], 10 + xPadding * 5, 10);
rect(30 + xPadding * 5, 30, barWidth, totoroSpecies.films.length * barHeightMultiplier);
text(totoroSpecies["films"].length, 10 + xPadding * 5, 20);



}


