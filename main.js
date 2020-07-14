// Global vars
var currentRoll = 1;
var totalScore = 0;
var isGameOver = false;
let diceArray = [
	{
		name: 'die1',
		die: '1',
		number: getRandomNumber(),
		held: false
	},
	{
		name: 'die2',
		die: '2',
		number: getRandomNumber(),
		held: false
	},
	{
		name: 'die3',
		die: '3',
		number: getRandomNumber(),
		held: false
	},
	{
		name: 'die4',
		die: '4',
		number: getRandomNumber(),
		held: false
	},
	{
		name: 'die5',
		die: '5',
		number: getRandomNumber(),
		held: false
	}
];

let scoreButtonArray = [
	'oneScoreButton',
	'twoScoreButton',
	'threeScoreButton',
	'fourScoreButton',
	'fiveScoreButton',
	'sixScoreButton',
	'fhScoreButton',
	'threeoakScoreButton',
	'fouroakScoreButton',
	'ssScoreButton',
	'lsScoreButton',
	'chanceScoreButton'
];

let checkboxArray = [ 'dieCheck1', 'dieCheck2', 'dieCheck3', 'dieCheck4', 'dieCheck5' ];

function isFullHouse(diceArray) {
	// If X X X Y Y
	if (
		diceArray[0].number.number == diceArray[1].number &&
		diceArray[1].number == diceArray[2].number &&
		diceArray[3].number == diceArray[4].number
	) {
		console.log('Found Full House');
		document.getElementById('fhScoreButton').disabled = false;
		return true;
	} else if (
		diceArray[0].number == diceArray[1].number &&
		diceArray[2].number == diceArray[3].number &&
		diceArray[3].number == diceArray[4].number
	) {
		// If X X Y Y Y
		console.log('Found Full House');
		document.getElementById('fhScoreButton').disabled = false;
		return true;
	} else {
		return false;
	}
}

