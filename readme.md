 ![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Desenvolvedor Fullstack - Júnior
Seja bem-vindo! Este Desafio me foi apresentado para testar minhas habilidades como Dev.

## Proposta
Foi desenvolvido um projeto utilizando React no front-end e Node.js no back-end com a finalidade de que seja possível listar, visualizar, criar, editar e excluir animais de estimação de um petshop, foi também adicionado um sistema de autenticação com o firebase, e na listagem de pets foi adicionado páginação.

# Tecnologias

 - ReactJs
 - NodeJs
 - Prisma
 - PostgreSQL
 - Docker
 - Firebase
 - TailwindCSS
 - HeadLessUI
 - Figma
 - Typescript
 - Express

# Minhas experiências

Foi um projeto e tanto, e graças a Deus está concluído, não tenho costume de trabalhar com
frontend, mas achei que estava na hora de me desafiar, quase não dava tempo de entregar o projeto também, foi muita correria durante a semana, mas o projeto está pronto, minha expriência com o backend não foi tão grande, já tinha uma noção de como trabalhar, agora
com o frontend, foi o maior desafio, nunca tinha chegado a este nível, e muita coisa
fui experimentando durante o projeto, CSS é muito complicado, mas agora me considero mais 
amigo dele, o TailwindCSS facilitou muito minha jornada, já havia trabalhado com React
Porém só em aulas, agora realmente fiz um projeto grande, tenho muitas coisas ainda para implementar
como um sistemas de filas, validação de dados no backend, melhorar a estrutura de pastas do frontend,
procurar entender melhor o sistema do firebase, atualizar o estilo do formulário, são coisas
que levam bastante tempo, mas irei aos poucos atualizando este repositorio, para melhorar meu
proprio conteudo de estudo

# Como instalar meu projeto

Clone o repositorio e adicione as dependências

```
git clone https://github.com/leandro-wrocha/desafio-junior-1.git

## adicione as dependencias da API
cd desafio-junior-1/api
yarn

## adicione as dependencias da web
cd desafio-junior-1/web
yarn
```

Inicializando banco de dados com Docker
```
cd desafio-junior-1/api
docker-compose up

## abra outra guia do terminal e carregue os dados do DB com schema do prisma

cd desafio-junior-1/api
yarn prisma migrate dev
yarn prisma generate
```

Agora vamos iniciar o projeto

```
cd desafio-junior-1/api
yarn dev

cd desafio-junior-1/web
yarn dev
```

### Observação:: Usuário de login da aplicação é leandro-wrocha