function bonusPoints(arg) {

    let score = Number(arg);
    let bonus = 0;

    if (score <= 100) {
        bonus = 5;
    } else if (score > 1000) {
        bonus = 10 / 100 * score;
    } else {
        bonus = 20 / 100 * score;
    }

    if (score % 2 === 0) {
        bonus += 1;
    } else if (score % 10 === 5) {
        bonus += 2;
    }

    let totalScore = score + bonus;

    console.log(bonus);
    console.log(totalScore);
}

bonusPoints(175);