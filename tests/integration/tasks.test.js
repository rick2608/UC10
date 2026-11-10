
const request = require('supertest');
const { createDatabase } = require('../../src/db');
const { createApp } = require('../../src/app');

describe('Testes de integração da API', () => {
  let db;
  let app;

  beforeAll(() => {
    db = createDatabase(':memory:');
    app = createApp(db);
  });

  beforeEach(() => {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM tasks', err => {
        if (err) reject(err);
        else resolve();
      });
    });
  });

  afterAll(() => {
    return new Promise((resolve, reject) => {
      db.close(err => {
        if (err) reject(err);
        else resolve();
      });
    });
  });

  test('deve listar as tarefas', async () => {
    const response = await request(app)
      .get('/api/tasks');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  test('deve cadastrar uma tarefa', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Estudar testes',
        description: 'Aprender Jest e Supertest'
      });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Estudar testes');
    expect(response.body.completed).toBe(false);
  });

  test('deve rejeitar uma tarefa sem título', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({
        title: '   '
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  test('deve atualizar uma tarefa', async () => {
    const created = await request(app)
      .post('/api/tasks')
      .send({ title: 'Finalizar atividade' });

    const response = await request(app)
      .patch(`/api/tasks/${created.body.id}`)
      .send({ completed: true });

    expect(response.status).toBe(200);
    expect(response.body.completed).toBe(true);
  });

  test('deve excluir uma tarefa', async () => {
    const created = await request(app)
      .post('/api/tasks')
      .send({ title: 'Excluir esta tarefa' });

    const response = await request(app)
      .delete(`/api/tasks/${created.body.id}`);

    expect(response.status).toBe(204);

    const list = await request(app).get('/api/tasks');

    expect(list.body).toEqual([]);
  });
});
