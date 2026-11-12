# RELATÓRIO DE TESTES DE SOFTWARE

## 1. Identificação do projeto

| Informação | Descrição |
|---|---|
| **Nome do projeto:** | Academia Viva – Landing Page |
| **Resumo do projeto:** | Aplicação web de uma academia que apresenta cursos e permite que os usuários entrem em contato por meio de um formulário de cadastro de interesse. |
| **Nome do testador:** | Richard Mendes |
| **Data dos testes:** | 12/11/2026 |
| **Tecnologias utilizadas:** | JavaScript, Node.js, NPM e Jest |

---

## 2. Objetivo dos testes

**Resposta:**

O objetivo dos testes foi verificar o funcionamento da função `validateLead`, responsável por validar os dados enviados pelo formulário de contato da aplicação Academia Viva.

Os testes pretendiam verificar se os dados obrigatórios eram preenchidos corretamente, se os campos aceitavam apenas os tipos de informação esperados e se os valores inválidos eram identificados.

Também foram verificados possíveis problemas relacionados ao nome, e-mail, telefone e modalidade de interesse, garantindo que a função retornasse corretamente os resultados e as mensagens de erro.

---

## 3. Ambiente de testes

| Ferramenta/Tecnologia | Versão |
|---|---|
| JavaScript | ES6+ |
| Node.js | 22.2.0 |
| Jest | Conferir versão instalada |
| NPM | 10.7.0 |
| Outras | Visual Studio Code |

**Comando utilizado para preparar o ambiente:**

```bash
npm install
```

**Comando utilizado para executar o sistema (servidor):**

```bash
npm start
```

**Comando utilizado para executar os testes:**

```bash
npx jest tests/validation.test.js --runInBand
```

---

## 4. Funcionalidades testadas

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
|---|---|---|---|
| 1 | validateLead | src/validation.js | Verificar se o cadastro completo é aceito. |
| 2 | validateLead | src/validation.js | Verificar se o cadastro mínimo é aceito. |
| 3 | validateLead | src/validation.js | Identificar nomes com menos de 3 caracteres. |
| 4 | validateLead | src/validation.js | Rejeitar nomes contendo apenas espaços. |
| 5 | validateLead | src/validation.js | Rejeitar nomes com tipo diferente de string. |
| 6 | validateLead | src/validation.js | Rejeitar e-mails sem arroba. |
| 7 | validateLead | src/validation.js | Rejeitar e-mails sem domínio completo. |
| 8 | validateLead | src/validation.js | Rejeitar e-mails com tipo incorreto. |
| 9 | validateLead | src/validation.js | Rejeitar telefones enviados como números. |
| 10 | validateLead | src/validation.js | Rejeitar modalidades não permitidas. |
| 11 | validateLead | src/validation.js | Verificar a diferenciação entre letras maiúsculas e minúsculas. |

---

## 5. Registro detalhado dos testes realizados

### Teste 01 – Cadastro completo válido

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve aceitar cadastro completo válido.
- **Objetivo:** Verificar se a função aceita um cadastro com todos os campos preenchidos corretamente.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:** Nome: Ana Silva; E-mail: ana@email.com; Telefone: 27999999999; Modalidade: Online.
- **Resultado esperado:** valid = true e errors = [].
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
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
```

**Justificativa:**

Esse teste verifica se a função aceita corretamente um cadastro completo quando todos os dados informados estão dentro dos critérios estabelecidos.

---

### Teste 02 – Cadastro mínimo válido

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve aceitar cadastro mínimo válido.
- **Objetivo:** Verificar se os campos opcionais podem ser omitidos.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:** Nome: Ana Silva; E-mail: ana@email.com.
- **Resultado esperado:** valid = true e errors = [].
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
test("Deve aceitar cadastro mínimo válido", () => {
  const resultado = validateLead({
    name: "Ana Silva",
    email: "ana@email.com"
  });

  expect(resultado.valid).toBe(true);
  expect(resultado.errors).toEqual([]);
});
```

**Justificativa:**

Verifica se o sistema permite realizar o cadastro utilizando apenas os campos obrigatórios, sem exigir informações opcionais.

---

