const { normalizeTitle, validateTaskInput } = require('./validation');

describe('Testes de validação', () => {

  test('Deve remover espaços do título', () => {
    expect(normalizeTitle(' Comprar pão ')).toBe('Comprar pão');
  });

  test('Deve rejeitar título vazio', () => {
    expect(() => validateTaskInput({ title: '' }))
      .toThrow('O título da tarefa é obrigatório.');
  });

  test('Deve rejeitar título com mais de 120 caracteres', () => {
    expect(() => validateTaskInput({ title: 'a'.repeat(121) }))
      .toThrow('O título deve ter no máximo 120 caracteres.');
  });

  test('Deve aceitar título válido', () => {
    expect(validateTaskInput({ title: 'Estudar programação' }))
      .toEqual({
        valid: true,
        data: {
          title: 'Estudar programação',
          description: ''
        }
      });
  });

  test('Deve remover espaços da descrição', () => {
    const result = validateTaskInput({
      title: 'Estudar',
      description: ' Programação '
    });

    expect(result.data.description).toBe('Programação');
  });

});