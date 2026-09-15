const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getCourses);
router.get('/new', courseController.showCreateForm);
router.post('/', courseController.createCourse);
router.get('/:id/edit', courseController.showEditForm);
router.post('/:id/edit', courseController.updateCourse);
router.post('/:id/delete', courseController.deleteCourse);
router.get('/:id', courseController.getCourse);

module.exports = router;