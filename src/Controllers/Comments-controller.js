const Comment = require('../Models/Comments');

// Função para buscar todos os comentários
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao carregar comentários', error: error.message });
  }
};

// Função para adicionar um novo comentário
exports.addComment = async (req, res) => {
  try {
    const { name, profilePic, comment } = req.body;
    const newComment = new Comment({ name, profilePic, comment });
    await newComment.save();
    res.status(201).json({ message: 'Comentário enviado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar comentário', error: error.message });
  }
};
