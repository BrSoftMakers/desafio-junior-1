# Projeto desenvolvido com base nas tecnologias que a empresa pediu e usa, como:

- Node
- Express
- Sequelize
- React (css, html e js)

## Instruções de configurações gerais:

- É necessário instalar o mysql na sua máquina, caso seja a versão 8 ou superior do mysql, aconselho a criar outro usuário e não usar o usuário padrão "root". 0BS: Lembre-se de dar permissões ao novo usuário.

- Depois do mysql instalado, entre no mysql, através da linha de comando (cmd do windows):
  Insira este comando: mysql -h localhost -u seu_nome_de_usuario -p e em seguida, insira a senha do seu usuário.

- Em seguida, crie um database usando o comando: CREATE DATABASE nome_do_seu_banco;

- Instale os modulos de dependencias no backend e no frontend/client: -> npm install node-modules

- Pronto, agora você já concluiu o primeiro passo.

## Instruções para inicializar o back-end:

- Com o banco de dados criado no seu pc, entre no seu ambiente de desenvolvimento, se dirija até -> src/config/database.js e insira os dados de conexão do seu banco de dados.

- Após finalizar a última etapa, crie o modelo das tabelas do banco de dados. Abra o terminal e utilize o comando: node src/model/petModel.js

  **ALERTA**

- Em seguida, dirija-se até -> src/model/petModel.js e comente a linha 39 -> (Pet.sync({ force: true })).

- Após finalizar todos esses passos, você já pode inicializar o servidor. Ainda no terminal, use o comando: npm start
  Esse comando irá fazer a aplicação rodar.

## Instruções para inicializar o front-end:

- No terminal, navegue até a pasta client: cd frontend -> cd client

- Após executar os passos anteriores e estar na pasta client, utilize o seguinte comando para inicializar a app: npm start

## Pronto, a a aplicação está rodando !!!
