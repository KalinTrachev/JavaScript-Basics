function building(input){
    let floors = Number(input.shift());
    let numberRooms = Number(input.shift());
    let row = "";
 
    for (let i = floors; i > 0; i--){
        for (let j = 0; j < numberRooms; j++){
            if (i === floors){
                row += `L${i}${j} `;
                continue;
            }
            if (i % 2 === 0 ){
                row += `O${i}${j} `
            } else {
                row += `A${i}${j} `
            }
        }
        console.log(row);
        row = "";
    }
}
building()