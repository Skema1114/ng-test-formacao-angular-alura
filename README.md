# NgTestFormacaoAngularAlura

## Neste projeto:

- Primeiro curso:

  - Angular: Testes automatizados com Jasmine e Karma
  - https://cursos.alura.com.br/course/angular-testes-automatizados-jasmin-karma

- Segundo curso:

  - Angular: Avançando com testes automatizados
  - https://cursos.alura.com.br/course/angular-avancando-testes-automatizados

## Comandos utilizados

- npm install @fortawesome/fontawesome-svg-core
- npm install @fortawesome/free-solid-svg-icons
- npm install @fortawesome/angular-fontawesome
- npm install uuid@8.3.0
- npm i --save-dev @types/uuid
- npm i -D karma-firefox-launcher
- npm i -D karma-junit-reporter

## Anotações

- O angular por padrão já possui o framework de testes chamado `Jasmine` e os arquivos terminam com o sufixo `spec.ts`, o `jasmine` é para escrever o teste, para rodá-lo é utilizado o `karma` que já vem por padrão instalado no angular cli;
- Na convenção (do instrutor e talvez do angular) é adicionar uma `#` antes de um método adicionado no `it` do teste (exemplo: `it('#generateUniqueIdWithPrefix', () => {})`) junto de uma estrutura para descreve-lo, que é `... should ... when ...` (exemplo: `it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {})`);
- Para rodar os testes com o `Karma` basta apenas executar o comando `npm test` e ele abrirá uma nova guia e ficará rodando os testes em tempo real, com a ideia de que o desenvolvedor possa codar e executar os testes em tempo real;
- **DICA SHOW:** No `describe` do teste adicionar o nome da classe de maneira dinámica, ou seja `UniqueIdService.name`, porque assim quando ela trocar de nome, no teste também trocará;
- **DICA SHOW:** No `it` do teste adicionar uma `template string` e o nome dos métodos de forma dinámica tambem, ou seja `#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}`, assim garante que caso o nome do método mudar, será alterado no teste também;
- O `beforeEach(() => {})` dos testes faz com que, as declarações inseridas dentro dele, sejam criadas umainstancia para cada condição (os `it`s) do teste, ou seja, o que estiver declarado ali nunca vai compartilhar o valor entre condições diferentes;
- A instância do artefato que será testado sempre será única, cada `it` tem que ser atômico, ele nao pode sofrer influência com os dados de outros testes;
- O `toThrow()` necessita que o método a ser chamado seja embrulhado por uma função, ou seja, assim `expect(() => service.generateUniqueIdWithPrefix(emptyValue)).toThrow()`;
- `expect(true).toBeTrue()` apenas testa se o valor é verdadeiro e só aceita o tipo `literal`, ou seja, apenas `x = true`. Já o `expect(true).toBe(true)` compara se um valor é igual ao outro, exemplo `x = true` se `literal == literal` mas vale ressaltar que o `x = new Boolean(true)` é uma instância de boolean e se comparado com `y = new Boolean(true)` dará falso pois cada um deles possui um endereço diferente de memória. Por fim, o `expect(true).toBeTruthy()` é o mais genérico de todos, não importa o que seja passado, se for resolvido pelo runtime do javascript e rotulado como true, o teste passará, exemplos que o `Truthy` deixará passar `true, new Boolean(true), 'asjdgjasgdjhsgad'`;
- O desenvolvedor que está criando os testes é responsável por chamar o `Change Detection` (`detectChanges()`, que executará o que estiver em `ngOnInit()`) no momento que achar mais apropriado. é possível deixar a detecção de mudanças de forma automática, mas a equipe do Angular não recomenda;
- Não é recomendado chamar o `fixture.detectChanges()` no `beforeEach` porque caso seja necessario passar uma propriedade pro `ngOnInit` em algum dos `it`s, o `ngOnInit` será chamado antes da propriedade ser passada, então o o `fixture.detectChanges()` precisa estar nos testes que precisam do mesmo e no momento exato, por exemplo, passar as propriedades primeiro e depois chamar o `change detection`;
- A função `it` recebe um parâmetro, geralmente chamado de `done`, quando o mesmo é declarado e nao chamado, da um `timeout` e retorna um erro de teste, quando são operações assíncronas pequenas, é opcional chamar o `done()` quando aquela parte assíncrona terminar, pois assim pode-se ter uma certeza que aquela parte foi executada. Pode-se utilizar essa estratégia também quando precisa testar se um determinado método foi chamado ou não;
- Na convenção (do instrutor) é adicionar um `(@Input)` e o nome da variável `(@Input id)` informando que aquele determinado método recebe uma input property, essa convenção também é válida para outputs properties, no caso destas pode-se adicionar o `(@Output)` e o nome da variável, exemplo `(@Output liked)` facilitando a visualização dos testes que recebem estas propriedades;
- Para adicionar outro browser nos testes do karma, é necessário instalar as dependências (exemplo `npm i -D karma-firefox-launcher`) e depois no arquivo `karma.config.js`, adicioná-lo em `plugins` (exemplo, `equire("karma-firefox-launcher"),`) e colocar na lista em `browsers` (exemplo, `browsers: ["Chrome", "Firefox"],`, **OBS:** O INSTRUTOR NÃO RECOMENDA DEIXAR ATRELADO A DIVERSOS NAVEGADORES A INICIALIZAÇÃO PADRÃO DO TESTE E SIM A CRIAÇÃO DE UM SCRIPT SECUNDÁRIO QUE TESTA EM TODOS OS NAVEGADORES UTILIZADOS) (**OBS:** É NECESSÁRIO TER OS NAVEGADORES INSTALADOS NO PC);
- **DICA SHOW:** Criar um script separado para iniciar o teste com todos os navegadores desejados e um teste padrão com o chrome, no `package.json` foi adicionado um `script` (em `scripts`) chamado teste-common (`"test-common": "ng test --browsers Chrome,Firefox"`) que inicia o teste em todos os navegadores comuns, para executá-lo basta rodar o comando `npm run test-common`;
- Quando é necessáio fazer com que um teste precise esperar um tempo pára executar uma ação, é possível utilizar o `fakeAsync` (o mesmo foi utilizado no arquivo `photo-frame.component.spect.ts`, ele é passado como segundo parâmetro do `it`, exemplo: `it('', fakeAsync(() => {}))`) e dentro das chaves dele é possível utilizar o `tick` que permite que uma pausa seja adicionada, exemplo: `tick(500)` para meio segundo;
- Quando chama o `fixture.detectChanges()`, atualiza uma propriedade (exemplo: `component.likes++`) e depois quer verificar se alterou o valor deste componente na DOM, é preciso chamar novamente o `fixture.detectChanges()` para atualizar os elementos da DOM e então depois disso fazer a verificação desejado com os valores dos componentes localizados na mesma;
- **DICA DO CURSO:** Instâncias de `ComponentFixture<T>` têm uma referência para a representação do template do componente no DOM permitindo que o desenvolvedor possa fazer pesquisas;
- Quando os testes fazem integração com a DOM, estes normalmente podem ser executados mais lentos do que os outros. Testes de DOM são mais lentos então por convenção do instrutor, os que interagem na DOM recebem as iniciais `(D)`para serem faceis de diferenciar (há pessoas que separam ops testes de DOM em arquivos separados contendo apenas testes de DOM que são os mais lentos);
- **DICA SHOW:** Quando tiver dentro de um `subscribe`, sempre passar o `done()` nos parâmetros do `it` e adicionar o mesmo ao final do `subscribe`;
- **DICA SHOW:** Fazer um `it` para cada teste e tentar não fazer um teste que faça 2 verificações;
- O `fixture.nativeElement` e o `fixture.debugElement.nativeElement` tem a mesma finalidade com a diferença de que o último é possível fazer querys mais específicas em um determinado pedaço do DOM associado com o componente, ou seja **PALAVRAS DO CURSO:** ele tem como referência o elemento nativo associado ao template do componente, inclusive possui uma forma exclusiva do Angular de procura de elementos;

## Estrutura básica e padrão dos testes com o Jasmine

```ts
describe("O artefato que queremos testar", () => {
  it("Primeira condição que queremos testar", () => {
    // código
  });

  it("N condicoes necessarias", () => {
    // código
  });
});
```
