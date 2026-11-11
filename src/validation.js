
/* Valida os dados das tarefas.
   Remove espaços e verifica o tamanho do título. */

// Remove espaços extras do início e do final do título.
function normalizeTitle(title) {
  return typeof title === 'string' ? title.trim() : '';
}

// Verifica se os dados da tarefa são válidos.
function validateTaskInput(input) {
  const title = normalizeTitle(input?.title);

  // Verifica se o título foi preenchido.
  if (!title) {
    throw new Error('O título da tarefa é obrigatório.');
  }

  // Verifica se o título ultrapassa 120 caracteres.
  if (title.length > 120) {
    throw new Error('O título deve ter no máximo 120 caracteres.');
  }

  // Organiza a descrição da tarefa.
  const description = typeof input?.description === 'string'
    ? input.description.trim()
    : '';

  // Retorna os dados validados.
  return { valid: true, data: { title, description } };
}

// Permite que outros arquivos utilizem essas funções.
module.exports = { normalizeTitle, validateTaskInput };
