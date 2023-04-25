// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 23]

// sorting max min
// console.log(ages.sort());
// console.log(Math.max(...ages));
// console.log(Math.min(...ages));

// median age
let x = ages.length
if (x % 2 == 0){
    let p = ages[(ages.length)/2]
    let q = ages[((ages.length)/2) - 1]
    console.log(p);
    console.log(q);

    median = p + q
    console.log(median/2);
} else {
    // r = ages[abs((ages.length)/2)]
    r = ages[Math.floor(ages.length/2)]
    console.log(r/2);
}


// avg age
let sum = 0
for (i of ages){
    sum = sum + i
}
let avg = sum/ages.length
// console.log(avg);

// range of ages
let a = Math.max(...ages)
let b = Math.min(...ages)

// console.log(Math.max(a-b));

// comparing values
let m = Math.abs(b - avg)
let n = Math.abs(a - avg)
// console.log(m);
// console.log(n);