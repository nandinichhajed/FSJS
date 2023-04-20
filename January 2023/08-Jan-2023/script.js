// alert("hello")

// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// inheritance / prototypal inheritance / channing
let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]

let heroPower = {
    thodr: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`spidey power is ${this.spiderman}`)
    }
}

Object.prototype.nandini = function() {
    console.log(`this is nandini's object`);
}

// we wont find heyNandini function in prototype of object as it was injected in the prototype of array
Array.prototype.heyNandini = function() {
    console.log(`Nandini says hello`)
}

myHeros.nandini()

// arrays are inheriting from object (object is parent to all)
// in my heros nandini's function is found into - arrays prototypes prototype

const User = {
    nanme: 'lilo',
    email: 'lilo@gmail.com'
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssignment = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    // we want all the TeachingSupport property should be Available to us in TSAssignment
    // __proto__ is a decleared property
    // 1. TO dump all its property into prototype
    __proto__: TeachingSupport
}

// teacher binded with user
Teacher.__proto__ = User

// new/morden syntax
// object to change its prototype - from where its going to change
Object.getPrototypeOf(TeachingSupport, Teacher)


// Goal: to return true length of string

String.prototype.trulength = function() {
    // this keyword will give context of where it is running like on that variable or string it is running
    console.log(`trulength is ${this.trim().length}`);
}

myName = 'Nandini    '

// this keyword always target towards who is calling this

console.log(myName.trulength());