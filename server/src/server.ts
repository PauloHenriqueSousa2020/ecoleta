// Arquivo responsável por executar a aplicação

import express from 'express'; // Importando as funcionalidades do Express
import path from 'path'; // Importando as funcionalidades do Path
import routes from './routes' // Importando o arquivo de rotas do sistema
import cors from 'cors'; 
const app = express(); // Atribuindo a variável app as funcionalidades do Express

app.use(cors());
app.use(express.json()); // Permitindo que a variável app utilize o JSON
app.use(routes); // Atribuindo a variável app que utilize o arquivo routes

// Criando rota para acessar as imagens staticas
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333); // Aplicação roda na porta 3333