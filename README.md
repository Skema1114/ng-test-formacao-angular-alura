# NgTestFormacaoAngularAlura

## Neste projeto:

- Curso:

  - Angular: Testes automatizados com Jasmine e Karma
  - https://cursos.alura.com.br/course/angular-testes-automatizados-jasmin-karma

## Comandos utilizados

- npm install @fortawesome/fontawesome-svg-core
- npm install @fortawesome/free-solid-svg-icons
- npm install @fortawesome/angular-fontawesome
- npm install uuid@8.3.0
- npm i --save-dev @types/uuid

## Anotações

- O angular por padrão já possui o framework de testes chamado `Jasmine` e os arquivos terminam com o sufixo `spec.ts`, o `jasmine` é para escrever o teste, para rodá-lo é utilizado o `karma` que já vem por padrão instalado no angular cli;
- Na convenção (do instrutor e talvez do angular) é adicionar uma `#` antes de um método adicionado no `it` do teste (exemplo: `it('#generateUniqueIdWithPrefix', () => {})`) junto de uma estrutura para descreve-lo, que é `... should ... when ...` (exemplo: `it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {})`);
- Para rodar os testes com o `Karma` basta apenas executar o comando `npm test` e ele abrirá uma nova guia e ficará rodando os testes em tempo real, com a ideia de que o desenvolvedor possa codar e executar os testes em tempo real;
- **DICA SHOW:** No `describe` do teste adicionar o nome da classe de maneira dinámica, ou seja `UniqueIdService.name`, porque assim quando ela trocar de nome, no teste também trocará;
- **DICA SHOW:** No `it` do teste adicionar uma `template string` e o nome dos métodos de forma dinámica tambem, ou seja `#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}`, assim garante que caso o nome do método mudar, será alterado no teste também;
- O `beforeEach(() => {})` dos testes faz com que, as declarações inseridas dentro dele, sejam criadas umainstancia para cada condição (os `it`s) do teste, ou seja, o que estiver declarado ali nunca vai compartilhar o valor entre condições diferentes;
- A instancia do artefato que será testado sempre será única, cada `it` tem que ser atômico, ele nao pode sofrer influencia com os dados de outros testes;
- O `toThrow()` necessita que o método a ser chamado seja embrulhado por uma função, ou seja, assim `expect(() => service.generateUniqueIdWithPrefix(emptyValue)).toThrow()`;
- `expect(true).toBeTrue()` apenas testa se o valor é verdadeiro e so ceita o tipo `literal`, ou seja, apenas `x = true`. Já o `expect(true).toBe(true)` compara se um valor é igual ao outro, exemplo `x = true` se `literal == literal` mas vale ressaltar que o `x = new Boolean(true)` é uma instância de boolean e se comparado com `y = new Boolean(true)` dará falso pois cada um deles possui um endereço diferente de memoria. Por fim, o `expect(true).toBeTruthy()` é o mais genérico de todos, nao importa o que seja passado, se for resolvido pelo runtime do javascript e rotulado como true, o teste passará, exemplos que o `Truthy` deixará passar `true, new Boolean(true), 'asjdgjasgdjhsgad'`;
- O desenvolvedor que esta criando os testes é responsável por chamar o `Change Detection` (`detectChanges()`, que executara o que estiver em `ngOnInit()`) no momento que achar mais apropriado. é possível deixar a detecção de mudanças de forma automática, mas a equipe do Angular não recomenda;
- Não é recomendado chamar o `fixture.detectChanges()` no `beforeEach` porque caso seja necessario passar uma propriedade pro `ngOnInit` em algum dos `it`s, o `ngOnInit` será chamado antes da propriedade ser passada, então o o `fixture.detectChanges()` precisa estar nos testes que precisam do mesmo e no momento exato, por exemplo, passar as propriedades primeiro e depois chamar o `change tetection`;
- A função `it` recebe um parametro, geralmente chamado de `done`, quando o mesmo é declarado e nao chamado, da um `timeout` e retorna um erro de teste, quando são operações assincronas pequenas, é opcional chamar o `done()` quando aquela parte assincrona terminar, pois assim pode-se ter uma certeza que aquela parte foi executada. Pode-se utilizar essa estratégia também quando precisa testar se um determinado método foi chamado ou não;
- Na convenção (do instrutor) é adicionar um `(@Input)` e o nome da variável `(@Input id)` informando que aquele determinádo método recebe uma input property, essa convenção também é valida para outputs propertys, no caso destas pode-se adicionar o `(@Output)` e o nome da variável, exemplo `(@Output liked)` facilitando a visualização dos testes que recebem estas propriedades;

## Estrutura básica e padrão dos testes com o Jasmine

```ts
describe("O artefato que queremos testar", () => {
  it("Primeira condição que queremos testar", () => {
    // codigo
  });

  it("N condicoes necessarias", () => {
    // codigo
  });
});
```
