# Bookwise

> Catálogo de livros com filtro por gênero e recomendações, montado sobre uma API
> pública.

`Vue 3` `TypeScript` `Vite`

---

## O problema

Exercício de composição de interface: dado um catálogo com categorias, livros e
recomendações, como montar telas a partir de componentes pequenos sem duplicar
lógica de exibição a cada seção.

## Decisões de arquitetura

**Interfaces do domínio declaradas antes dos componentes.**
`ICategories`, `IBooksData` e `IBookRecommendation` ficam em `src/interfaces` e
são a fonte da verdade do formato do dado. O componente recebe tipo, não `any`,
então mudança no formato da resposta quebra no compilador, não em produção.

**Acesso HTTP centralizado em `src/http`.**
Nenhum componente chama `fetch` direto. Quando a origem do dado mudar, muda um
arquivo.

**Componentes granulares e reutilizáveis.**
`CardBook`, `CardCategorie`, `Tag`, `SelectableCategory`, cada um com uma
responsabilidade visual. O ganho aparece quando a mesma peça reaparece em três
contextos sem cópia.

**Sem framework de UI.**
Escolha de escopo: o objetivo era exercitar composição em Vue, e biblioteca de
componente pronta esconderia justamente o que o projeto queria treinar.

## Rodando localmente

```bash
git clone https://github.com/renawmontanari/bookwise.git
cd bookwise
cp .env.example .env
npm install
npm run dev
```

| Variável | Para que serve |
|---|---|
| `VITE_API_URL` | Endpoint do catálogo |
| `VITE_API_KEY` | Chave de acesso da API |

## O que eu faria diferente

**A chave da API estava escrita no código-fonte.** Credencial em repositório
público é credencial vazada, precisa sair do código, entrar em variável de
ambiente e ser rotacionada na origem. Corrigir a linha sem revogar a chave antiga
não resolve nada, porque o histórico do Git continua guardando o valor.

**Sem estados de carregamento e de erro.** A tela hoje assume que a requisição
sempre dá certo. Rede lenta ou API fora do ar resultam em interface vazia sem
explicação.

**Depender de um bucket de JSON hospedado é frágil.** Serve ao protótipo, mas
qualquer evolução real pede uma API própria.

**Sem testes.** A transformação da resposta em modelo de exibição é a candidata
natural.

## Licença

MIT
