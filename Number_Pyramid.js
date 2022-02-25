function numberPyramid(input) {

    let num = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printed = '';

    for (let rows = 1; rows <= num; rows++) {

        for (columns = 1; columns <= rows; columns++) {

            if (current > num) {
                isBigger = true;
                break;
            }
            printed += current + ' ';
            current++;
        }
        console.log(printed);
        printed = '';
        if (isBigger) {
            break;
        }
    }
}
numberPyramid([7]);