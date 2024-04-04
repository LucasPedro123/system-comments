const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/Routes/routes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://LucasP:ckm0urYixx2CI4sQ@clusterdb.8wbgkwd.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
}).catch((error) => {
  console.error('Erro ao conectar com o banco de dados:', error);
});

app.use(bodyParser.json());

const corsOptions = {
    origin: ['http://localhost:5173', 'http://mywebsite-portfolio-three.vercel.app'],
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true // Permitir credenciais
};
  
// Configuração do CORS
app.use(cors(corsOptions));

// Usar o roteador
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
