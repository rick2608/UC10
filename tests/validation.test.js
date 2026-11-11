
const { normalizeTitle, validateTaskInput } = require('../src/validation');

describe('Validação de tarefas', () => {

  // Testa a remoção de espaços extras.
  test('Deve remover espaços desnecessários', () => {
    expect(normalizeTitle('  Tarefa de Unitario  '))
      .toBe('Tarefa de Unitario');
  });

  // Testa um valor que não é texto.
  test('Retorna vazio se o título não for uma string', () => {
    expect(normalizeTitle(15487)).toBe('');
  });

  // Testa um título nulo.
  test('Retorna vazio se o título for nulo', () => {
    expect(normalizeTitle(null)).toBe('');
  });

  // Testa um título indefinido.
  test('Retorna vazio se o título for undefined', () => {
    expect(normalizeTitle(undefined)).toBe('');
  });

  // Caso 1: título com espaços extras.
  test('Deve normalizar o título batata', () => {
    const resultado = validateTaskInput({
      title: '  batata  '
    });

    expect(resultado.data.title).toBe('batata');
  });

  // Caso 2: título vazio ou só com espaços.
  test('Deve exibir erro se o título estiver vazio', () => {
    expect(() => validateTaskInput({ title: '' }))
      .toThrow('O título da tarefa é obrigatório.');

    expect(() => validateTaskInput({ title: '     ' }))
      .toThrow('O título da tarefa é obrigatório.');
  });

  // Caso 3: título com 121 caracteres.
  test('Deve exibir erro se o título tiver mais de 120 caracteres', () => {
    const titulo = 'R'.repeat(121);

    expect(() => validateTaskInput({ title: titulo }))
      .toThrow('O título deve ter no máximo 120 caracteres.');
  });

});
