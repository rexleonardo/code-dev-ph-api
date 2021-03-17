const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Course name is required']
    },
    description: {
        type: String,
        required: [true, 'Course description is required']
    },
    price: {
        type: Number,
        required: [true, 'Course price is required']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    enrollees: [{
        userId: {
            type: String,
            required: [true, 'User Id is requiredW']
        },
        enrolledOn: {
            type: Date,
            default: new Date()
        }
    }]
})

module.exports = mongoose.model('Course', courseSchema)