require('dotenv').config({ path: '../.env' }); // Se app.js está em src/ e.env na raiz

// Em src/app.js, após const app = express();
//... outras configurações...

const db = require('./db/knex'); // Importa a instância do Knex

// Teste de conexão com o banco de dados
db.raw('SELECT 1+1 AS result')
 .then(() => {
    console.log('Conexão com o MySQL estabelecida com sucesso!');
  })
 .catch(err => {
    console.error('Erro ao conectar com o MySQL:', err);
    // Em um cenário real, você pode querer encerrar a aplicação se a conexão com o DB falhar no início
    // process.exit(1);
  });

//... app.listen(PORT,...)...