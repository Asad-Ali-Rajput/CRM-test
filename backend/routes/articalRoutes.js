const express = require('express');
const authMiddleware = require('../utils/middleware');
const contentController = require('../controllers/content');

const router = express.Router();

// Use the authMiddleware to check JWT token before accessing content routes
router.use(authMiddleware);

// Your content routes
router.get('/', contentController.listContent);
router.post('/add', contentController.createContent);
router.get('/:id', contentController.getContent);
router.put('/:id', contentController.updateContent);
router.delete('/:id', contentController.deleteContent);

module.exports = router;
