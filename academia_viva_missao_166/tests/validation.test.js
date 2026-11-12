
const { validateLead } = require("../src/validation");

describe("Testes da função validateLead", () => {

  // 1. Cadastro completo válido
  test("Deve aceitar cadastro completo válido", () => {
    const resultado = validateLead({
      name: "Ana Silva",
      email: "ana@email.com",
      phone: "27999999999",
      interest: "Online"
    });

    expect(resultado.valid).toBe(true);
    expect(resultado.errors).toEqual([]);
  });

  // 2. Cadastro mínimo válido
  test("Deve aceitar cadastro mínimo válido", () => {
    const resultado = validateLead({
      name: "Ana Silva",
      email: "ana@email.com"
    });

    expect(resultado.valid).toBe(true);
    expect(resultado.errors).toEqual([]);
  });

  // 3. Nome muito curto
  test("Deve rejeitar nome com menos de 3 caracteres", () => {
    const resultado = validateLead({
      name: "Al",
      email: "ana@email.com"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain(
      "Informe seu nome (mínimo de 3 caracteres)."
    );
  });

  // 4. Nome contendo apenas espaços
  test("Deve rejeitar nome contendo apenas espaços", () => {
    const resultado = validateLead({
      name: "     ",
      email: "ana@email.com"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain(
      "Informe seu nome (mínimo de 3 caracteres)."
    );
  });

  // 5. Nome com tipo incorreto
  test("Deve rejeitar nome que não seja uma string", () => {
    const resultado = validateLead({
      name: 12345,
      email: "ana@email.com"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain(
      "Informe seu nome (mínimo de 3 caracteres)."
    );
  });

  // 6. E-mail sem @
  test("Deve rejeitar e-mail sem arroba", () => {
    const resultado = validateLead({
      name: "Ana Silva",
      email: "anaemail.com"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe um e-mail válido.");
  });

  // 7. E-mail sem domínio completo e sem ponto
  test("Deve rejeitar e-mail sem domínio e sem ponto", () => {
    const resultado = validateLead({
      name: "Ana Silva",
      email: "email@email"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe um e-mail válido.");
  });

  // 8. E-mail com tipo incorreto
  test("Deve rejeitar e-mail que não seja uma string", () => {
    const resultado = validateLead({
      name: "Ana Silva",
      email: 12345
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Informe um e-mail válido.");
  });

  // 9. Telefone com tipo incorreto
  test("Deve rejeitar telefone enviado como número", () => {
    const resultado = validateLead({
      name: "Ana Silva",
      email: "ana@email.com",
      phone: 27999999999
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain(
      "O telefone deve ser um texto."
    );
  });

  // 10. Modalidade inválida
  test("Deve rejeitar modalidade que não existe na lista permitida", () => {
    const resultado = validateLead({
      name: "Ana Silva",
      email: "ana@email.com",
      interest: "Híbrido"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain(
      "Selecione uma modalidade válida."
    );
  });

  // 11. Modalidade com diferenciação de caixa
  test("Deve rejeitar modalidade escrita com letras minúsculas", () => {
    const resultado = validateLead({
      name: "Ana Silva",
      email: "ana@email.com",
      interest: "online"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain(
      "Selecione uma modalidade válida."
    );
  });

});
