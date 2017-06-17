

// Select elements from HTML page
var titles = ['Noble', 'Cutthroat', 'Fearless', 'Volatile', 'Frantic', 'Foolish', 'Coward', 'Vanquisher', 'Dirty', 'Murderous', 'Humble', 'Helpless', 'Great', 'Legend', 'Illustrious', 'Master', 'Grand Master', 'Elder'];
var playerName = document.querySelector("#playerName");
var nameTitle = document.querySelector("#nameTitle");
var winningLevel = 10;
var levelCount = 1;
var itemCount = 0;
var gameWinner = false;

var newGame = document.querySelector("#newGame");
var combatStrength = document.querySelector(".combatStrength");

var level = document.querySelector(".level");
var levelUp = document.querySelector(".levelUp");
var levelDown = document.querySelector(".levelDown");

var item= document.querySelector(".item");
var itemUp = document.querySelector(".itemUp"); 
var itemUp3 = document.querySelector(".itemUp3");
var itemUp5 = document.querySelector(".itemUp5");
var itemDown = document.querySelector(".itemDown");
var itemDown3 = document.querySelector(".itemDown3");
var itemDown5 = document.querySelector(".itemDown5");

// Get our Munchkins player Name 
var sign = prompt("Munckin! What name do you wish to go by?");
playerName.textContent = sign;

function computeStrength(){
	combatStrength.textContent = itemCount + levelCount;
}

// Give player a random title from our titles array
nameTitle.textContent = randomTitle();

function randomTitle(){
	var random = Math.floor(Math.random() * titles.length);
	return titles[random] + " ";
}


// Buttons for levels 

levelUp.addEventListener("click", function(){
	if(!gameWinner){
		levelCount++;
		if(levelCount === winningLevel){
			gameWinner = true;
		}
	level.textContent = levelCount;
	computeStrength();
	}
});

levelDown.addEventListener("click", function(){
	if(levelCount > 1){
		levelCount--;
		level.textContent = levelCount;
		computeStrength();
	}
});

// Item Up Buttons

itemUp.addEventListener("click", function(){
	itemCount++;
	item.textContent = itemCount;
	computeStrength();
});

itemUp3.addEventListener("click", function(){
	itemCount+= 3;
	item.textContent = itemCount;
	computeStrength();
});

itemUp5.addEventListener("click", function(){
	itemCount+= 5;
	item.textContent = itemCount;
	computeStrength();
});

// Item Down Buttons

itemDown.addEventListener("click", function(){
	if(itemCount >= 1){
		itemCount--;
		item.textContent = itemCount;
		computeStrength();
	}
});

itemDown3.addEventListener("click", function(){
	if(itemCount >= 3){
		itemCount-= 3;
		item.textContent = itemCount;
		computeStrength();
	}
});

itemDown5.addEventListener("click", function(){
	if(itemCount >= 5){
		itemCount-= 5;
		item.textContent = itemCount;
		computeStrength();
	}
});

newGame.addEventListener("click", function(){
	reset();
});

function reset(){
	levelCount = 1;
	itemCount = 0;
	gameWinner = false;
	item.textContent = "0";
	level.textContent = "1";
	combatStrength.textContent = 1;
};

