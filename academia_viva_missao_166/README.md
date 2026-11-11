# Academia Viva — Landing page

A Academia Viva é uma landing page responsiva para uma empresa de cursos online e presenciais. O projeto permite que os visitantes conheçam a instituição, visualizem os cursos disponíveis, filtrem as opções por modalidade e demonstrem interesse preenchendo um formulário de contato.

## Tecnologias

- **HTML5:** estruturação das páginas.
- **CSS3:** estilização e responsividade da interface.
- **JavaScript:** funcionalidades e interações da página.
- **Node.js:** ambiente de execução do servidor.
- **Express:** criação do servidor e das rotas da API.
- **SQLite:** banco de dados para armazenamento das informações.
- **Jest:** execução dos testes automatizados.
- **Supertest:** testes das rotas HTTP.
- **Nodemon:** reinicialização automática do servidor durante o desenvolvimento.

## Requisitos

- Node.js 18 ou superior.
- npm.
- Git (caso o projeto seja clonado pelo repositório).

## Como executar

Para executar o projeto em outra máquina, siga os passos:

1. Clone o repositório:
   ```bash
   git clone URL_DO_REPOSITORIO
   ```

2. Entre na pasta do projeto:
   ```bash
   cd academia-viva-landing
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Acesse a aplicação pelo endereço local configurado no servidor.

Para executar em modo de desenvolvimento, utilize:
```bash
npm run dev
```

## Como executar os testes

Para executar os testes automatizados, utilize o comando:

```bash
npm test
```

Para executar os testes com relatório de cobertura de código (Coverage):

```bash
npx jest --coverage --runInBand
```

O Jest apresenta os resultados dos testes e o relatório de cobertura, indicando as partes do código que foram executadas durante os testes.

## Organização dos arquivos

O projeto está organizado da seguinte maneira:

```text
academia-viva-landing/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── src/
│   ├── server.js
│   ├── app.js
│   ├── database.js
│   └── validation.js
│
├── tests/
│   └── arquivos de testes automatizados
│
├── package.json
├── package-lock.json
└── README.md
```

**Observação:** A estrutura acima representa a organização prevista a partir dos caminhos encontrados nos arquivos enviados. Confira os nomes e a localização das pastas no VS Code antes de finalizar o README.