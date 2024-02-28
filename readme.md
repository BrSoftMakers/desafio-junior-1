Pet_shop
Sobre o projeto
Pet_shop é uma aplicação full stack web construida o teste para vaga de Desevolvedor Jr 1.

O teste consiste em desenvolver um projeto utilizando NextJS no front-end e Nest.js no back-end, com o objetivo de criar uma aplicação que permita listar, visualizar, criar, editar e excluir animais de estimação em uma petshop.


Tecnologias utilizadas

Back end
NestJs
TypeScript
Prisma ORM

Front end
HTML / CSS / JS /
ReactJS
AXIOS


Como executar o projeto

Configurar o Banco de Dados

MySql
User: root
Password: 123456789
Port: 3306
"Localhost"

Criar o Banco 
CREATE database petshop;

Back end
Pré-requisitos: 
Node
NestJS  : npm install -g @nestjs/cli
Prisma  : npm install -g prisma

# clonar repositório
git clone https://github.com/JailsonFSantos/desafio-junior-1

# entrar na pasta do projeto back end
cd desafio-junior-1
cd backend

# instalar dependências
npm install
npm install @prisma/client @prisma/cli
npx prisma migrate dev

# executar o projeto
npm run start:dev


Front end web
Pré-requisitos: npm 


# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
npm install

# executar o projeto
npm run dev

# abrir o navegador

http://localhost:3001/




Autor
Jailson Francisco dos Santos

https://www.linkedin.com/in/jailson-santos-149202234/
