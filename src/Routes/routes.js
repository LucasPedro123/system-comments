const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/Comments-controller');

// Rota para buscar todos os comentários
router.get('/comments', commentController.getComments);

// Rota para adicionar um novo comentário
router.post('/comments', commentController.addComment);

module.exports = router;
