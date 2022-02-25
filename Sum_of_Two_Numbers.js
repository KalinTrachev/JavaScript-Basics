function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combination = 0;
    let breakFlag = false;

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {
            combination++;

            if ((i + j) === magicNumber) {
                breakFlag = true;
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }
        if (breakFlag) {
            break;
        }
    }
    if (breakFlag === false) {
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers([23,
    24,
    20,
])