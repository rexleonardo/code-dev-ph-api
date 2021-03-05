const User = require('./../models/User');
const bcrypt = require('bcrypt');

module.exports.register = (params) => {

    // method1
    let user = new User({
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        mobileNo: params.mobileNo,
        password: bcrypt.hashSync(params.password, 10)
    })

    return user.save()
        .then(() => true)
        .catch(() => false)

    // method2
    // let user = new User({
    //  firstName,
    //  lastname,
    //  email,
    //  mobileNo,
    //  password
    // })
}