const jwt = require('jsonwebtoken');
// const User = require('./models/User');

module.exports.createAccessToken = (user) => {
    let accessToken = jwt.sign({
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.SECRET);

    return accessToken;
}

// module.exports.authCheckToken = (req, res, next) => {
        //     if (!req.headers.authorization) return res.send("Unauthenticated");
        //     let token = req.headers.authorization.replace("Bearer ", "");
        //     let decoded = jwt.verify(token, process.env.SECRET_KEY);
        //     console.log(decoded._id) // bar
        //     User.findById(decoded._id)
        //         .then(user => {
        //             if (!user) return res.send("Unauthenticated");
        //             next()
        //         })
        // }