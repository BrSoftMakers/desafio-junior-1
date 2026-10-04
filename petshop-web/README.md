# SoftPet Web

Interface do projeto SoftPet, feita com **Next.js** (App Router) e fiel ao protótipo do Figma do desafio.

## Tecnologias

- [Next.js](https://nextjs.org) 16 (App Router) com TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) (Dialog, Popover e Calendar)
- [lucide-react](https://lucide.dev) para alguns ícones
- [date-fns](https://date-fns.org) para datas (locale `pt-BR`)

## Como rodar

### Pré-requisitos

- Node.js 20 ou superior
- A **API rodando** em `http://localhost:3001` (veja o README da pasta `petshop-api`)

### Passo a passo

```bash
cp .env.example .env.local
npm install
npm run dev              # http://localhost:3000
```

### Variáveis de ambiente

| Variável              | Descrição        | Padrão                  |
| --------------------- | ---------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL` | URL base da API  | `http://localhost:3001` |

Se alterar o `.env.local`, reinicie o `npm run dev`.

### Scripts

| Comando         | O que faz                                |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento              |
| `npm run build` | Build de produção                        |
| `npm run start` | Executa o build de produção              |
| `npm run lint`  | Verifica o código com ESLint             |

## Funcionalidades

- Listagem em cards com **paginação** e **busca** (por pet ou por dono), refletidas na URL (`?page=2&q=simba`)
- Card com 3 estados: normal, hover (borda gradiente) e ativo (painel de detalhes)
- Modal de **cadastro** e **edição** (mesmo formulário), com seletor de tipo, máscara de telefone e datepicker em português que bloqueia datas futuras
- Modal de **remoção** com confirmação
- Erros da API exibidos dentro do modal
- Tela de erro quando a API está indisponível

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # fonte, metadados e viewport
│   ├── page.tsx            # listagem (Server Component)
│   ├── error.tsx           # tela de erro
│   └── globals.css         # tokens do tema e utilitários
├── components/
│   ├── PetList.tsx         # estado dos itens e dos modais
│   ├── PetItem.tsx         # card (normal / hover / ativo)
│   ├── PetFormModal.tsx    # cadastrar e editar
│   ├── DeletePetModal.tsx  # remover
│   ├── PetFields.tsx       # campos compartilhados pelos modais
│   ├── PetTypeRadio.tsx    # cachorro / gato
│   ├── BirthDatePicker.tsx # datepicker
│   ├── CreatePetButton.tsx # botão "Cadastrar" + modal
│   ├── FormField.tsx       # ícone + label + campo
│   ├── ModalHeader.tsx
│   ├── Pagination.tsx
│   ├── Icon.tsx            # ícones SVG coloríveis via máscara CSS
│   └── ui/                 # componentes do shadcn/ui
├── lib/
│   ├── api.ts              # cliente da API
│   ├── pet-utils.ts        # idade, data e máscara de telefone
│   └── utils.ts            # helper `cn`
└── types/pet.ts            # tipos compartilhados

public/img/                 # ícones e logo exportados do Figma
```

## Decisões técnicas

- **Server Component na listagem.** A página busca os dados no servidor, sem `useEffect` nem estado de carregamento. Busca e paginação são um formulário GET e links comuns, funcionando até sem JavaScript.
- **Client Components só onde há interação.** `PetList` guarda qual item está aberto e qual modal está ativo. Só um item fica expandido por vez, como no protótipo.
- **Atualização após mudanças.** Depois de criar, editar ou remover, os modais chamam `router.refresh()` para o servidor reenviar a lista atualizada.
- **Um formulário para cadastro e edição.** O mesmo componente atende os dois casos e o modal de remoção reaproveita os campos em modo somente leitura.
- **Ícones como máscara CSS.** Os SVGs do Figma têm cor fixa. O componente `Icon` os usa como máscara sobre `currentColor`, então a cor muda por classe (`text-white`, `text-brand-blue`).
- **Datas sem surpresas de fuso.** O `parseISO` e o `format` do `date-fns` evitam que "22/08/2020" vire "21/08" por causa de UTC.
- **Tokens do Figma no Tailwind.** Cores e gradientes do protótipo ficam em `globals.css` e viram classes (`bg-brand-gradient`, `text-cyan`, `border-gradient`).
- **Respeito a `prefers-reduced-motion`.** Animações são desligadas para quem prefere menos movimento.

## Observações

- Se a API estiver fora do ar, a página exibe uma tela de erro com o botão **Tentar novamente**.
- O avatar usa o ícone de gato ou cachorro conforme o tipo do pet.
- A idade é calculada a partir da data de nascimento. Para menores de 1 ano, é exibida em meses.