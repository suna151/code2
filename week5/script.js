
function onWindowLoaded(event){
	// preload(); 
	var myButton = document.getElementById("myButton");
	myButton.addEventListener("click", onButtonClick);
	console.log("loaded"); 
	loadImages(images);

}

var images = [
	"assets/01.png",
	"assets/02.png",
	"assets/03.png",
	"assets/04.png",
	"assets/05.png",
	"assets/06.png",

	];

function loadImages(imgArr, targetId){
    for(var i=0; i< imgArr.length; i++) {
        console.log(imgArr[i]);
        var img = new Image();
            img.src = imgArr[i];
    }
}


function onButtonClick(event){
	if(!diceRollElement){
		createdDiceElement();
	} 
	updateDiceValue(); 
}
var diceRollElement; 

function createdDiceElement(){
	diceRollElement = document.createElement("img");
	diceRollElement.style.color = "blue"; 
	diceRollElement.style.fontSize = "24px"; 
	document.body.appendChild(diceRollElement);
}

function updateDiceValue(){
	var diceRollValue = Math.random()*6;
	diceRollValue = Math.floor(diceRollValue); 
	// diceRollValue ++; 

	for(var i = 1; i<7; i++){
		diceRollElement.src = images[diceRollValue]; 
	}

}

window.addEventListener("load", onWindowLoaded);