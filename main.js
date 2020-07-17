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

	// Disable scoreStore 'ones' and disabled Ones score button
	scoreStore.find((k) => k.name == 'ones').used = true;
	document.getElementById('oneScoreButton').disabled = true;

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
	document.getElementById('twoScoreButton').disabled = true;

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

	// Disable scoreStore 'threes' and Three score button
	scoreStore.find((k) => k.name == 'threes').used = true;
	document.getElementById('threeScoreButton').disabled = true;

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

	// Disable scoreStore 'fours' and Fours score button
	scoreStore.find((k) => k.name == 'fours').used = true;
	document.getElementById('fourScoreButton').disabled = true;

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

	// Disable scoreStore 'fives' and Fives score button
	scoreStore.find((k) => k.name == 'fives').used = true;
	document.getElementById('fiveScoreButton').disabled = true;

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

	// Disable scoreStore 'sixes' and Sixes score button
	scoreStore.find((k) => k.name == 'sixes').used = true;
	document.getElementById('sixScoreButton').disabled = true;

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
	// Validation
	var diceArraySorted = diceArray.slice();
	diceArraySorted.sort((a, b) => {
		return a.number - b.number;
	});
	var valid = isFullHouse(diceArraySorted);
	console.log(diceArraySorted);
	if (valid) {
		console.log('User won 25 points with a Full House!');
		updateScore(25);

		// Disable scoreStore 'fullhouse' and Full House score button
		scoreStore.find((k) => k.name == 'fullhouse').used = true;
		document.getElementById('fhScoreButton').disabled = true;

		// Function for board reset
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	} else {
		console.log("This isn't a Full House yo...");
		document.getElementById('fhScoreButton').disabled = true;
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	}
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
	// Validation
	var diceArraySorted = diceArray.slice();
	diceArraySorted.sort((a, b) => {
		return a.number - b.number;
	});
	var valid = isThreeOfKind(diceArraySorted);
	if (valid) {
		var sum = 0;
		for (var i = 0; i < 5; i++) {
			sum += diceArray[i].number;
		}

		console.log('User won ' + sum + ' points with a 3OAK!');
		updateScore(sum);

		// Disable scoreStore '3oak' and 3OAK score button
		scoreStore.find((k) => k.name == '3oak').used = true;
		document.getElementById('threeoakScoreButton').disabled = true;

		// Function for board reset
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	} else {
		console.log("This isn't a 3OAK yo...");
		document.getElementById('threeoakScoreButton').disabled = true;
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	}
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
	// Validation
	var diceArraySorted = diceArray.slice();
	diceArraySorted.sort((a, b) => {
		return a.number - b.number;
	});
	var valid = isFourOfKind(diceArraySorted);
	if (valid) {
		var sum = 0;
		for (var i = 0; i < 5; i++) {
			sum += diceArray[i].number;
		}
		updateScore(sum);

		// Disable scoreStore '4oak' and 4OAK score button
		scoreStore.find((k) => k.name == '4oak').used = true;
		document.getElementById('fouroakScoreButton').disabled = true;

		console.log('User won ' + sum + ' points with a 4OAK!');
		// Function for board reset
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	} else {
		console.log("This isn't a 4OAK yo...");
		document.getElementById('fouroakScoreButton').disabled = true;
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	}
}

function isSmallStraight(diceArray) {
	// Small straight is Sequence of 4
	// Pull unique numbers from sorted array
	const diceArrayUnique = [ ...new Set(diceArray.map((x) => x.number)) ];
	console.log(diceArrayUnique);
	var diceArraySorted = diceArrayUnique.slice();
	diceArraySorted.sort((a, b) => {
		return a - b;
	});
	console.log('Final sorted for SS');
	console.log(diceArraySorted);

	if (
		diceArraySorted[1] == diceArraySorted[0] + 1 &&
		diceArraySorted[2] == diceArraySorted[1] + 1 &&
		diceArraySorted[3] == diceArraySorted[2] + 1
	) {
		return true;
	} else {
		return false;
	}
}

