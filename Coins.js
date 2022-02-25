function coins(input) {

    index = 0;
    let left = Number(input[index]);
    let coins = 0;

    while (left != 0) {

        if (left >= 2) {
            left -= 2;
            coins++;
            continue;
        } else if (left >= 1) {
            left -= 1;
            coins++;
            continue;
        } else if (left >= 0.5) {
            left -= 0.5;
            left = Number(left.toFixed(2));
            coins++;
            continue;
        } else if (left >= 0.2) {
            left -= 0.2;
            left = Number(left.toFixed(2));
            coins++;
            continue;
        } else if (left >= 0.1) {
            left -= 0.1;
            left = Number(left.toFixed(2));
            coins++;
            continue;
        } else if (left >= 0.05) {
            left -= 0.05;
            left = Number(left.toFixed(2));
            coins++;
            continue;
        } else if (left >= 0.02) {
            left -= 0.02;
            left = Number(left.toFixed(2));
            coins++;
            continue;
        } else if (left >= 0.01) {
            left -= 0.01;
            coins++;
        }
    }
    console.log(coins)
}
coins([1.23]);