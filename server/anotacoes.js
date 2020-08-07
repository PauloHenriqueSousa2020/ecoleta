// ROTA: Endereço completo da requisição
// RECURSO: Qual a entidade está sendo acessada pelo sistema

// GET: Buscar uma ou mais informações no back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Deleter uma informação existente no back-end

// POST: http://localhost:3333/users = Criar novo usuário
// GET: http://localhost:3333/users = Listar todos os usuários
// GET: htpp://localhost:3333/users/5 = Listar usuário com id 5

// REQUEST PARAM: Parâmetros que vem na própria rota que indetificam um recurso
// QUERY PARAM: Parâmetros que vem na própria rota, geralmente opcionais, para filtros, paginação e etc.
// REQUEST PARAM: Parâmetros para criação/atualização de informações 

// TIPOS DE BANCO DE DADOS:
// SQL: Postgres, MySQL, SQLite, SQL Server
// NoSQL: MongoDB, CouchDB

// Banco utilizado na aplicação, SQLite com Knex.JS

// ENTIDADES DA APLICAÇÃO (TABELAS)
// TABELA POINTS (Pontos de coleta)
    // IMAGE
    // NAME
    // EMAIL
    // WHATSAPP
    // LATITUDE
    // LOGINTUDE
    // CITY
    // UF
// TABELA ITEMS  (Itens para coleta)
    // IMAGE
    // TITLE
// TABELA POINT_ITEMS (Tabela Pivot) Armazena relacionamento dos itens que o ponto coleta
    // POINT_ID
    // ITEM_ID
// RELACIONAMENTO DE N-N (Muito para Muito)

// MIGRATIONS = Histórico do banco de dados

// FUNCIONALIDADES WEB
    // CADASTRO DE PONTO DE COLETA
    // LISTA OS ITENS DE COLETA

// FUNCIONALIDADES MOBILE
    // LISTAR PONTOS (FILTRO POR ESTADO/CIDADE/ITEMS)
    // LISTAR UNICO PONTO DE COLETA