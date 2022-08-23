// what are objects good for? storing groups of related Data
// it doesnt matter if you put quotes around keys
let person = {
    firstName: 'kendell',
    lastName: 'Andrews',
    age: 27
}
// console.log(person.firstName)
// console.log(person.lastName)

// // destructuring
// let meal = {
//     appetizer: 'chips and salsa',
//     entree: 'steak and bean burrito',
//     dessert: 'fried ice cream',
//     drink: 'dr. pepper'
// }

// // let dessert = meal.dessert
// let {dessert} = meal

// console.log(dessert)



//For in Loops

// class notes Key words:
// 1st.constructor () (contains properties they will have, seperate by cama)
//2nd.super 
// this
// always capitalize first letter of every word 
// extends
// new

class Pet {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}

let lassie = new Pet('Lassie', 7)

console.log(lassie)

