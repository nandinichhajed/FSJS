// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let a = prompt("Enter score of student: ")

if (80 <= a && a <= 100) {
    console.log(`A`);
} else if (70 <= a && a <= 79){
    console.log(`B`);
} else if (60 <= a && a <= 69){
    console.log(`C`);
} else if (50 <= a && a <= 59){
    console.log(`D`);
} else if (50 <= a && a <= 59){
    console.log(`F`);
} else {
    console.log(`Enter score between 0 - 100`);
}
