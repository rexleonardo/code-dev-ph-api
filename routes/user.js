const router = require('express').Router();
const UserController = require('./../controllers/user');
// const { authCheckToken } = require('./../auth');

router.post('/', (req, res) => {
    if (req.body.password !== req.body.confirmPassword) return res.send(false);
    UserController.register(req.body).then(result => res.send(result))
})

// login
// uri
// http method?
// !Get
// need to access req.body? y
// req body format?
// {
// 	email: "email@email.com"
// 	password: "password"
// }
router.post('/login', (req, res) => {
    UserController.login(req.body).then(result => res.send(result));
})
// details
// return the user details of the logged user
router.get('/:id', (req, res) => {
    UserController.details(req.params.id).then(result => res.send(result));
})

router.get('/details', (req, res) => {

    User.findById(decrypt.id, { password: 0 }).then(user => res.send(user))

});
// enroll
// enroll student

module.exports = router;