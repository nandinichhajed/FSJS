// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

// str = prompt("enter a file name with extension: ")
str = 'new_file.py'
extension = str.indexOf('.')

dot = str.substr(extension + 1)
console.log(dot);