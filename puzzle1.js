var fs = require('fs');

puzzle1 = function() {

    const instructions = fs.readFileSync('data/1.txt', 'utf8').split('\n').map(Number);
    const partOne = instructions.reduce((acc, x) => acc + x, 0);
    instructions.splice(-1, 1);

    var partTwo = 0;
    var seen = new Set();
    var notfound = true;

    while (notfound) {
        for (const delta of instructions) {
            seen.add(partTwo);
            partTwo += delta;
            if (seen.has(partTwo)) {
                notfound = false;
                break;
            }
        }
    }

    return {
        "Part One": partOne,
        "Part Two": partTwo
    };
};

console.log(puzzle1());
