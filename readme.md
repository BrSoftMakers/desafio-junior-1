![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio

O sistema, desenvolvido utilizando React, consiste em uma web app para visualização e criação de pets, possuindo informações como: nome, idade, animal (cachorro ou gato), raça, dono, telefone do dono.

## Layout web
O layout foi desenvolvido simples para que possa ser utilizado de maneira agradável ao usuário, tendo alguns tratamentos como: máscaras nos inputs, loadings, alertas personalidos, entre outros.
## Funcionalidades

O projeto possui todas funcionalidades requeridas, sendo elas:
- Listagem
- Visualização 
- Criação
- Edição
- Exclusão

## Tecnologias utilizadas
### Front end
- ReactJS (HTML / CSS / JS)
- React Router Dom
- React Modal
- React Icons
- Axios

### Backend
- NodeJs
- Express;
- Sequelize; 

Foi desenvolvida uma api-backend para comunicação com o banco de dados, você pode encontra-la no repositório abaixo:
- [Repositório backend](https://github.com/SPLeandro/pets-backend)

## Deploy
Foi feito a hospedagem do frontend na heroku, encontra-se no link: 
- [Heroku](https://fpets.herokuapp.com/)

## Como executar o projeto


### Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/SPLeandro/desafio-desenvolvedor-junior

# entrar na pasta do projeto
cd pets-frontend

# instalar dependências
npm install

# executar o projeto
npm start
```

## Observações
Por default o projeto está utilizando a API-backend hospedada na heroku, caso queira utilizar outra API, é necessário alterar a Base URL em "src/services/api.js"

## Autor

- Leandro Pereira dos Santos
- Lsaantos@outlook.com
- [Linkedin](www.linkedin.com/in/psleandro)
