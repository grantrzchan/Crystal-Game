 //Prepare Document
 $( document ).ready()
 //Define global variables
 var titlepagelock = false;
 var sappVal;
 var rubyVal;
 var topaVal;
 var emerVal;
 var objectiveScore;
 var userScore;
 var winTracker;

//Hide all other screens at the start
$('#gameGUI').hide();
$('#gameOverScreen').hide();

// fancy fading text function
 function FancyTitleText(){
			$('.titletext').fadeOut(1500); 	
            $('.titletext').fadeIn(1500);
        }

// create cool fading effect with if loop
if (titlepagelock === false){
	setInterval(function() {FancyTitleText()}, 3000);
}

// transition from Title Screen to Game GUI
document.onkeyup = function(event){
	titlepagelock = true;
	$('#titlepage').fadeOut(1000);
	$('#gameGUI').fadeIn(1500);
}

