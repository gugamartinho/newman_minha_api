# 🧪 Projeto de Testes Automatizados com Postman & Newman

Este repositório contém uma coleção de testes de API executada com **Newman** e configurada para rodar localmente e em **GitHub Actions**.

---

## 📁 Estrutura do Projeto

- `collections/api_collection.json` – coleção Postman com os requests e assertivas
- `environments/production_env.json` – ambiente de execução usado pelos testes
- `reports/report.html` – relatório HTML gerado pelo Newman
- `setup-env.js` – carrega variáveis de ambiente do `.env`
- `.env.example` – exemplo de configuração local
- `package.json` / `package-lock.json` – dependências e script de execução
- `.github/workflows/ci.yml` – pipeline de CI do GitHub Actions

---

## 🚀 Como executar localmente

### 1. Instalar dependências
Certifica-te de que tens **Node.js** instalado.

```bash
npm install
```

### 2. Configurar variáveis de ambiente
Copia o ficheiro de exemplo e edita o `.env`:

```bash
cp .env.example .env
```

O `.env` deve conter algo como:

```env
BASE_URL=https://minha-api-gwjk.onrender.com
LOGIN_EMAIL=joao@example.com
LOGIN_PASSWORD=123456
```

### 3. Executar os testes

```bash
npm run test
```

O comando executa `setup-env.js` para carregar o `.env` e, em seguida, roda a coleção com Newman.

### 4. Ver o relatório

Após a execução, abre:

```bash
reports/report.html
```

---

## 🧩 Como funciona o `package.json`

O script `test` está configurado para:

- carregar variáveis do `.env` via `setup-env.js`
- executar `collections/api_collection.json`
- usar `environments/production_env.generated.json`
- gerar relatório HTML em `reports/report.html`

```json
"scripts": {
  "test": "node setup-env.js && newman run collections/api_collection.json -e environments/production_env.generated.json -r cli,htmlextra --reporter-htmlextra-export reports/report.html"
}
```

---

## 🤖 Integração Contínua

O workflow em `.github/workflows/ci.yml` executa os testes automaticamente em cada push ou pull request na branch `main`.

Ele garante que a coleção é validada e que o relatório HTML é gerado a cada run.

---

## 📌 Observações

- Se alterares o ambiente ou a URL base, atualiza `environments/production_env.json` ou o `.env` conforme necessário.
- O relatório HTML é gerado via `newman-reporter-htmlextra`.

---

## Swagger
```bash
https://minha-api-gwjk.onrender.com/docs
```

## 👨‍💻 Autor
David
QA Automation Engineer

---

## Contato
Se precisares de ajuda com a configuração ou execução dos testes, basta abrir uma issue ou mensagem no repositório.