### Teste 03 – Nome muito curto

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar nome com menos de 3 caracteres.
- **Objetivo:** Verificar se nomes muito curtos são rejeitados.
- **Tipo de cenário:** Limite.
- **Entrada utilizada:** Nome: Al; E-mail: ana@email.com.
- **Resultado esperado:** valid = false e mensagem informando o mínimo de 3 caracteres.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
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
```

**Justificativa:**

Esse teste garante que o nome respeite o tamanho mínimo estabelecido na validação.

---

### Teste 04 – Nome contendo apenas espaços

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar nome contendo apenas espaços.
- **Objetivo:** Verificar se espaços em branco são identificados como nome inválido.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: cinco espaços em branco; E-mail: ana@email.com.
- **Resultado esperado:** valid = false e mensagem de nome inválido.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
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
```

**Justificativa:**

Verifica se o método `trim()` remove os espaços antes da contagem dos caracteres, impedindo que um campo vazio seja aceito.

---

### Teste 05 – Nome com tipo incorreto

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar nome que não seja uma string.
- **Objetivo:** Verificar se o campo nome aceita somente textos.
- **Tipo de cenário:** Excepcional.
- **Entrada utilizada:** Nome: 12345; E-mail: ana@email.com.
- **Resultado esperado:** valid = false e mensagem de nome inválido.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
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
```

**Justificativa:**

Garante que valores numéricos ou de outros tipos não sejam aceitos como nome.

---

### Teste 06 – E-mail sem arroba

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar e-mail sem arroba.
- **Objetivo:** Verificar se o endereço de e-mail possui o símbolo @.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana Silva; E-mail: anaemail.com.
- **Resultado esperado:** valid = false e mensagem de e-mail inválido.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
test("Deve rejeitar e-mail sem arroba", () => {
  const resultado = validateLead({
    name: "Ana Silva",
    email: "anaemail.com"
  });

  expect(resultado.valid).toBe(false);
  expect(resultado.errors).toContain("Informe um e-mail válido.");
});
```

**Justificativa:**

Verifica se o sistema identifica endereços que não possuem o formato básico de um e-mail.

---

### Teste 07 – E-mail sem domínio completo

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar e-mail sem domínio e sem ponto.
- **Objetivo:** Verificar se o e-mail possui um domínio com ponto.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana Silva; E-mail: email@email.
- **Resultado esperado:** valid = false e mensagem de e-mail inválido.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
test("Deve rejeitar e-mail sem domínio e sem ponto", () => {
  const resultado = validateLead({
    name: "Ana Silva",
    email: "email@email"
  });

  expect(resultado.valid).toBe(false);
  expect(resultado.errors).toContain("Informe um e-mail válido.");
});
```

**Justificativa:**

Garante que endereços incompletos sejam rejeitados pela expressão regular utilizada na validação.

---

### Teste 08 – E-mail com tipo incorreto

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar e-mail que não seja uma string.
- **Objetivo:** Verificar se o campo e-mail aceita somente textos.
- **Tipo de cenário:** Excepcional.
- **Entrada utilizada:** Nome: Ana Silva; E-mail: 12345.
- **Resultado esperado:** valid = false e mensagem de e-mail inválido.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
test("Deve rejeitar e-mail que não seja uma string", () => {
  const resultado = validateLead({
    name: "Ana Silva",
    email: 12345
  });

  expect(resultado.valid).toBe(false);
  expect(resultado.errors).toContain("Informe um e-mail válido.");
});
```

**Justificativa:**

Verifica se valores numéricos são rejeitados no campo de e-mail, evitando dados em formato incorreto.

---

### Teste 09 – Telefone com tipo incorreto

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar telefone enviado como número.
- **Objetivo:** Verificar se o telefone informado é uma string.
- **Tipo de cenário:** Excepcional.
- **Entrada utilizada:** Nome: Ana Silva; E-mail: ana@email.com; Telefone: 27999999999 como número.
- **Resultado esperado:** valid = false e mensagem de telefone inválido.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
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
```

**Justificativa:**

Garante que o telefone seja recebido no formato esperado, evitando problemas com dados enviados como números.

---

### Teste 10 – Modalidade inválida

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar modalidade que não existe na lista permitida.
- **Objetivo:** Verificar se somente as modalidades cadastradas são aceitas.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana Silva; E-mail: ana@email.com; Modalidade: Híbrido.
- **Resultado esperado:** valid = false e mensagem de modalidade inválida.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
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
```

**Justificativa:**

Verifica se o sistema impede que o usuário envie uma modalidade que não está disponível no formulário.

