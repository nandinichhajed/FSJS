const mySqrt = function(x) {
    if (x === 0) return 0;

    let left = 1;
    let right = Math.floor(x / 2) + 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};

const x1 = 4;
const result1 = mySqrt(x1);
console.log(result1);

const x2 = 8;
const result2 = mySqrt(x2);
console.log(result2);
