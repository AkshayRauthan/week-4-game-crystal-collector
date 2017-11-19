//define global variables
var randomNumber;
var gem1;
var gem2;
var gem3;
var gem4;
var wins;
var losses;
var totalScore;
var clickedImg;

//logic to initialize random numbers, assign the values to the crystals
$(document).ready(function(){
	//call the function to generate random number
	generateRandomNumber();

	//call the function to assign values to the crystals
	assignValuesToCrystals();
	
	//call the function to reset the wins and losses
	resetRecords();

	//call the function to reset the total scrore
	resetScore();

	//setting the intial values on the page
	setInitialValues();

	//on click function
	$("img").click(function(){
		clickedImg = $(this).attr('id');

		getInput(clickedImg);

		compareScore();

	});


});

var getInput = function(clickedImg){
		//call function to increment the total scroe
		if(clickedImg==="gem1"){
			incrementTotalScore(gem1);
		}else if(clickedImg==="gem2"){
			incrementTotalScore(gem2);
		}else if(clickedImg==="gem3"){
			incrementTotalScore(gem3);
		}else{
			incrementTotalScore(gem4);
		}
}

var compareScore = function(){
	if(parseInt(totalScore) > parseInt(randomNumber)){
		alert("You Lost!!");
		losses = losses + 1;
		$("#losses").text(losses);
		nextChance();
	}else if(parseInt(totalScore)===parseInt(randomNumber)){
		alert("You Won");
		wins = wins + 1;
		$("#wins").text(wins);
		nextChance();
	}
}

var nextChance = function(){
	generateRandomNumber();
	assignValuesToCrystals();
	resetScore();
	setInitialValues();
}

var incrementTotalScore = function(gem){
	totalScore = parseInt(totalScore) + parseInt(gem);
	$("#total-score").text(totalScore);	
}

//random number generator function
var generateRandomNumber = function(){
	//random number should be b/w 19-120
	randomNumber = Math.floor(Math.random()*120 + 19);
}

//assign values to the gems
var assignValuesToCrystals = function(){
	//gems values should be between 1 and 12
	gem1 = Math.floor(Math.random()*12 + 1);
	gem2 = Math.floor(Math.random()*12 + 1);
	gem3 = Math.floor(Math.random()*12 + 1);
	gem4 = Math.floor(Math.random()*12 + 1);
}

//reset records
var resetRecords = function(){
	wins = 0;
	losses = 0;
}

//reset score
var resetScore = function(){
	totalScore = 0;
}

//setting the values - random number, wins, losses, total score
var setInitialValues = function(){
	$("#random-number").text(randomNumber);
	$("#wins").text(wins);
	$("#losses").text(losses);
	$("#total-score").text(totalScore);	
}


//logic for onclick function to calculate the total score, wins and losses