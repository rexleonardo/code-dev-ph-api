const User = require('./../models/User');
const bcrypt = require('bcrypt');
const auth = require('./../auth');

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

module.exports.login = (params) => {
    // params = {
    //     "email": "email",
    //     "password": "password"
    // }
    let { email, password } = params;
    // return
    // check email in the database
    return User.findOne({ email })
        .then(user => {
            if (!user) return false;

            // compare password to hashed password
            // hashed pw = user.password
            let isPasswordMatched = bcrypt.compareSync(password, user.password);
            if (!isPasswordMatched) return false;

            // create a token
            let accessToken = auth.createAccessToken(user)

            return {
                accessToken: accessToken
            }
        })
}

module.exports.details = (id) => {
    return User.findById(id, { password: 0 }).then(user => user)
}