function scoreSS() {
	// 30 points
	// Validation
	var valid = isSmallStraight(diceArray);
	if (valid) {
		console.log('User won 30 points with a Small Straight!');
		updateScore(30);

		// Disable scoreStore 'smallstraight' and Small Straight score button
		scoreStore.find((k) => k.name == 'smallstraight').used = true;
		document.getElementById('ssScoreButton').disabled = true;

		// Function for board reset
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	} else {
		console.log("This isn't a Small Straight yo...");
		document.getElementById('ssScoreButton').disabled = true;
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	}
}

function isLargeStraight(diceArray) {
	// Large straight is Sequence of 5
	diceArray.sort((a, b) => {
		return a.number - b.number;
	});
	console.log('Large straight sorted:');
	console.log(diceArray);
	if (
		diceArray[1] == diceArray[0] + 1 &&
		diceArray[2] == diceArray[1] + 1 &&
		diceArray[3] == diceArray[2] + 1 &&
		diceArray[4] == diceArray[3] + 1
	) {
		return true;
	} else {
		return false;
	}
}

function scoreLS() {
	// 40 points
	// Validation
	var valid = isLargeStraight(diceArray);
	if (valid) {
		console.log('User won 40 points with a Large Straight!');
		updateScore(40);

		// Disable scoreStore 'largestraight' and Large Straight score button
		scoreStore.find((k) => k.name == 'largestraight').used = true;
		document.getElementById('lsScoreButton').disabled = true;

		// Function for board reset
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	} else {
		console.log("This isn't a Large Straight yo...");
		document.getElementById('lsScoreButton').disabled = true;
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
	}
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
		resetBoard();
		document.getElementById('rollNumber').disabled = false;
		return true;
	} else {
		return false;
	}
}

function chance(diceArray) {
	var amount = diceArray.reduce(function(a, b) {
		return a + b;
	}, 0);

	// Disable scoreStore 'chance' and Chance score button
	scoreStore.find((k) => k.name == 'chance').used = true;
	document.getElementById('chanceScoreButton').disabled = true;

	return amount;
}

function scoreChance() {
	// Sum of all dice
	var sum = 0;
	for (var i = 0; i < 5; i++) {
		sum += diceArray[i].number;
	}
	console.log('User won ' + sum + ' points with a Chance!');

	// Disable scoreStore 'chance' and Chance score button
	scoreStore.find((k) => k.name == 'chance').used = true;
	document.getElementById('chanceScoreButton').disabled = true;

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

	console.log(scoreStore);

	// Check for game over
	isGameOver = scoreStore.every((x) => x.used === true);

	// First roll
	if (currentRoll == 1 && isGameOver == false) {
		console.log('Game over: ' + isGameOver);
		console.log('First roll');
		console.log(diceArray);

		// Set dice images on-screen and show possible scores
		setDie(diceArray);

		// Check for Yahtzee
		if (isYahtzee(diceArray)) {
			updateScore(sum);
			resetBoard();
			currentRoll = 1;
		}
	}

	if (currentRoll == 2) {
		console.log('#######################');
		console.log('Second roll');

		// Get new die for unheld die
		getNewDie(diceArray);

		// Check for Yahtzee
		if (isYahtzee(diceArray)) {
			updateScore(sum);
			resetBoard();
			currentRoll = 1;
		}
	}

	// If third roll, freeze all die, select scoring category and restart game flow
	if (currentRoll == 3) {
		console.log('#######################');
		console.log('Final roll!');

		getNewDie(diceArray);

		// Check for Yahtzee
		if (isYahtzee(diceArray)) {
			updateScore(sum);
			resetBoard();
			currentRoll = 1;
		}

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

	if (currentRoll == 1 && isGameOver == true) {
		console.log('Game Over');
		console.log('Total score: ' + totalScore);
	}

	// Increment currentRoll
	currentRoll++;
}

function resetBoard() {
	console.log('Initiating new dice roll');
	for (i = 0; i < diceArray.length; i++) {
		var num = getRandomNumber();
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

function updateScore(score) {
	totalScore += score;
	document.getElementById('totalScore').innerHTML = 'Total Score: ' + totalScore;
}
