// Arquivo responsável pela criação da tabela POINT_ITEMS

import Knex from 'knex';

// Funcão utilizada para realizar alterações no banco
export async function up(knex: Knex){
    // CRIAR A TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        table.integer('point_id').notNullable().references('id').inTable('points');
        table.integer('item_id').notNullable().references('id').inTable('items');
    })
}

// Funcão utilizada para excluir o a tabela do banco caso tenha algum problema
export async function down(knex: Knex){
    // DELETAR A TABELA
    return knex.schema.dropTable('point_items')
}