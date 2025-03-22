# Projeto SoftMakers - Desenvolvedor Junior 1

Este projeto é composto por um servidor **backend** desenvolvido com [NestJS](https://nestjs.com/) e uma aplicação **frontend** desenvolvida com [Next.js](https://nextjs.org/). O objetivo é a entrega do desafio de código proposto pela SoftMakers.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar pacotes

## Como iniciar o projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

### 1. Clonar o repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/Mariano-JR/desafio-junior-1.git
```

### 2. Configurar o Backend

1. Acesse o diretório do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor backend:
   ```bash
   npm run start:dev
   # ou
   yarn start:dev
   ```

   O servidor será iniciado em [http://localhost:3001](http://localhost:3001/api).

### 3. Configurar o Frontend

1. Abra um novo terminal e acesse o diretório do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor frontend:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O servidor será iniciado em [http://localhost:3000](http://localhost:3000).

### 4. Testar a aplicação

1. Acesse o frontend no navegador:
   - [http://localhost:3000](http://localhost:3000)

2. Certifique-se de que o backend está funcionando corretamente:
   - [http://localhost:3001/api](http://localhost:3001/api)

## Estrutura do Projeto

Abaixo está uma visão geral da estrutura principal do projeto:

```
projeto/
├── backend/                # Código do servidor backend
│   ├── src/
│   │   ├── pets/           # Pasta de arquivos (test, entities...)
│   │   ├── main.ts         # Arquivo Main do projeto
│   │   ├── app.module.ts   # Módulo principal da aplicação
│   ├── package.json        # Configurações do projeto e dependências
│   └── README.md           # Documentação do back
├── frontend/               # Código da aplicação frontend
│   ├── public/             # Arquivos públicos (imagens, ícones, etc.)
│   ├── src/
│   │   ├── app/            # Arquivos principais da aplicação
│   │   ├── components/     # Componentes reutilizáveis
│   ├── package.json        # Configurações do projeto e dependências
│   └── README.md           # Documentação do front
└── README.md               # Documentação do projeto
```

## Tecnologias Utilizadas

- **Backend**:
  - [NestJS](https://nestjs.com/): Framework para construção de aplicações server-side.
  - [TypeORM](https://typeorm.io/): ORM para integração com bancos de dados.
  - [SQLite](https://www.sqlite.org/): Banco de dados relacional.
  - [Jest](https://jestjs.io/): Framework de testes.
  - [Swagger](https://swagger.io/): Documentação da API.

- **Frontend**:
  - [Next.js](https://nextjs.org/): Framework React para aplicações web modernas.
  - [React](https://reactjs.org/): Biblioteca para construção de interfaces de usuário.
  - [Material-UI](https://mui.com/): Biblioteca de componentes para interfaces modernas.