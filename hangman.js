function hangman(guess) {
	var answer = "joshua";
	if (guess.length > 1) {
		if (guess != answer) {
			return -1;
		} else {
			return "Amazing Guess";
		}
	}

	for (var i = 0; i < answer.length; i++) {
		if (answer[i] == guess) {
			return i;
		}
	}

	return -1;
}