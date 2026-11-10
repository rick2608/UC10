
const sqlite3 = require('sqlite3').verbose();
const { createDatabase } = require('../../src/db');
const { createTaskService } = require('../../src/taskService');

describe('Testes do serviço de tarefas', () => {
  let db;
  let tasks;

  beforeEach(() => {
    db = createDatabase(':memory:');
    tasks = createTaskService(db);
  });

  afterEach(() => {
    return new Promise((resolve, reject) => {
      db.close(err => {
        if (err) reject(err);
        else resolve();
      });
    });
  });

  test('deve criar e listar tarefas', async () => {
    const created = await tasks.create({
      title: 'Estudar JavaScript',
      description: 'Praticar testes'
    });

    const list = await tasks.list();

    expect(created.title).toBe('Estudar JavaScript');
    expect(created.completed).toBe(false);
    expect(list).toHaveLength(1);
    expect(list[0].description).toBe('Praticar testes');
  });

  test('deve atualizar uma tarefa para concluída', async () => {
    const created = await tasks.create({
      title: 'Fazer atividade'
    });

    const updated = await tasks.setCompleted(created.id, true);

    expect(updated.completed).toBe(true);
  });

  test('deve excluir uma tarefa', async () => {
    const created = await tasks.create({
      title: 'Tarefa temporária'
    });

    const removed = await tasks.remove(created.id);
    const list = await tasks.list();

    expect(removed).toBe(true);
    expect(list).toHaveLength(0);
  });
});
