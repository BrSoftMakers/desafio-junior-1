# SoftPet — Desafio Fullstack Júnior (SoftMakers)

Aplicação para **listar, visualizar, cadastrar, editar e excluir animais de estimação** de uma petshop, junto com os dados do respectivo dono. O visual segue o protótipo do Figma fornecido no desafio.

- **Front-end:** Next.js (App Router) + Tailwind CSS + shadcn/ui
- **Back-end:** Nest.js + TypeORM + PostgreSQL

## Funcionalidades

- Listagem em cards, com **paginação** (16 por página) e **busca** por nome do pet ou do dono
- Cada card se expande e mostra raça, telefone e idade (calculada a partir da data de nascimento)
- **Cadastro** e **edição** em modal, com seletor de tipo (cachorro ou gato), máscara de telefone e datepicker em pt-BR
- **Remoção** com modal de confirmação
- Validação dos dados na API, com mensagens de erro exibidas no modal
- Tela de erro amigável quando a API está indisponível

## Estrutura do repositório

```
.
├── petshop-api/   # API REST (Nest.js + TypeORM + PostgreSQL)
├── petshop-web/   # Interface (Next.js)
└── README.md
```

Cada projeto tem seu próprio README com mais detalhes:

- [`petshop-api/README.md`](./petshop-api/README.md)
- [`petshop-web/README.md`](./petshop-web/README.md)

Na raiz do repositório:

```bash
cp .env.example .env
docker compose up --build
```

Acesse **http://localhost:3000**. A API fica em http://localhost:3001.
Para parar: `Ctrl + C`. Para apagar também os dados: `docker compose down -v`.

## Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org) 20 ou superior
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (para subir o PostgreSQL)

> Se preferir não usar Docker, instale o PostgreSQL localmente, crie um banco e ajuste os valores do `.env` da API.

### 1. Clonar o repositório

```bash
git clone <url-do-seu-fork>
cd <pasta-do-repositorio>
```

### 2. Banco de dados e API

Em um terminal:

```bash
cd petshop-api
cp .env.example .env        # os valores padrão já funcionam
docker compose up -d        # sobe o PostgreSQL
npm install
npm run start:dev           # API em http://localhost:3001
```

As tabelas são criadas automaticamente na primeira execução.

### 3. Front-end

Em **outro** terminal:

```bash
cd petshop-web
cp .env.example .env.local
npm install
npm run dev                 # aplicação em http://localhost:3000
```

Abra **http://localhost:3000** no navegador e clique em **Cadastrar** para criar o primeiro pet.

> No PowerShell (Windows), o comando `cp` também funciona. No CMD, use `copy`.

### Portas utilizadas

| Serviço    | Porta |
| ---------- | ----- |
| Front-end  | 3000  |
| API        | 3001  |
| PostgreSQL | 5432  |

## Problemas comuns

| Sintoma | Causa provável | Solução |
| --- | --- | --- |
| `ECONNREFUSED` ao subir a API | Banco fora do ar | Abra o Docker Desktop e rode `docker compose up -d` |
| `EADDRINUSE` na porta 3000 ou 3001 | Outro processo usando a porta | Encerre o processo antigo ou mude a porta |
| Tela "Não foi possível carregar os pets" | API desligada | Suba a API e clique em "Tentar novamente" |
| `password authentication failed` | `.env` mudou depois que o banco foi criado | Rode `docker compose down -v` (apaga os dados) e suba de novo |

## Decisões de projeto

- **Formulário fiel ao Figma.** O modal pede nome do pet, tipo, raça, data de nascimento aproximada, nome do dono e telefone, exatamente como no protótipo.
- **Dados completos do dono no banco.** O enunciado pede dados pessoais, de contato e de endereço. Por isso a API aceita também CPF, e-mail e endereço, mas como **campos opcionais**, sem poluir a interface do protótipo.
- **Data de nascimento em vez de idade.** O protótipo mostra "2 Anos (22/08/2020)". A API guarda a data, e a idade é calculada na hora da exibição, assim ela nunca fica desatualizada.
- **Listagem renderizada no servidor.** A página busca os dados no servidor (Server Component), e apenas as partes interativas (itens, modais) são Client Components.
- **Paginação e busca no servidor.** Evita carregar todos os pets de uma vez e escala melhor.

## Limitações conhecidas

- Cada pet cria o seu próprio registro de dono. Um mesmo dono com dois pets aparece duas vezes na tabela `owners`.
- Ao remover um pet, o dono permanece no banco (registro órfão).
- `synchronize: true` do TypeORM cria e altera as tabelas automaticamente. É conveniente para desenvolvimento, mas em produção o correto é usar migrations.
- Não há autenticação.

## Possíveis evoluções

- Reaproveitar o dono existente (busca por telefone ou CPF) ao cadastrar novo pet
- Migrations no lugar de `synchronize`
- Testes automatizados (unitários e e2e)
- Dockerfile para API e front, com tudo subindo em um único `docker compose up`
- Deploy em nuvem

## Autor

Desenvolvido por **Pedro** para o processo seletivo da SoftMakers.