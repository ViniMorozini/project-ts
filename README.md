# 💸 API RESTful - Transactions

API para controle de transações financeiras (crédito e débito), desenvolvida em Node.js com Fastify. Permite ao usuário criar transações, visualizar o resumo da conta, listar e consultar transações específicas.

---

## ✨ Tecnologias

- Node.js
- TypeScript
- Fastify
- SQLite
- Knex
- Jest (para testes)
- Supertest

---

## 📦 Instalação

```bash
git clone https:/github.com/ViniMorozini/project-ts
cd seu-repo
npm install
```

---

## 🧪 Testes

Para rodar os testes, use:

```bash
npm run test
```

---

## ⚙️ Migrations

Antes de rodar o projeto, execute as migrations:

```bash
npm run knex:migrate
```

---

## ✅ Requisitos Funcionais (RF)

- [x] O usuário deve poder **criar uma nova transação**
- [x] O usuário deve poder **obter um resumo da sua conta**
- [x] O usuário deve poder **listar todas transações já registradas**
- [x] O usuário deve poder **visualizar uma transação única**

---

## 🧠 Regras de Negócio (RN)

- [x] A transação pode ser do tipo **crédito**, que somará ao valor total, ou **débito**, que subtrairá
- [x] Deve ser possível **identificar o usuário** entre as requisições (via cookies)
- [x] O usuário só pode **visualizar transações que ele mesmo criou**

---

## 🔄 Rotas da API

### Criar uma nova transação

```http
POST /transactions
```

#### Body

```json
{
  "title": "Freelance",
  "amount": 5000,
  "type": "credit"
}
```

---

### Listar todas transações

```http
GET /transactions
```

---

### Visualizar transação única

```http
GET /transactions/:id
```

---

### Obter resumo da conta

```http
GET /transactions/summary
```

---



