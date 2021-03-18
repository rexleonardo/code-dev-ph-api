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
    // return course.save().then((course, err) => {
    //     return err ? false : true
    // })
}

module.exports.getAll = () => {
    // return Course.find().then(courses => courses).then()
    return Course.find({ isActive: true }).then(courses => {
        return courses
    })
}

module.exports.getAllAdmin = () => {
    return Course.find().then(courses => {
        return courses
    })
}

module.exports.archive = courseId => {
    return Course.findByIdAndUpdate(courseId, { isActive: false })
        .then(() => true)
}

module.exports.reactivate = courseId => {
    return Course.findByIdAndUpdate(courseId, { isActive: true })
        .then(() => true)
        .catch(() => false)
}

module.exports.get = courseId => {
    return Course.findById(courseId).then((course) => course)
}

module.exports.update = reqBody => {
    return Course.findByIdAndUpdate(reqBody._id, {
            name: reqBody.name,
            description: reqBody.description,
            price: reqBody.price
        })
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
//  console.log(args.name)
// }

// LEVEL 3

// let person = {
//  age: 13,
//  height: 164,
//  name: "Rex"
// }

// invoke
// myFunc(person)

// declaration
// function myFunc(args) {
//  console.log(args.age)
// }