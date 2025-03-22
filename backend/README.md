# Projeto Backend - SoftMakers

Este é o backend do projeto desenvolvido utilizando o framework [NestJS](https://nestjs.com/), que fornece uma estrutura robusta e escalável para a construção de aplicações server-side modernas.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar pacotes

## Configuração do Projeto

Siga os passos abaixo para configurar e executar o backend localmente:

### 1. Clonar o repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/Mariano-JR/desafio-junior-1.git
```

### 2. Instalar as dependências

Acesse o diretório do backend e instale as dependências necessárias:

```bash
cd backend
npm install
# ou
yarn install
```

### 3. Executar o servidor

Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run start:dev
# ou
yarn start:dev
```

O servidor será iniciado em [http://localhost:3001](http://localhost:3001/api).

## Scripts Disponíveis

Aqui estão os principais scripts disponíveis no projeto:

- **Iniciar o servidor em modo de desenvolvimento**:
  ```bash
  npm run start:dev
  ```
- **Executar testes**:
  ```bash
  npm run test
  ```

## Estrutura do Projeto

Abaixo está uma visão geral da estrutura principal do backend:

```
backend/
├── src/
│   ├── pets/               # Pasta de arquivos (test, entities...)
│   ├── main.ts             # Arquivo Main do projeto
│   ├── app.module.ts       # Módulo principal da aplicação
├── package.json            # Configurações do projeto e dependências
└── README.md               # Documentação do projeto
```

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[NestJS](https://nestjs.com/):** Framework Node.js para construção de aplicações server-side.
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação tipada para JavaScript.
- **[TypeORM](https://typeorm.io/):** ORM para integração com bancos de dados.
- **[SQLite](https://www.sqlite.org/):** Banco de dados relacional utilizado no projeto.
- **[Jest](https://jestjs.io/):** Framework de testes para garantir a qualidade do código.
- **[Swagger](https://swagger.io/):** Documentação da API.