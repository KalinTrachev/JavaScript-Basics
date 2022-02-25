function fishBoat(budget, season, fisherMen) {

    budget = Number(budget);
    fisherMen = parseInt(fisherMen);
    let priceBoat;

    if (season == 'Spring') {
        priceBoat = 3000;
    } else if (season == 'Summer' || season == 'Autumn') {
        priceBoat = 4200;
    } else if (season == 'Winter') {
        priceBoat = 2600;
    }

    if (fisherMen <= 6) {
        priceBoat *= 0.9;
    } else if (fisherMen >= 7 && fisherMen <= 11) {
        priceBoat *= 0.85;
    } else {
        priceBoat *= 0.75;
    }

    if (fisherMen % 2 == 0 && season !=='Autumn') {
        priceBoat *= 0.95;
    }

    let difference = Math.abs(budget - priceBoat);

    if (budget >= priceBoat) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }

}
fishBoat(2000, 'Winter', 13);