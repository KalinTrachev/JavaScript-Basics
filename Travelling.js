function travelling(input) {

    let destination = input.shift();

    while (destination !== "End") {
        let budget = Number(input.shift());
        let money = Number(input.shift());
        let total = 0;
        while (total < budget) {
            total += Number(money);
            if (total >= budget) {
                console.log(`Going to ${destination}!`);
                break;
            }
            money = Number(input.shift());
        }
        destination = input.shift();

    }

}
travelling();