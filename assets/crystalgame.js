 //Prepare Document
 $( document ).ready();
 //Define global variables
 var titlepagelock = false;
 var sappVal;
 var rubyVal;
 var topaVal;
 var emerVal;
 var objectiveScore;
 var userScore = 0;
 var winTracker = 0;

//Hide all other screens at the start
$('#gameGUI').hide();
$('#gameOverScreen').hide();
gameMain();

// fancy fading text function
 function FancyTitleText(){
			$('.titletext').fadeOut(1500); 	
            $('.titletext').fadeIn(1500);
        }

function reIni(){
	objectiveScore = 0;
	userScore = 0;
	rubyVal = 0;
	sappVal = 0;
	topaVal = 0;
	emerVal = 0;
}

function gameNum(){
	objectiveScore = Math.floor(Math.random()*90) + 10;
	rubyVal = Math.floor(Math.random()*9);
	sappVal = Math.floor(Math.random()*9) + 1;
	topaVal = Math.floor(Math.random()*9) + 1;
	emerVal = Math.floor(Math.random()*9) + 1;
}

function gameCheck(){
	if(userScore > objectiveScore){
			$("#GOtext1").html("You lost!");
			$("#GOtext2").html("Try Again?");
			$(".gameagain").html("Yes");
			$(".mainmenu").html("No");
			titlepagelock = false;
			$('#gameGUI').fadeOut(1000);
			$('#gameOverScreen').fadeIn(1500);
			$(".gameagain").click(TryAgain);
			$(".mainmenu").click(ReturnToMain);
		}

		else if(userScore === objectiveScore){
			winTracker ++;
			$("#GOtext1").html("You won!");
			$("#GOtext2").html("");
			$(".gameagain").html("Next Round");
			$(".mainmenu").html("Main Menu");
			$('#gameGUI').fadeOut(1000);
			$('#gameOverScreen').fadeIn(1500);
			$(".gameagain").click(TryAgain);
			$(".mainmenu").click(ReturnToMain);
		}

		else{

		}

}

function rubyClick(){
	userScore += rubyVal
	$('#userscore').html(userScore.toString());
	gameCheck();
}

function sappClick(){
	userScore += sappVal
	$('#userscore').html(userScore.toString());
	gameCheck();
}

function topaClick(){
	userScore += topaVal
	$('#userscore').html(userScore.toString());
	gameCheck();
}

function emerClick(){
	userScore += emerVal
	$('#userscore').html(userScore.toString());
	gameCheck();
}

function TryAgain(){
		titlepagelock = true;
		$('#gameOverScreen').fadeOut(1000);
		$('#gameGUI').fadeIn(1500);
		inGameMech();
}

function ReturnToMain(){
	winTracker = 0;
	$('#gameOverScreen').fadeOut(1000);
	$('#titlepage').fadeIn(1500);
	gameMain();
}


// transition from Title Screen to Game GUI


function inGameMech(){
	reIni();
	console.log(rubyVal);
	console.log(emerVal);
	if(titlepagelock===true){	
		gameNum();
		$('#objectivescore').html(objectiveScore.toString());
		$('#userscore').html(userScore.toString());
		$('#wintracker').html(winTracker.toString());
				$('#ruby').click(rubyClick);
				$('#sapp').click(sappClick);
				$('#topa').click(topaClick);
				$('#emer').click(emerClick);
}
}

function gameMain(){

// create cool fading effect with if loop
if (titlepagelock === false){
	setInterval(function() {FancyTitleText()}, 3000);
}

	document.onkeyup = function(event){
		titlepagelock = true;
		$('#titlepage').fadeOut(1000);
		$('#gameGUI').fadeIn(1500);
		inGameMech();
	}

	}//onkeyup end




