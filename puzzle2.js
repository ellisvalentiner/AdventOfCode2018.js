const fs = require('fs');

puzzle2 = function() {
    const instructions = fs.readFileSync('data/2.txt').toString().split('\n').splice(-1, 1);
    let has2 = 0;
    let has3 = 0;

    // Part One
    for (let i = 0; i < instructions.length; i++) {
        let line = instructions[i];
        let d = {};
        for (let j = 0; j < line.length; j++) {
            if (!d[line[j]]) {
                d[line[j]] = 0;
            }
            ++d[line[j]];
        }
        if (Object.keys(d).some(k => d[k] === 2)) {
            ++has2;
        }
        if (Object.keys(d).some(k => d[k] === 3)) {
            ++has3;
        }
    }
    let partOne = has2 * has3;

    // Part Two
    var found = false;
    for (var i = 0; i < instructions.length; i++) {
        for (var j = 0; j < i; j++) {
            var x = instructions[i].split('');
            var y = instructions[j].split('');
            var differences = 0;
            var partTwo = "";
            for (var m = 0; m < x.length; m++) {
                if (x[m] === y[m]) {
                    partTwo += y[m];
                } else {
                    ++differences;
                    if (differences > 1) {
                        break;
                    }
                }
            }
            if (differences === 1) {
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }

    return {
        "Part One": partOne,
        "Part Two": partTwo
    }
};

console.log(puzzle2());
