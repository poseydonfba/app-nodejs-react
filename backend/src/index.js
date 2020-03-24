const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * Em desenvolvimento pode usar assim.
 */
app.use(cors());

/**
 * Em produção 
 */
/*
app.use(cors({
    // endereço que vai acessar a aplicação. ex: 
    origin: 'https://meuapp.com'
}));
*/

/**
 * Informa para converter o corpo das respostas em json
 */
app.use(express.json());

app.use(routes);

/**
 * npx // executa um pacote ao invés de instalar
 */

/**
 * Tipos de parametros:
 * 
 * Query params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
 * const queryParams = request.query;
 * Route params: Parametros utilizados para identificar recursos
 * const routeParams = request.params;
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 * const bodyParams = request.body;
*/

/**
 * Configurando o nodemon
 * 
 * npm install nodemon -D
 * O -D salva no package.json como dependencia de desenvolvimento e não de aplicação
 * Quando subir para produção ela não precisa ir
 * Add: "start": "nodemon index.js" em package.json
 */

/**
 * Configurando o banco de dados
 * 
 * Usando Driver: SELECT * FROM users
 * Usando Query Builder: table('users').select('*').where() // Fica mais preparado para troca de bancos
 * Usaremos o knexjs
 * npm install knex // Instala o knex
 * npm install sqlite3 // instala o driver
 * npx knex init // criação do arquivo knexfile.js
 */

/**
* Usando migrations:
* 
* Criar uma migration
* npx knex migrate:make create_ongs
* Add em knexfile.js useNullAsDefault: true
* Executar a migration:
* npx knex migrate:latest
* Desfazer a ultima migration feita
* npx knex migrate:rollback
*/

/**
 * Configurando o cors
 * npm install cors
 */

app.listen(3333);

/**
 * Configuração do git e git hub
 * 
 * git config --global user.email "poseydonfba@gmail.com"
 * git config --global user.name "Poseydon"
 * 
 * após da comit pelo vscode
 * 
 * CTRL + SHIFT + P
 * 
 * Procurar por "remote"
 * Selecinar a opção "Git Add Remote"
 * 
 * Nome do remote: "origin" // geralmente dão esse nome
 * Url: https://github.com/poseydonfba/app-nodejs-react.git // url https do repositorio criado no github
 * 
 * Agora com o remote criado, ir ate os 3 pontinhos e selecionar a opção push
 */