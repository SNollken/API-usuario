// knexfile.js
require('dotenv').config(); // Carrega as variáveis do.env para process.env

module.exports = {
  development: {
    client: process.env.DB_CLIENT |
 'mysql2', // Usa a variável de ambiente ou 'mysql2' como padrão
connection: {
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
charset: 'utf8' // Recomendado para consistência de caracteres
},
migrations: {
directory: './knex/migrations' // Diretório para os arquivos de migração
},
seeds: {
directory: './knex/seeds' // Diretório para os arquivos de seed
}
},

  // Exemplo de configuração para produção (a ser preenchido conforme necessário)
  /*
  production: {
    client: process.env.DB_CLIENT_PROD |
| 'mysql2',
connection: {
host: process.env.DB_HOST_PROD,
user: process.env.DB_USER_PROD,
password: process.env.DB_PASSWORD_PROD,
database: process.env.DB_NAME_PROD,
charset: 'utf8',
// Configurações adicionais para produção, como SSL, podem ser necessárias
// ssl: { rejectUnauthorized: false } // Exemplo, ajuste conforme seu provedor
},
pool: { // Configurações de pool de conexões para produção
min: 2,
max: 10
},
migrations: {
directory: './knex/migrations'
},
seeds: {
directory: './knex/seeds'
}
}
*/
};

/*
**Explicação da Configuração:**
*   `require('dotenv').config();`: Garante que as variáveis do `.env` estejam disponíveis em `process.env` quando este arquivo for lido.
*   `module.exports`: Exporta um objeto contendo as configurações para cada ambiente.
*   `development`: Define as configurações para o ambiente de desenvolvimento.
    *   `client: process.env.DB_CLIENT |
| 'mysql2': Especifica o driver do banco de dados. Aqui, ele tenta lerDB_CLIENTdo.enve, se não encontrar, usamysql2como padrão.   
 *connection: Um objeto contendo os detalhes da conexão (host, usuário, senha, nome do banco), todos lidos deprocess.env. *charset: 'utf8': Define o conjunto de caracteres para a conexão, importante para evitar problemas com caracteres especiais. *migrations.directory: Especifica o diretório onde o Knex procurará e criará arquivos de migração.   
 *seeds.directory`: Especifica o diretório para arquivos de seed.   

A inclusão das seções `migrations` e `seeds` no `knexfile.js`, mesmo que este guia não se aprofunde em sua criação e uso, é uma preparação valiosa. Migrations são scripts que permitem versionar e aplicar alterações ao schema do banco de dados de forma programática e controlada, enquanto seeds são usados para popular o banco com dados iniciais ou de teste. Ambas são ferramentas poderosas do Knex que se tornam indispensáveis à medida que a aplicação evolui.
*/