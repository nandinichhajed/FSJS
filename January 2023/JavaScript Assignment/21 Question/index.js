// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = require("../19 Question/country")

const cont = "Ethiopia"
const index = countries.indexOf(cont)

if (index !== -1){
    console.log("Ethiopia");
} else {
    countries.push("Ethiopia")
    console.log(countries);
} 