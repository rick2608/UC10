
const {
  normalizeTitle,
  validateTaskInput
} = require('../../src/validation');

describe('Testes de validação de tarefas', () => {

  test('deve remover espaços desnecessários do título', () => {
    expect(normalizeTitle('  Estudar JavaScript  '))
      .toBe('Estudar JavaScript');
  });

  test('deve rejeitar um título vazio', () => {
    const result = validateTaskInput({
      title: '   '
    });

    expect(result.valid).toBe(false);
  });

  test('deve aceitar um título válido', () => {
    const result = validateTaskInput({
      title: 'Estudar programação',
      description: 'Praticar JavaScript'
    });

    expect(result.valid).toBe(true);
    expect(result.data.title).toBe('Estudar programação');
  });

  test('deve rejeitar títulos com mais de 120 caracteres', () => {
    const result = validateTaskInput({
      title: 'A'.repeat(121)
    });

    expect(result.valid).toBe(false);
  });

});