function scoreFullHouse() {
	// 25 points
	totalScore += 25;
	console.log('User won 25 points with a Full House!');
	updateScore();
	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isThreeOfKind(diceArray) {
	if (diceArray[0].number == diceArray[1].number && diceArray[1].number == diceArray[2].number) {
		console.log('Found 3 of Kind!');
		document.getElementById('threeoakScoreButton').disabled = false;
		return true;
	} else if (diceArray[1].number == diceArray[2].number && diceArray[2].number == diceArray[3].number) {
		console.log('Found 3 of Kind!');
		document.getElementById('threeoakScoreButton').disabled = false;
		return true;
	} else if (diceArray[2].number == diceArray[3].number && diceArray[3].number == diceArray[4].number) {
		console.log('Found 3 of Kind!');
		document.getElementById('threeoakScoreButton').disabled = false;
		return true;
	} else {
		return false;
	}
}

function scoreThreeOAK() {
	// Sum of all dice
	var sum = 0;
	for (var i = 0; i < 5; i++) {
		sum += diceArray[i].number;
	}
	totalScore += sum;
	console.log('User won ' + sum + ' points with a 3OAK!');
	updateScore();
	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isFourOfKind(diceArray) {
	if (
		diceArray[0].number == diceArray[1].number &&
		diceArray[1].number == diceArray[2].number &&
		diceArray[2].number == diceArray[3].number
	) {
		console.log('Found 4 of Kind!');
		document.getElementById('fouroakScoreButton').disabled = false;
		return true;
	} else if (
		diceArray[1].number == diceArray[2].number &&
		diceArray[2].number == diceArray[3].number &&
		diceArray[3].number == diceArray[4].number
	) {
		console.log('Found 4 of Kind!');
		document.getElementById('fouroakScoreButton').disabled = false;
		return true;
	} else {
		return false;
	}
}

function scoreFourOAK() {
	// Sum of all dice
	var sum = 0;
	for (var i = 0; i < 5; i++) {
		sum += diceArray[i].number;
	}
	totalScore += sum;
	updateScore();
	console.log('User won ' + sum + ' points with a 4OAK!');
	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isSmallStraight(diceArray) {
	// Small straight is Sequence of 4
	if (
		diceArray[1].number == diceArray[0].number + 1 &&
		diceArray[2].number == diceArray[1].number + 1 &&
		diceArray[3].number == diceArray[2].number + 1
	) {
		console.log('Small straight!');
		document.getElementById('ssScoreButton').disabled = false;
		return true;
	} else if (
		diceArray[2].number == diceArray[1].number + 1 &&
		diceArray[3].number == diceArray[2].number + 1 &&
		diceArray[4].number == diceArray[3].number + 1
	) {
		console.log('Small straight!');
		document.getElementById('ssScoreButton').disabled = false;
		return true;
	} else {
		return false;
	}
}

function scoreSS() {
	// 30 points
	totalScore += 30;
	console.log('User won 30 points with a Small Straight!');
	updateScore();
	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isLargeStraight(diceArray) {
	// Large straight is Sequence of 5
	if (
		diceArray[1].number == diceArray[0].number + 1 &&
		diceArray[2].number == diceArray[1].number + 1 &&
		diceArray[3].number == diceArray[2].number + 1 &&
		diceArray[4].number == diceArray[3].number + 1
	) {
		console.log('Large straight!');
		document.getElementById('lsScoreButton').disabled = false;
		return true;
	} else {
		return false;
	}
}

function scoreLS() {
	// 30 points
	totalScore += 30;
	console.log('User won 30 points with a Large Straight!');
	updateScore();
	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isYahtzee(diceArray) {
	if (
		diceArray[0].number == diceArray[1].number &&
		diceArray[1].number == diceArray[2].number &&
		diceArray[2].number == diceArray[3].number &&
		diceArray[3].number == diceArray[4].number
	) {
		console.log('Yahtzee!!');
		document.getElementById('yahtzee').innerHTML = 'Yahtzee!';
		return true;
	} else {
		return false;
	}
}

function chance(diceArray) {
	var amount = diceArray.reduce(function(a, b) {
		return a + b;
	}, 0);
	return amount;
}

function scoreChance() {
	// Sum of all dice
	var sum = 0;
	for (var i = 0; i < 5; i++) {
		sum += diceArray[i].number;
	}
	totalScore += sum;
	console.log('User won ' + sum + ' points with a Chance!');
	updateScore();
	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function selectDie(die) {
	// Check to see if button is selected due to color
	// If orange, unselected.  If yellow, selected
	var dieButton = document.getElementById('dieButton' + die);
	console.log("You've selected die " + die);

	if (dieOneSelect == false) {
		die.style.backgroundColor = '#f6cd61';
		dieOneSelect = true;
	} else {
		die.style.backgroundColor = '#fe8a71';
		dieOneSelect = false;
	}
}

function getRandomNumber() {
	return Math.floor(Math.random() * 6 + 1);
}

function setDie(diceArray) {
	document.getElementById('dice-one').src = 'img/' + diceArray[0].number + '.png';
	document.getElementById('dice-two').src = 'img/' + diceArray[1].number + '.png';
	document.getElementById('dice-three').src = 'img/' + diceArray[2].number + '.png';
	document.getElementById('dice-four').src = 'img/' + diceArray[3].number + '.png';
	document.getElementById('dice-five').src = 'img/' + diceArray[4].number + '.png';
}

function getNewDie(diceArray) {
	// For each die not held, get new number
	var j = 1;
	for (var i = 0; i < diceArray.length; i++) {
		if (diceArray[i].held == false) {
			diceArray[i].number = getRandomNumber();
			console.log(diceArray[i].name + ' new number is ' + diceArray[i].number);
			j++;
		}
	}

	// Set dice images
	setDie(diceArray);
}

function disableAllScoreButtons(scoreButtonArray) {
	for (var i = 0; i < scoreButtonArray.length; i++) {
		document.getElementById(scoreButtonArray[i]).disabled = true;
	}
}

function rollDice() {
	// Show current roll on-screen
	document.getElementById('rollNumber').innerHTML = 'Roll: ' + currentRoll;

	// First roll
	if (currentRoll == 1) {
		console.log('First roll');
		console.log(diceArray);

		// Set dice images on-screen and show possible scores
		setDie(diceArray);
		possibleScores(diceArray);

		// Allow user to hold die for next roll
	}

	if (currentRoll == 2) {
		console.log('#######################');
		console.log('Second roll');

		console.log(diceArray);

		// Check for held die
		for (var i = 0; i < checkboxArray.length; i++) {
			var checkbox = document.getElementById(checkboxArray[i]);
			if (checkbox.checked == true) {
				diceArray[i].held = true;
				console.log('Holding ' + checkboxArray[i]);
			}
		}

		// Get new die for unheld die
		getNewDie(diceArray);
		possibleScores(diceArray);
	}

	// If third roll, freeze all die, select scoring category and restart game flow
	if (currentRoll == 3) {
		console.log('#######################');
		console.log('Final roll!');

		getNewDie(diceArray);
		possibleScores(diceArray);

		// Check for held die
		for (var i = 0; i < checkboxArray.length; i++) {
			var checkbox = document.getElementById(checkboxArray[i]);
			if (checkbox.checked == true) {
				diceArray[i].held = true;
				console.log('Holding ' + checkboxArray[i]);
			}
		}

		// Get new die for unheld die
		getNewDie(diceArray);
		possibleScores(diceArray);

		// Final scoring for round
		// Change roll button text and disable until scoring is chosen
		document.getElementById('rollNumber').innerHTML = 'Next Round';
		document.getElementById('rollNumber').disabled = true;
		// Need user to click on scoring category button
	}

	if (currentRoll == 4) {
		// Initiate new dice roll
		resetBoard();

		// User will pick a score category here
	}

	// Increment currentRoll
	currentRoll++;
}

function resetBoard() {
	console.log('Initiating new dice roll');
	for (i = 0; i < diceArray.length; i++) {
		var num = getRandomNumber();
		var j = i + 1;
		diceArray[i].number = num;
		diceArray[i].held = false; // Set held back to false
	}

	setDie(diceArray);

	console.log('Resetting checkboxes');
	for (var i = 0; i < checkboxArray.length; i++) {
		var checkbox = document.getElementById(checkboxArray[i]);
		checkbox.checked = false;
	}

	// Roll button text change

	currentRoll = 1;
}

function possibleScores(diceArray) {
	// Copy diceArray to tempArray for sorting
	var tempArray = diceArray.slice();

	// Sort array by number
	tempArray.sort((a, b) => {
		return a.number - b.number;
	});

	// Disable all score buttons
	disableAllScoreButtons(scoreButtonArray);

	// Scoring categories for individual numbers
	for (var i = 0; i < diceArray.length; i++) {
		if (diceArray[i].number == 1) {
			document.getElementById('oneScoreButton').disabled = false;
		} else if (diceArray[i].number == 2) {
			document.getElementById('twoScoreButton').disabled = false;
		} else if (diceArray[i].number == 3) {
			document.getElementById('threeScoreButton').disabled = false;
		} else if (diceArray[i].number == 4) {
			document.getElementById('fourScoreButton').disabled = false;
		} else if (diceArray[i].number == 5) {
			document.getElementById('fiveScoreButton').disabled = false;
		} else if (diceArray[i].number == 6) {
			document.getElementById('sixScoreButton').disabled = false;
		}
	}

	// Check for each type of score
	var fhStatus = isFullHouse(tempArray);
	var threeOfKindStatus = isThreeOfKind(tempArray);
	var fourOfKindStatus = isFourOfKind(tempArray);
	var smStrStatus = isSmallStraight(tempArray);
	var lgStrStatus = isLargeStraight(tempArray);
	var yStatus = isYahtzee(tempArray);
	var chanceStatus = chance(tempArray);
}

function updateScore() {
	document.getElementById('totalScore').innerHTML = 'Total Score: ' + totalScore;
}
