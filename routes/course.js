const router = require('express').Router();
const CourseController = require('./../controllers/course');

// // get all course
// router.post('/', (req, res) => {
//     CourseController.getAll().then(courses => res.send(courses))
// })

// // get specific course
// router.post('/:courseId', (req, res) => {
//     // res.send("add course routes");
//     CourseController.add().then(course => res.send(course))
// })

// create course
router.post('/', (req, res) => {
    // res.send("add course routes");
    CourseController.add(req.body).then(course => res.send(course))
});

module.exports = router;