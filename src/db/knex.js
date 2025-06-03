// src/db/knex.js
const knex = require('knex');
const knexfile = require('../../knexfile'); // Caminho relativo para o knexfile.js na raiz

// Determina o ambiente. Em uma aplicação real, process.env.NODE_ENV seria mais robusto.
const environment = process.env.NODE_ENV | 'development';
const configOptions = knexfile[environment];

if (!configOptions) {
  throw new Error(`Configuração de ambiente '${environment}' não encontrada no knexfile.js`);
}

module.exports = knex(configOptions);

/*
**Explicação:**
*   `require('knex')`: Importa a biblioteca Knex.
*   `require('../../knexfile')`: Importa as configurações do `knexfile.js` localizado na raiz do projeto (o caminho `../../` sobe dois níveis a partir de `src/db/`).
*   `const environment = process.env.NODE_ENV |
| 'development';: Determina qual configuração de ambiente doknexfile.jsusar. Por padrão, usadevelopment. Em um ambiente de produção, a variável de ambienteNODE_ENVgeralmente é definida comoproduction. *const configOptions = knexfile[environment];: Seleciona o objeto de configuração apropriado doknexfilecom base no ambiente. *if (!configOptions)...: Adiciona uma verificação para garantir que a configuração do ambiente exista. *module.exports = knex(configOptions);`: Cria e exporta a instância do Knex configurada com as opções do ambiente selecionado.

Esta instância centralizada do Knex (`db` quando importada) será o principal meio de interação com o banco de dados. O Knex também gerencia um pool de conexões internamente [4], o que é mais eficiente do que abrir e fechar uma nova conexão para cada consulta individual. A reutilização de conexões do pool reduz a latência das operações de banco de dados e diminui a carga no servidor MySQL. */
