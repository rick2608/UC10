
 // Função responsável por validar os dados enviados pelo formulário de contato.
 // Recebe nome, e-mail, telefone e modalidade de interesse.
function validateLead({ name, email, phone, interest }) {

  // Cria uma lista vazia para armazenar possíveis erros encontrados.
  const errors = [];

  // Verifica se o nome é um texto e se possui pelo menos 3 caracteres.
  // O trim() remove os espaços do início e do final antes da contagem.
  if (typeof name !== "string" || name.trim().length < 3) {
    // Se o nome não for válido, adiciona uma mensagem à lista de erros.
    errors.push("Informe seu nome (mínimo de 3 caracteres).");
  }

  // Cria uma expressão regular para verificar o formato do e-mail.
  // Exige texto antes e depois do @ e um ponto após o domínio.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se o e-mail é um texto e se corresponde ao formato esperado.
  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    // Se o e-mail for inválido, adiciona uma mensagem de erro.
    errors.push("Informe um e-mail válido.");
  }

  // Verifica se o telefone foi informado e se seu valor é um texto.
  // Se for informado em outro formato, registra um erro.
  if (phone && typeof phone !== "string") {
    errors.push("O telefone deve ser um texto.");
  }

  // Define quais modalidades de interesse são permitidas no formulário.
  const allowedInterests = ["Online", "Presencial", "Ainda não sei"];

  // Verifica se a modalidade foi informada e se está entre as opções permitidas.
  if (interest && !allowedInterests.includes(interest)) {
    // Se a modalidade não for válida, adiciona uma mensagem de erro.
    errors.push("Selecione uma modalidade válida.");
  }

  // Retorna um objeto com o resultado da validação e a lista de erros.
  // Se não houver erros, valid será true.
  // Se houver pelo menos um erro, valid será false.
  return { valid: errors.length === 0, errors };
}

// Exporta a função para ser utilizada em outros arquivos.
module.exports = { validateLead };
