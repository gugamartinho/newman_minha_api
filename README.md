# 🧪 Projeto de Testes Automatizados com Postman & Newman

Este repositório demonstra uma pipeline profissional de **testes automatizados de API** usando **Postman** e **Newman**, com integração contínua via **GitHub Actions**.

---

## 📁 Estrutura do Projeto

NEWMAN_MINHA_API/
├── .github/
│   └── workflows/
│       └── ci.yml
├── collections/
│   └── api_collection.json
├── environments/
│   └── production_env.json
├── reports/
│   └── report.html
├── scripts/
│   └── run_newman.sh
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

## 🚀 Execução Local

### 1. Instalar dependências
Certifica-te de que tens o **Node.js** instalado.  
Depois, na raiz do projeto:

```bash
npm install
```

### 2. Configurar ambiente local
Cria um ficheiro `.env` na raiz do projeto com as variáveis necessárias.
Podes copiar o exemplo:
```bash
cp .env.example .env
```
Depois edita `.env` e define:
```bash
BASE_URL=https://minha-api-gwjk.onrender.com
LOGIN_EMAIL=teu-email@example.com
LOGIN_PASSWORD=sua-senha
```

### 3. Executar testes
```bash
npm run test
```

### 4. Ver relatório HTML
Após a execução, abre o ficheiro:
```bash
reports/report.html
```

### 🤖 Integração Contínua (GitHub Actions)
O workflow .github/workflows/ci.yml executa automaticamente os testes Newman em cada push ou pull request para a branch main.

## Etapas do workflow:
1- Faz checkout do código

2 - Instala Node.js

3 - Instala dependências (npm install)

4 - Executa os testes (npm run test)

5 - Guarda o relatório como artefacto (reports/report.html)

### 🌐 API em Teste
Os testes são executados contra a API hospedada em:
```bash
https://minha-api-gwjk.onrender.com
```

O URL é configurado no ficheiro:
```bash
environments/production_env.json
```

### 📊 Relatórios
Os relatórios são gerados com o newman-reporter-htmlextra, oferecendo:

- Estatísticas detalhadas

- Falhas por request

- Logs de execução

- Visualização profissional

### 👨‍💻 Autor
David  
QA Automation Engineer
Especialista em automação de testes, CI/CD e qualidade de software.