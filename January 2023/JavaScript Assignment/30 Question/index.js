// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

m = prompt("Enter First number: ")
n = prompt("Enter Second number: ")

a = parseInt(m)
b = parseInt(n)

c = prompt("Enter Operation to perform (+ - * / % ): ")

if (c == '+'){
    console.log(a + b);
} else if (c == '-') {
    console.log(a - b);
} else if (c == '*') {
    console.log(a * b);
} else if (c == '/') {
    console.log(a / b);
} else if (c == '%') {
    console.log(a % b);
} else {
    console.log("not a valid operation");
}
