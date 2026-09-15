const Course = require('../models/Course');

const getCourses = async (req, res, next) => {
    try {
        const courses = await Course.find();
        res.render('courses/index', { courses });
    } catch (error) {
        next(error);
    }
};

const showCreateForm = (req, res) => {
    res.render('courses/new');
};

const createCourse = async (req, res, next) => {
    try {
        const { courseName, description, duration, instructor, maxStudents } = req.body;
        await Course.create({ courseName, description, duration, instructor, maxStudents });

        res.redirect('/courses');
    } catch (error) {
        next(error);
    }
};

const getCourse = async (req, res, next) => {
    try {
        const course = await Course.findById(req.params.id);
        res.render('courses/show', { course });

    } catch (error) {
        next(error);
    }
};
const showEditForm = async (req, res, next) => {
    try {
        const course = await Course.findById(req.params.id);
        res.render('courses/edit', { course });

    } catch (error) {
        next(error);
    }
};

const updateCourse = async (req, res, next) => {
    try {
        const { courseName, description, duration, instructor, maxStudents } = req.body;
        await Course.findByIdAndUpdate( req.params.id,
            { courseName,
                description,
                duration,
                instructor,
                maxStudents
            },
            {
                new: true,
                runValidators: true
            }
        );
        res.redirect('/courses');
    } catch (error) {
        next(error);
    }
};

const deleteCourse = async (req, res, next) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.redirect('/courses');
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getCourses,
    showCreateForm,
    createCourse,
    getCourse,
    showEditForm,
    updateCourse,
    deleteCourse
};