---

### Teste 11 – Modalidade com diferenciação de caixa

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Deve rejeitar modalidade escrita com letras minúsculas.
- **Objetivo:** Verificar se a validação diferencia letras maiúsculas e minúsculas.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana Silva; E-mail: ana@email.com; Modalidade: online.
- **Resultado esperado:** valid = false e mensagem de modalidade inválida.
- **Resultado obtido:** Preencher após executar os testes.
- **Status:** A confirmar.

**Código do teste:**

```javascript
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
```

**Justificativa:**

Esse teste verifica se o JavaScript diferencia letras maiúsculas e minúsculas, garantindo que a modalidade seja informada exatamente como está definida na lista permitida.

---

## 6. Resumo dos resultados

Preencher esta seção após executar os 11 testes.

| Indicador | Quantidade |
|---|---:|
| Total de testes executados | 11 |
| Testes aprovados (Passed) | A preencher |
| Testes reprovados (Failed) | A preencher |

**Percentual de aprovação:**

(Testes aprovados ÷ 11) × 100

---

## 7. Evidências da execução dos testes

Inserir capturas de tela do terminal do Visual Studio Code mostrando a execução dos testes com Jest.

As evidências devem apresentar:

- Execução dos testes no Jest.
- Quantidade de testes aprovados e reprovados.
- Mensagens de erro, caso existam.
- Correções realizadas após a identificação de falhas.

---

## 8. Problemas identificados e correções realizadas

| Problema identificado | Causa do problema | Solução implementada | Situação |
|---|---|---|---|
| Nome com menos de 3 caracteres era aceito. | A validação permitia nomes com apenas 2 caracteres. | Alteração do limite mínimo para 3 caracteres. | Corrigido no código. |
| Mensagem de erro do nome estava desatualizada. | A mensagem informava o mínimo de 2 caracteres. | Atualização da mensagem para 3 caracteres. | Corrigido no código. |
| Expressão regular do e-mail estava incorreta. | Escape incorreto do ponto na expressão regular. | Correção para `\.` na expressão regular. | Corrigido no código. |

**Resposta:**

Durante a análise do código, foram identificados pontos que precisavam de ajustes para atender aos cenários solicitados. Foram corrigidos o limite mínimo de caracteres do nome, a mensagem de erro correspondente e a expressão regular utilizada na validação do e-mail.

---

## 9. Análise dos resultados

**1. Todos os testes apresentaram os resultados esperados? Justifique.**

A confirmação depende da execução dos testes. Cada cenário foi desenvolvido para verificar uma condição específica da função de validação.

**2. Quais foram os cenários mais importantes verificados durante os testes?**

Os cenários mais importantes foram a validação dos campos obrigatórios, a identificação de e-mails inválidos, a rejeição de tipos incorretos e a verificação das modalidades permitidas.

**3. Algum teste identificou uma falha na aplicação? Qual?**

Durante a análise do código, foi identificada a necessidade de ajustar a quantidade mínima de caracteres do nome e corrigir a expressão regular do e-mail.

**4. Quais alterações foram necessárias para corrigir os problemas encontrados?**

Foi necessário alterar o limite mínimo do nome de 2 para 3 caracteres, atualizar a mensagem de erro e corrigir a expressão regular do e-mail.

**5. Existem funcionalidades que ainda precisam ser testadas? Quais?**

Sim. Outras funcionalidades ainda podem ser testadas, como o envio do formulário pela interface, a comunicação com o servidor, o armazenamento dos cadastros no banco de dados e a listagem dos cursos.

---

## 10. Conclusão

**Conclusão da equipe:**

A realização dos testes foi importante para verificar o funcionamento da função `validateLead` e identificar possíveis problemas na validação dos dados enviados pelo formulário.

Foram desenvolvidos 11 cenários de teste, envolvendo situações válidas e inválidas para os campos de nome, e-mail, telefone e modalidade de interesse.

Os testes unitários ajudam a garantir que cada parte do sistema funcione corretamente, facilitando a identificação de erros e evitando que problemas sejam encontrados somente após a utilização da aplicação.

Dessa forma, o processo contribuiu para melhorar a qualidade, a confiabilidade e a segurança das validações da aplicação Academia Viva.

---

**Relatório elaborado por:** Richard Mendes

**Data da última atualização:** 12/11/2026