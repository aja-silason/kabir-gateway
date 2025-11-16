# 📄 Kabir Gateway API

## Descrição

Esta aplicação é um **gateway que partilha informações entre serviços** desenvolvido com **NestJS**.
Ela permite, listar todos os motoristar de um serviço externo, registrar e consultar logs de acesso aos serviços, capturando informações como rota acessada, IP do dispositivo, método HTTP, parâmetros de query e timestamp isso quand nos loggs.

Funciona como um **intermediário** entre o usuário e serviços externos, armazenando logs e fornecendo métricas para monitoramento e análise.

### Funcionalidades

*Consultar motoristas
* Registrar logs de requisições realizadas a endpoints.
* Consultar logs por ID ou listar todos.
* Limitação de requisições (Rate Limiting) para evitar abusos.
* Cache de resultados para otimizar consultas.
* Autenticação simples via API Key (`x-api-key`) isso porque seria mais viável ter um serviço que cedesse esse recurso.

---

## Tecnologias

* Node.js 20+
* NestJS 11+
* TypeORM
* PostgreSQL
* Docker & Docker Compose
* Swagger (documentação API)

---

## Endpoints

| Método | Rota       | Descrição           | Autenticação |
| ------ | ---------- | ------------------- | ------------ |
| GET    | /available-drivers | Lista todos os motoristas | Sim  |
| GET    | /loggs     | Lista todos os logs | Sim          |
| GET    | /loggs/:id | Busca log por ID    | Sim          |


**Exemplo de motorista registrado:**

```json
 {
    "driverName": "João Silva",
    "vehicleType": {
      "type": "Toyota",
      "plate": "ABC-123"
    },
    "location": {
      "lat": -8.839,
      "lng": 13.289
    },
    "priceEstimate": "5.61",
    "etaMinutes": 11
  }
```


**Exemplo de log registrado:**

```json
{
  "id": "e01d00a7-2ec6-44eb-9eb0-ccc74fd24e20",
  "route": "/drivers",
  "deviceIp": "12.212.212.21",
  "method": "GET",
  "userAgent": "PostmanRuntime/7.32.0",
  "queryParams": { "available": true },
  "statusCode": 200,
  "responseTimeMs": 45,
  "accessedAt": "2025-11-16T02:11:07.217Z"
}
```

---

## Autenticação

Para acessar os endpoints, é necessário passar a **API Key** correta (`ex: qwerty12345` por padrão).
Para desenvolvimento defina no .env, como de exemplo no .env.example

**Exemplo de requisição com header:**

```http
GET /loggs HTTP/1.1
Host: localhost:3000
x-api-key: qwerty12345
```

Se a chave estiver incorreta ou ausente, o servidor retorna **401 Unauthorized**.

```json

{
  "message": "Invalid API key",
  "error": "Unauthorized",
  "statusCode": 401
}

```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
DATABASE_URL=postgresql://username:password@localhost:5432/dbname?schema=public
API_KEY=qwerty12345
```

---

## Executando a aplicação localmente

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar migrações

```bash
npm run migration:run
```

### 3. Iniciar a aplicação

```bash
npm run start:all
```

A API estará disponível em `http://localhost:3000`.
A documentação Swagger pode ser acessada em `http://localhost:3000/api-docs`.

---

## Executando a aplicação com Docker

### 1. Docker Compose (exemplo)


### 2. Build e start

```bash
docker-compose up --build
```

### 3. Rodar migrações dentro do container

```bash
docker-compose exec app npx typeorm-ts-node-commonjs -d ./src/infra/db/data-source.ts migration:run
```

Agora a aplicação estará acessível em `http://localhost:3000`.

---

## Observações

* Swagger facilita testar endpoints e enviar a API Key diretamente.
* Caso rode a aplicação fora do container, certifique-se que tens o banco a rodar, o host deve ser o localhost e não o serviço db

---