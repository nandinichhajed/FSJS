// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

arr = []

for(i = 0; i <= 100; i++){
    arr.push(i)
}

even = []
odd = []

for(i in arr){
    if(i % 2 == 0){
        even.push(i)
    } else {
        odd.push(i)
    }
}

console.log(even);
console.log(odd);
