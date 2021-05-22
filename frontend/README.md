# Sublime Petshop

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
e como gerenciador de pacotes do NodeJS o npm. Os arquivos estão divididos
entre `components`(Header, PetCard e outros) e as `pages` que são as 
páginas em si do projeto. 

## Sobre

O sistema consiste em uma web app para visualização, criação, edição e 
exclusão de cadastros de pets.

- HomePage

A página inicial da aplicação possui um header, e exibe uma lista de 'cards'
com os pets cadastrados(caso haja). Em cada card há a opção de editar as
informações do respectivo pet, exibindo um modal com as informações atuais
podendo o usuário editá-las, e também a opção de deletar o mesmo, um modal
de confirmação da exclusão será apresentado para o usuário.
O botão 'Cadastrar Pet' redicionará o usuário para a página de cadastro de
um novo pet.

- PetCreatePage

A página PetCreatePage possui um header e o formulário que o usuário poderá
cadastrar um novo pet, passando informações como Nome, Idade, Pet, Raça, 
Nome do dono e Tel/Cel.

Há integrações com APIs externas. 
Bibliotecas: axios, styled-components e material-ui

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto
