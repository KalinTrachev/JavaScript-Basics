function sumPrime(input) {

    let index = 0;
    let n = input[index];
    index++;
    let sumOfNonPrimeNumbers = 0;
    let sumOfPrimeNumbers = 0;

    while (n != 'stop') {
        n = Number(n);
        let isPrime = true;
        if (n < 0) {
            console.log('Number is negative.');
            n = input[index];
            index++;
            continue;
        }
        if (n == 1){
            isPrime = false;
        }
        let maxDivider = Math.sqrt(n);
        for (let i = 2; i <= maxDivider; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumOfPrimeNumbers += n;
        } else {
            sumOfNonPrimeNumbers += n;
        }
        n = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrimeNumbers}`);
}
sumPrime();