# Como instalar o projeto:

Para instalar o projeto siga os passos abaixo:

- Baixe o repositório;
- Baixe e instale o PostgreSQL;
- Abra o cmd na pasta onde esta o projeto;
- Execute o comando abaixo para instalar as dependencias:
```sh
npm i
```
- Instale o knex de forma global atravéz do seguinte comando:
```sh
npm i knex -g
```
- Utiliza o seguinte comando para concluir a instalação do knex:
```sh
knex init
```
- Copie o código do arquivo knex.example para dentro do knexfile.js substituindo todo o conteúdo;
- Substitua os dados com os dados da conexão com seu banco de dados;
- Crie um arquivo .env e coloque nele o código presente no arquivo env_file;
- No arquivo .env dentro de "authSecret:" insira uma sequencia de caracteres aleatórios incluindo caracteres especiais;
- Após ter ceteza de ter configurado os dados do seu banco, abra o cmd na pasta do projeto e insira o seguinte comando:
```sh
knex migrate:latest
```
