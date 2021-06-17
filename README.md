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
