const fs = require('fs');

puzzle4 = function() {
    const instructions = fs.readFileSync('data/4.txt').toString().split('\n');
    instructions.splice(-1, 1);
    instructions.sort();
    var partOne = 0;
    var partTwo = 0;



    return {
        "Part One": partOne,
        "Part Two": partTwo
    }
};

console.log(puzzle4());
