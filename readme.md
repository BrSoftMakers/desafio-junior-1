<h1>Passo a passo</h1>

#### Back End

`Passo 1`: Inicializar o Back End instalando o npm na pasta:

Exemplo: 

```
    C:\CaminhoX\CaminhoX\CaminhoX\CaminhoX\PetShop_SoftMaker\Back_End> npm install
```

`Passo 2`: Criar uma Base de dados/Data base no Postgres;

`Passo 3`: Tire o '.example' do arquivo '.env.example' e coloque as informações da porta de acesso da api e as informações do seu Postgres no arquivo;

Exemplo de como deve ficar:

```
APP_PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=1234
DB_NAME=PetShop

```

`Passo 4`: Agora colocar para funcionar o server do projeto:

```
npm run server
```


#### Front End

`Passo 1`: Inicializar o Front End instalando o npm na pasta;

Exemplo:
```
    C:\CaminhoX\CaminhoX\CaminhoX\CaminhoX\PetShop_SoftMaker\Front_End\PetShop> npm install
```

`Passo 2`: Tire o '.example' do arquivo '.env.example' e coloque a porta de acesso que está o api no arquivo;

> Colocando no final '/api'

Exemplo: 
```
VITE_API_URL=https://localhost:5000/api
```

`Passo 4`: Agora para finalizar, colocar para rodar o projeto front:

```
npm run dev
```