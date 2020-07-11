function isFullHouse(diceArray) {
	// If X X X Y Y
	if (diceArray[0] == diceArray[1] && diceArray[1] == diceArray[2] && diceArray[3] == diceArray[4]) {
		console.log('Found Full House');
		document.getElementById('fullhouse').innerHTML = 'Full house';
		return true;
	} else if (diceArray[0] == diceArray[1] && diceArray[2] == diceArray[3] && diceArray[3] == diceArray[4]) {
		// If X X Y Y Y
		console.log('Found Full House');
		document.getElementById('fullhouse').innerHTML = 'Full house';
		return true;
	} else {
		document.getElementById('fullhouse').innerHTML = null;
		return false;
	}
}

function isThreeOfKind(diceArray) {
	if (diceArray[0] == diceArray[1] && diceArray[1] == diceArray[2]) {
		console.log('Found 3 of Kind!');
		document.getElementById('3ofakind').innerHTML = '3 of a Kind';
		return true;
	} else if (diceArray[1] == diceArray[2] && diceArray[2] == diceArray[3]) {
		console.log('Found 3 of Kind!');
		document.getElementById('3ofakind').innerHTML = '3 of a Kind';
		return true;
	} else if (diceArray[2] == diceArray[3] && diceArray[3] == diceArray[4]) {
		console.log('Found 3 of Kind!');
		document.getElementById('3ofakind').innerHTML = '3 of a Kind';
		return true;
	} else {
		document.getElementById('3ofakind').innerHTML = null;
		return false;
	}
}

function isFourOfKind(diceArray) {
	if (diceArray[0] == diceArray[1] && diceArray[1] == diceArray[2] && diceArray[2] == diceArray[3]) {
		console.log('Found 4 of Kind!');
		document.getElementById('4ofakind').innerHTML = '4 of a Kind';
		return true;
	} else if (diceArray[1] == diceArray[2] && diceArray[2] == diceArray[3] && diceArray[3] == diceArray[4]) {
		console.log('Found 4 of Kind!');
		document.getElementById('4ofakind').innerHTML = '4 of a Kind';
		return true;
	} else {
		document.getElementById('4ofakind').innerHTML = null;
		return false;
	}
}

function isSmallStraight(diceArray) {
	// Small straight is Sequence of 4
	if (diceArray[1] == diceArray[0] + 1 && diceArray[2] == diceArray[1] + 1 && diceArray[3] == diceArray[2] + 1) {
		console.log('Small straight!');
		document.getElementById('smallstraight').innerHTML = 'Small Straight';
		return true;
	} else if (
		diceArray[2] == diceArray[1] + 1 &&
		diceArray[3] == diceArray[2] + 1 &&
		diceArray[4] == diceArray[3] + 1
	) {
		console.log('Small straight!');
		document.getElementById('smallstraight').innerHTML = 'Small Straight';
		return true;
	} else {
		document.getElementById('smallstraight').innerHTML = null;
		return false;
	}
}

function isLargeStraight(diceArray) {
	// Large straight is Sequence of 5
	if (
		diceArray[1] == diceArray[0] + 1 &&
		diceArray[2] == diceArray[1] + 1 &&
		diceArray[3] == diceArray[2] + 1 &&
		diceArray[4] == diceArray[3] + 1
	) {
		console.log('Large straight!');
		document.getElementById('largestraight').innerHTML = 'Large Straight';
		return true;
	} else {
		document.getElementById('largestraight').innerHTML = null;
		return false;
	}
}

function isYahtzee(diceArray) {
	if (
		diceArray[0] == diceArray[1] &&
		diceArray[1] == diceArray[2] &&
		diceArray[2] == diceArray[3] &&
		diceArray[3] == diceArray[4]
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

function rollDice() {
	// Get random numbers
	const num1 = Math.floor(Math.random() * 6 + 1);
	const num2 = Math.floor(Math.random() * 6 + 1);
	const num3 = Math.floor(Math.random() * 6 + 1);
	const num4 = Math.floor(Math.random() * 6 + 1);
	const num5 = Math.floor(Math.random() * 6 + 1);
	console.log('Dice one is ' + num1);
	console.log('Dice two is ' + num2);
	console.log('Dice three is ' + num3);
	console.log('Dice four is ' + num4);
	console.log('Dice five is ' + num5);

	// Set img in HTML
	document.getElementById('dice-one').src = 'img/' + num1 + '.png';
	document.getElementById('dice-two').src = 'img/' + num2 + '.png';
	document.getElementById('dice-three').src = 'img/' + num3 + '.png';
	document.getElementById('dice-four').src = 'img/' + num4 + '.png';
	document.getElementById('dice-five').src = 'img/' + num5 + '.png';

	// Check possible scores
	var diceArray = [ num1, num2, num3, num4, num5 ];

	possibleScores(diceArray);
}

function possibleScores(diceArray) {
	console.log(diceArray);

	// Count each number
	var ones = diceArray.filter((x) => x === 1).length;
	var twos = diceArray.filter((x) => x === 2).length;
	var threes = diceArray.filter((x) => x === 3).length;
	var fours = diceArray.filter((x) => x === 4).length;
	var fives = diceArray.filter((x) => x === 5).length;
	var sixes = diceArray.filter((x) => x === 6).length;

	// Sort array
	diceArray.sort();
	console.log('Sorted: ' + diceArray);

	// Check for each type of score
	var fhStatus = isFullHouse(diceArray);
	var threeOfKindStatus = isThreeOfKind(diceArray);
	var fourOfKindStatus = isFourOfKind(diceArray);
	var smStrStatus = isSmallStraight(diceArray);
	var lgStrStatus = isLargeStraight(diceArray);
	var yStatus = isYahtzee(diceArray);
	var chanceStatus = chance(diceArray);

	// Update scoreboard
	// ScoreArray is all items set to true
	var scoreArray = [ fhStatus, threeOfKindStatus, fourOfKindStatus, smStrStatus, lgStrStatus, yStatus, chanceStatus ];
	scoreArray = scoreArray.filter((x) => x === true);
	updateScore(scoreArray);

	// Console Logging
	console.log('Full house: ' + fhStatus);
	console.log('3 of Kind: ' + threeOfKindStatus);
	console.log('4 of Kind: ' + fourOfKindStatus);
	console.log('Small Straight: ' + smStrStatus);
	console.log('Large Straight: ' + lgStrStatus);
	console.log('Yahtzee: ' + yStatus);
	console.log('Chance: ' + chanceStatus);
}

function updateScore(scoreArray) {
	console.log(scoreArray);
	// document.getElementById('fullhouse').innerHTML = 'Full House: ' + scoreArray[0];
	// document.getElementById('3ofakind').innerHTML = '3 of a Kind: ' + scoreArray[1];
	// document.getElementById('4ofakind').innerHTML = '4 of a Kind: ' + scoreArray[2];
	// document.getElementById('smallstraight').innerHTML = 'Small Straight: ' + scoreArray[3];
	// document.getElementById('largestraight').innerHTML = 'Large Straight: ' + scoreArray[4];
}

// function highlightDice(dice) {
// 	if (diceOneState == 'off') {
// 		console.log('Turning ' + dice + ' on');
// 		diceOneState = 'on';
// 		document.getElementById('dice-' + dice).style.boxShadow = '10px 12px 12px 10px #f83';
// 	}
// 	if (diceOneState == 'on') {
// 		console.log('Turning ' + dice + ' off');
// 		diceOneState = 'off';
// 		document.getElementById('dice-' + dice).style.boxShadow = null;
// 	}
// }
