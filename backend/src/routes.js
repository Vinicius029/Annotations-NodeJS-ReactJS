const express = require('express');
const router = express.Router();
const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');


// ROTA ANNOTATION
router.get('/annotations', AnnotationController.read);
router.post('/annotations', AnnotationController.create);
router.delete('/annotations/:id', AnnotationController.delete);

// ROTA PRIORITIES
router.get('/priorities', PriorityController.read);
router.post('/priorities/:id', PriorityController.update);

// ROTA CONTENT
router.post('/content/:id', ContentController.update);

module.exports = router;