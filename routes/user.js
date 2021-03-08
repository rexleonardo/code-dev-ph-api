const router = require('express').Router();
const UserController = require('./../controllers/user');
const auth = require('./../auth')

router.post('/', (req, res) => {
    if (req.body.password !== req.body.confirmPassword) return res.send(false);
    UserController.register(req.body).then(result => res.send(result))
})

// login
// uri? /login
// http method? post
//		 need to access reqbody? y
//		 req body format? 
//			{
//				email: "email@email.com",
//				password: "password"
//			}
router.post('/login', (req, res) => {
    UserController.login(req.body).then(result => res.send(result));
})

// details
//		return the user details of the logged user
//		first verify token
//		decode
router.get('/details', auth.verify, (req, res) => {
    // res.send(req.decodedToken)
    UserController.details(req.decodedToken.id).then(result => res.send(result))
})

// enroll
//		enroll student

module.exports = router;