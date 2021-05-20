# Instruçõess para executar o projeto.

Siga as instrucões baixo para executar o projeto.

## Tecnologias

### Back-End

- Node.Js
- Express
- Sequelize
- PostresSQL

### Front-End

- React.Js
- Styled Components
- React Router
- Axios

# Instalação e execução para o Back-End.

1. Faça um clone desse repositório;
2. Entre na pasta cd desafio-desenvolvedor-junior/backend;
3. Rode yarn para instalar as dependências;

```
yarn
```

4. Altere as credenciais dentro de /src/config/database.js;
5. Rode yarn sequelize db:create para criar o banco de dados;

```
yarn sequelize db:create
```

6. Rode yarn sequelize db:migrate para executar as migrations;

```
yarn sequelize db:migrate
```

6. Rode yarn sequelize db:seed:all para executar as seeds;

```
yarn sequelize db:seed:all
```

7. Rode yarn dev para iniciar o servidor.

```
yarn dev
```

7. Caso seja necessário resetar a base de dados, execute os comandos abaixo:
8. Execute, o comando abaixo para desfazer todas as seeds:

```
yarn sequelize db:seed:undo:all
```

8. Execute, o comando abaixo para desfazer todas as migrations:

```
yarn sequelize db:migrate:undo:all
```

# Instalação e execução para o Front-End.

1. Entre na pasta cd desafio-desenvolvedor-junior/frontend;
2. Rode yarn para instalar as dependências;

```
yarn
```

3. Rode yarn start para executar aplicação.

```
yarn start
```

6. Abra http://localhost:3000 para visualizá-lo no navegador.
