const Course = require('../models/Course');

const getCourses = async (req, res, next) => {
    try {
        const courses = await Course.find();
        res.render('courses/index', { courses });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCourses
};