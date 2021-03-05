const Course = require('./../models/Course');

// reqBody AKA params
module.exports.add = (reqBody) => {
    let course = new Course({
        name: reqBody.name,
        description: reqBody.description,
        price: reqBody.price
    })
    return course.save()
        .then(() => true)
        .catch(() => false)
}

// LEVEL 1

// invoke
// myFunc("test")

// declaration
// function myFunc(args) {
//     console.log(args)
// }

// LEVEL 2

// invoke
// myFunc({name: "rex"})

// declaration
// function myFunc(args) {
// 	console.log(args.name)
// }

// LEVEL 3

// let person = {
// 	age: 13,
// 	height: 164,
// 	name: "Rex"
// }

// invoke
// myFunc(person)

// declaration
// function myFunc(args) {
// 	console.log(args.age)
// }