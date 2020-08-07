// Arquivo responsável pela criação da tabela ITEMS

import Knex from 'knex';

// Funcão utilizada para realizar alterações no banco
export async function up(knex: Knex){
    // CRIAR A TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

// Funcão utilizada para excluir o a tabela do banco caso tenha algum problema
export async function down(knex: Knex){
    // DELETAR A TABELA
    return knex.schema.dropTable('items')
}