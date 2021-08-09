const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile ['development']);
console.log('Conexão realizada com sucesso.')
module.exports = knex;