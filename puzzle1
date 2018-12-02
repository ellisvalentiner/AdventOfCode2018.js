var fs = require('fs');

puzzle1 = function() {
    var instructions = fs.readFileSync('data/1.txt').toString().split('\n').map(Number);
    instructions.splice(-1, 1);
    var cumulative_sum = [];
    instructions.reduce(function(a,b,i) {
        return cumulative_sum[i] = a+b;
    }, 0);
    var partone = cumulative_sum[cumulative_sum.length-1];

    var frequency = 0;
    var seen = [frequency];
    var notfound = true;

    while (notfound) {
        for (const delta of instructions) {
            frequency += delta;
            if (seen[frequency]) {
                var parttwo = frequency;
                notfound = false;
                break;
            } else {
                seen.push(frequency);
            }
        }
    }

    return {
        "Part One": partone,
        "Part Two": parttwo
    };
};

console.log(puzzle1());
