const fs = require('fs');

puzzle3 = function() {
    const instructions = fs.readFileSync('data/3.txt').toString().split('\n');
    instructions.splice(-1, 1);
    var partOne = 0;
    var partTwo = 0;

    var claims = {};
    var squares = {};
    for (line of instructions) {
        let a = line.match(/\d+/g).map(Number);
        let id = a[0];
        let left = a[1];
        let top = a[2];
        let width = a[3];
        let height = a[4];
        claims[id] = [];

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                let xy = (left + i)+','+(top + j);
                claims[id].push(xy);
                if (xy in squares) {
                    squares[xy] += 1;
                } else {
                    squares[xy] = 1;
                }
            }
        }
    }

    for (s of Object.values(squares)) {
        if (s > 1) {
            partOne += 1;
        }
    }

    for (id of Object.keys(claims)) {
        if (claims[id].every(function(square){return squares[square] === 1})) {
            var partTwo = Number(id);
            break
        }
    }

    return {
        "Part One": partOne,
        "Part Two": partTwo
    }
};

console.log(puzzle3());
