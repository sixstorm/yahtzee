// Global vars
var currentRoll = 1;
var totalScore = 0;
var isGameOver = false;

// Dice Array
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

// Scoring category array

let scoreStore = [
	{
		name: 'ones',
		enabled: true,
		buttonName: 'oneScoreButton',
		used: false
	},
	{
		name: 'twos',
		enabled: true,
		buttonName: 'twoScoreButton',
		used: false
	},
	{
		name: 'threes',
		enabled: true,
		buttonName: 'threeScoreButton',
		used: false
	},
	{
		name: 'fours',
		enabled: true,
		buttonName: 'fourScoreButton',
		used: false
	},
	{
		name: 'fives',
		enabled: true,
		buttonName: 'fiveScoreButton',
		used: false
	},
	{
		name: 'sixes',
		enabled: true,
		buttonName: 'sixScoreButton',
		used: false
	},
	{
		name: 'fullhouse',
		enabled: true,
		buttonName: 'fhScoreButton',
		used: false
	},
	{
		name: '3oak',
		enabled: true,
		buttonName: 'threeoakScoreButton',
		used: false
	},
	{
		name: '4oak',
		enabled: true,
		buttonName: 'fouroakScoreButton',
		used: false
	},
	{
		name: 'smallstraight',
		enabled: true,
		buttonName: 'ssScoreButton',
		used: false
	},
	{
		name: 'largestraight',
		enabled: true,
		buttonName: 'lsScoreButton',
		used: false
	},
	{
		name: 'chance',
		enabled: true,
		buttonName: 'chanceScoreButton',
		used: false
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

// Functions

function scoreOne() {
	// Sum of all die that are ones
	var sum = 0;
	for (var i = 0; i < diceArray.length; i++) {
		if (diceArray[i].number == 1) {
			sum += diceArray[i].number;
		}
	}

	console.log('User won ' + sum + ' points with Ones!');
	updateScore(sum);

	// Disable scoreStore 'ones'
	scoreStore.find((k) => k.name == 'ones').used = true;

	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function scoreTwo() {
	// Sum of all die that are twos
	var sum = 0;
	for (var i = 0; i < diceArray.length; i++) {
		if (diceArray[i].number == 2) {
			sum += diceArray[i].number;
		}
	}

	console.log('User won ' + sum + ' points with Twos!');
	updateScore(sum);

	// Disable scoreStore 'twos'
	scoreStore.find((k) => k.name == 'twos').used = true;

	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function scoreThree() {
	// Sum of all die that are ones
	var sum = 0;
	for (var i = 0; i < diceArray.length; i++) {
		if (diceArray[i].number == 3) {
			sum += diceArray[i].number;
		}
	}

	console.log('User won ' + sum + ' points with Threes!');
	updateScore(sum);

	// Disable scoreStore 'threes'
	scoreStore.find((k) => k.name == 'threes').used = true;

	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function scoreFour() {
	// Sum of all die that are ones
	var sum = 0;
	for (var i = 0; i < diceArray.length; i++) {
		if (diceArray[i].number == 4) {
			sum += diceArray[i].number;
		}
	}

	console.log('User won ' + sum + ' points with Fours!');
	updateScore(sum);

	// Disable scoreStore 'fours'
	scoreStore.find((k) => k.name == 'fours').used = true;

	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function scoreFive() {
	// Sum of all die that are ones
	var sum = 0;
	for (var i = 0; i < diceArray.length; i++) {
		if (diceArray[i].number == 5) {
			sum += diceArray[i].number;
		}
	}

	console.log('User won ' + sum + ' points with Fives!');
	updateScore(sum);

	// Disable scoreStore 'fives'
	scoreStore.find((k) => k.name == 'fives').used = true;

	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function scoreSix() {
	// Sum of all die that are ones
	var sum = 0;
	for (var i = 0; i < diceArray.length; i++) {
		if (diceArray[i].number == 6) {
			sum += diceArray[i].number;
		}
	}

	console.log('User won ' + sum + ' points with Sixes!');
	updateScore(sum);

	// Disable scoreStore 'sixes'
	scoreStore.find((k) => k.name == 'sixes').used = true;

	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isFullHouse(diceArray) {
	// If X X X Y Y
	if (
		diceArray[0].number == diceArray[1].number &&
		diceArray[1].number == diceArray[2].number &&
		diceArray[3].number == diceArray[4].number
	) {
		return true;
	} else if (
		diceArray[0].number == diceArray[1].number &&
		diceArray[2].number == diceArray[3].number &&
		diceArray[3].number == diceArray[4].number
	) {
		// If X X Y Y Y
		return true;
	} else {
		return false;
	}
}

function scoreFullHouse() {
	// 25 points
	console.log('User won 25 points with a Full House!');
	updateScore(25);

	// Disable scoreStore 'fullhouse'
	scoreStore.find((k) => k.name == 'fullhouse').used = true;

	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isThreeOfKind(diceArray) {
	if (diceArray[0].number == diceArray[1].number && diceArray[1].number == diceArray[2].number) {
		return true;
	} else if (diceArray[1].number == diceArray[2].number && diceArray[2].number == diceArray[3].number) {
		return true;
	} else if (diceArray[2].number == diceArray[3].number && diceArray[3].number == diceArray[4].number) {
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

	console.log('User won ' + sum + ' points with a 3OAK!');
	updateScore(sum);

	// Disable scoreStore '3oak'
	scoreStore.find((k) => k.name == '3oak').used = true;

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
		return true;
	} else if (
		diceArray[1].number == diceArray[2].number &&
		diceArray[2].number == diceArray[3].number &&
		diceArray[3].number == diceArray[4].number
	) {
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
	updateScore(sum);

	// Disable scoreStore '4oak'
	scoreStore.find((k) => k.name == '4oak').used = true;

	console.log('User won ' + sum + ' points with a 4OAK!');
	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isSmallStraight(diceArray) {
	// Small straight is Sequence of 4
	// Pull unique numbers from sorted array
	const diceArrayUnique = [ ...new Set(diceArray.map((x) => x.number)) ];

	if (
		diceArrayUnique[1] == diceArrayUnique[0] + 1 &&
		diceArrayUnique[2] == diceArrayUnique[1] + 1 &&
		diceArrayUnique[3] == diceArrayUnique[2] + 1
	) {
		return true;
	} else {
		return false;
	}
}

function scoreSS() {
	// 30 points
	console.log('User won 30 points with a Small Straight!');
	updateScore(30);

	// Disable scoreStore 'smallstraight'
	scoreStore.find((k) => k.name == 'smallstraight').used = true;

	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function isLargeStraight(diceArray) {
	console.log('Checking for LS');
	// Large straight is Sequence of 5
	if (
		diceArray[1].number == diceArray[0].number + 1 &&
		diceArray[2].number == diceArray[1].number + 1 &&
		diceArray[3].number == diceArray[2].number + 1 &&
		diceArray[4].number == diceArray[3].number + 1
	) {
		return true;
	} else {
		return false;
	}
}

function scoreLS() {
	// 40 points
	console.log('User won 40 points with a Large Straight!');
	updateScore(40);

	// Disable scoreStore 'largestraight'
	scoreStore.find((k) => k.name == 'largestraight').used = true;

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
		updateScore(50);
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

	// Disable scoreStore 'chance'
	scoreStore.find((k) => k.name == 'chance').used = true;

	return amount;
}

function scoreChance() {
	// Sum of all dice
	var sum = 0;
	for (var i = 0; i < 5; i++) {
		sum += diceArray[i].number;
	}
	console.log('User won ' + sum + ' points with a Chance!');
	updateScore(sum);
	// Function for board reset
	resetBoard();
	document.getElementById('rollNumber').disabled = false;
}

function getRandomNumber() {
	return Math.floor(Math.random() * 6 + 1);
}

function checkDieBox(number) {
	var j = number - 1;
	if (diceArray[j].held == true) {
		diceArray[j].held = false;
		console.log('Die ' + number + ' is now unheld');
	} else if (diceArray[j].held == false) {
		diceArray[j].held = true;
		console.log('Die ' + number + ' is now held');
	}
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

function disableAllScoreButtons(scoreStore) {
	for (var i = 0; i < scoreStore.length; i++) {
		document.getElementById(scoreStore[i].buttonName).disabled = true;
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
	document.getElementById('rollNumber').innerHTML = 'Next Round';
	currentRoll = 1;
}

function possibleScores(diceArray) {
	// Copy diceArray to tempArray and sort by number for score checking
	console.log('Sorting array');
	var diceArraySorted = diceArray.slice();
	diceArraySorted.sort((a, b) => {
		return a.number - b.number;
	});

	// const diceArrayUnique = [ ...new Set(diceArraySorted.map((x) => x.number)) ];

	// Disable all score buttons so that the possible scoring category
	// buttons can be enabled
	disableAllScoreButtons(scoreStore);

	// Enable buttons for scoring categories
	// Individual numbers

	if (diceArray.find((k) => k.number == 1) && scoreStore.find((k) => k.name == 'ones').used == false) {
		document.getElementById('oneScoreButton').disabled = false;
		console.log('I found ones!');
	}

	if (diceArray.find((k) => k.number == 2) && scoreStore.find((k) => k.name == 'twos').used == false) {
		document.getElementById('twoScoreButton').disabled = false;
		console.log('I found twos!');
	}

	if (diceArray.find((k) => k.number == 3) && scoreStore.find((k) => k.name == 'threes').used == false) {
		document.getElementById('threeScoreButton').disabled = false;
		console.log('I found threes!');
	}

	if (diceArray.find((k) => k.number == 4) && scoreStore.find((k) => k.name == 'fours').used == false) {
		document.getElementById('fourScoreButton').disabled = false;
		console.log('I found fours!');
	}

	if (diceArray.find((k) => k.number == 5) && scoreStore.find((k) => k.name == 'fives').used == false) {
		document.getElementById('fiveScoreButton').disabled = false;
		console.log('I found fives!');
	}

	if (diceArray.find((k) => k.number == 6) && scoreStore.find((k) => k.name == 'sixes').used == false) {
		document.getElementById('sixScoreButton').disabled = false;
		console.log('I found sixes!');
	}

	// Special scoring categories
	if (isFullHouse(diceArraySorted) && scoreStore.find((k) => k.name == 'fullhouse').used == false) {
		document.getElementById('fhScoreButton').disabled = false;
		console.log('Found Full House');
	}

	if (isThreeOfKind(diceArraySorted) && scoreStore.find((k) => k.name == '3oak').used == false) {
		console.log('Found 3 of Kind!');
		document.getElementById('threeoakScoreButton').disabled = false;
	}

	if (isFourOfKind(diceArraySorted) && scoreStore.find((k) => k.name == '4oak').used == false) {
		console.log('Found 4 of Kind!');
		document.getElementById('fouroakScoreButton').disabled = false;
	}

	if (isSmallStraight(diceArraySorted) && scoreStore.find((k) => k.name == 'smallstraight').used == false) {
		console.log('Found Small straight!');
		document.getElementById('ssScoreButton').disabled = false;
	} else {
		document.getElementById('ssScoreButton').disabled = true;
	}

	if (isLargeStraight(diceArraySorted) && scoreStore.find((k) => k.name == 'largestraight').used == false) {
		console.log('Found Large straight!');
		document.getElementById('lsScoreButton').disabled = false;
	} else {
		document.getElementById('lsScoreButton').disabled = true;
	}

	if (scoreStore.find((k) => k.name == 'chance').used == false) {
		console.log('Chance!');
		document.getElementById('lsScoreButton').disabled = false;
	}

	// var fhStatus = isFullHouse(tempArray);
	// var threeOfKindStatus = isThreeOfKind(tempArray);
	// var fourOfKindStatus = isFourOfKind(tempArray);
	// var smStrStatus = isSmallStraight(tempArray);
	// var lgStrStatus = isLargeStraight(tempArray);
	// var yStatus = isYahtzee(tempArray);
	// var chanceStatus = chance(tempArray);
}

function updateScore(score) {
	totalScore += score;
	document.getElementById('totalScore').innerHTML = 'Total Score: ' + totalScore;
}
