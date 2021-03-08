const router = require('express').Router();
const CourseController = require('./../controllers/course');
const auth = require('./../auth');

// get all course
router.get('/', (req, res) => {
    CourseController.getAll().then(courses => res.send(courses))
});

// get specific course
router.get('/:courseId', (req, res) => {
    // res.send("add course routes");
    CourseController.get(req.params.courseId).then(course => res.send(course))
});

// create course
router.post('/', auth.verify, (req, res) => {
    // res.send("add course routes");
    CourseController.add(req.body).then(course => res.send(course))
});

// delete course
router.delete('/:courseId', auth.verify, (req, res) => {
    CourseController.archive(req.params.courseId).then(course => res.send(course))
});

// update course
router.put('/', auth.verify, (req, res) => {
    CourseController.update(req.body).then(result => res.send(result))
    // update the selected course
    // course id will be sent in req.body
    // also, updates for course can be accessed in req.body
    // name
    // description
    // price
    // if successful in updating the course, response true otherwise false
})

module.exports = router;