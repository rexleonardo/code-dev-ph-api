const User = require('./../models/User');
const Course = require('./../models/Course');
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

module.exports.enroll = (params) => {
    // method1
    // return User.findById(params.userId)
    // .then( user => {
    //  user.enrollments.push({courseId: params.courseId})
    //  return user.save().then(() =>{
    //      return Course.findById(params.courseId)
    //      .then( course => {
    //          course.enrollees.push({userId : params.userId})
    //          return course.save().then( () =>{
    //              return true
    //          }).catch( () => false)
    //      }).catch(() => false)
    //  }).catch(()=> false)
    // }).catch(()=> false)

    // method2
    // return User.findById(params.userId)
    // .then( user => {
    //  user.enrollments.push({courseId: params.courseId})
    //  return user.save()
    // })
    // .then(() => {
    //  return Course.findById(params.courseId)
    // })
    // .then( course => {
    //  course.enrollees.push({userId: params.userId})
    //  return course.save()
    // })
    // .then(() => true)
    // .catch(() => false)

    // method3
    // return User.findByIdAndUpdate(params.userId,{
    //  $push : { enrollments : { courseId : params.courseId}}
    // }).then( () =>{
    //  return Course.findByIdAndUpdate(params.courseId, {
    //      $push : { enrollees: { userId: params.userId}}
    //  })
    // }).then(()=> true)
    // .catch(() => false)

    // method4
    return Course.findById(params.courseId)
        .then(course => {
            console.log(course)
            if (!course) return false;
            return User.findByIdAndUpdate(params.userId, {
                $push: { enrollments: { courseId: params.courseId } }
            })
        })
        .then(() => {
            return Course.findByIdAndUpdate(params.courseId, {
                $push: { enrollees: { userId: params.userId } }
            })
        }).then(() => true)
        .catch(() => false)
}