# UC10 - Realizar Testar nas Aplicações Desenvolvidas
## Richard Mendes

## Descrição

O objetivo desse projeto é o controle de tarefas de uma aplicação web.
- Cadastrar tarefas:
- Visualizar tarefas:
- Marcar/Desmarcar tarefas:
- Deletar tarefas:

## Tecnologias

| Tecnologia | Função | Versão | Comando |
|------------|--------|--------|---------|
| Node.js | Permite executar JavaScript no servidor. | 22.2.0 | `node -v` |
| Jest | Framework de testes automatizados. | 29.7.0 | `npm test` |
| SQLite | Banco de dados relacional. | 5.1.7 (pacote sqlite3) | `npm list sqlite3` |
| HTML | Estrutura da página web. | HTML5 | — |
| CSS | Estilização e design da página. | CSS3 | — |
| JavaScript | Interatividade e comportamento da página. | ES6+ | `node arquivo.js` |
| Express | Framework back-end que recebe e gerencia requisições HTTP. | 4.22.3 | `npm start` |
| Supertest | Ferramenta que simula requisições HTTP para testar a API. | 7.3.1 | `npm test` |

## Testes Unitários

| Caso de teste |  Entrada | Saída esperada |
| ------------- | -------- | -------------- |
| 1 | Título: "  batata  " | Título normalizado: "batata" |
| 2 | Título vazio ou contendo apenas espaços | Exibir erro: “O título da tarefa é obrigatório.” |
| 3 | Título com 121 caracteres | Exibir erro: “O título deve ter no máximo 120 caracteres.” |