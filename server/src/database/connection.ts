// Arquivo responsável pela conexão com o banco de dados

import knex from 'knex'; // Importando as funcionalidades do Knex
import path from 'path'; // Importando as funcionalidades do Path

// Realizando a conexão com o banco de dados
const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection; // Exportando a conexão com o banco de dados