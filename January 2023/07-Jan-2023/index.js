// objects in JS

// <----------------------- PART - 1 ----------------------->

let object = {
    rocket: '🚀',
    home: '🏡'
}

// string, number, bigint, boolean, null, undefine, symbol - Apart from this everything else is obj in JS

let object1 = {
    rocket: '🚀',
    home: '🏡',
    fule: '2',
    conf: {
        palce: 'marse'
    }
}

object1.fule = 200
object1['year'] = 2022

// console.log(object1)

// <----------------------- PART - 2 ----------------------->

let obj2 = new Object() // constructor
obj2.redbook = '📕'
obj2.bluebook = '📘'
obj2.myValue = '1 blue book'

// console.log(obj2);

// <----------------------- PART - 3 ----------------------->
// this syntax is used when we want to copy an exsisting object or inherit an property from an exsisting value
// Nearly all objects in JavaScript are instances of Object
// i.e they inherit some of the property from theit parent

const powers = {
    fly: 'true',
    cordinate: Math.random() + 2
}

const obj3 = Object.create(powers)

// console.log(obj3)
// console.log(obj3.cordinate)
// console.log(Object.getPrototypeOf(obj3));

// <----------------------- PART - 4 ----------------------->
// <-------- basic method -------->
// const obj4 = Object.create({})
// obj4.fule = 200
// obj4['year'] = 2022
// console.log(obj4)

const obj4 = Object.create({})
// Targeted_object - Key - Value
Object.defineProperty(obj4, 'book', {
    // icon: '📘'
    get: () => '📘', // getters
    // TODO: explore how setters work
    enumerable: true
})

// console.log(obj4)
// console.log(obj4.book)
// console.log(Object.getPrototypeOf(obj4));

for (k in obj4){
    // console.log("values in object4 is: ", k)
}

// all objects cant be loop through
// if there is a probleme in looping the object its not that the code is bad, it sometimes there is restriction in object that you can not loop through it

// <----------------------- PART - 4 ----------------------->
const obj5 = {
    comic: 'marvel',
    pen: '',

    // this property reffers to the property which are inside my object

    printComic: function() {
        this.pen = '🖊️🗒️'
        console.log(this)
        return this
    },

    // we can not use this keyword in arrow function as arrowfunction dont have access to this keyword
    // arrow function dont have contxt of this 

    // printaComic: () => {
    //     // this.pen = '🖊️🗒️'
    //     console.log(this)
    // }
}

console.log(obj5.printComic());
// console.log(obj5.printaComic());

// what the first function will return will be taken by second function 
// if we want second method to have access to all the properties thats why we return this 
console.log(obj5.printComic().printComic().printComic());