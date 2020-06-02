---
title: "Funções em Javascript: entidades de primeira classe"
date: "2020-05-18"
description: "Em Javascript, funções são entidades de primeira classe. O que são entidades de primeira classe? E o que isso significa na prática?"
---

Em linguagens de programação, define-se uma entidade de primeira classe ([first-class citizens](https://en.wikipedia.org/wiki/First-class_citizen)) como a entidade em que é permitido realizar qualquer operação oferecida por aquela linguagem.

Em Javascript, funções são entidades de primeira classe. 
<!-- Com elas é possível: -->

Suponha a função declarada abaixo:
```javascript
// declaração
function minhaFn() {
    console.log('minhaFn executou');
}
```

Em javascript é possível atribuí-la a uma variável, um atributo ou guardá-la em um array:
```javascript
// atribuição
let minhaVar = minhaFn;
// atribuindo a um atributo
let meuObj = { meuAtrib : minhaFn }
// declarando e colocando num array ao mesmo tempo
arr.push(function(){console.log('minhaFn executou');})
```

Dessa forma, minhaFn pode ser executada tanto pelo nome original como pelas variáveis:
```javascript
minhaFn();
// ou
minhaVar();
// ou
meuObj.meuAtrib();
```
&nbsp;

Em javascript também podemos passar uma função como parâmetro de outra função e também podemos retornar uma função como resposta:
```javascript
function executaFuncao(fn) {
    fn();
    return fn;
}
```
Esse recurso é poderoso, e é por isso que conseguimos fazer coisas mais sofisticadas em javascript como no exemplo:

```javascript
// array de pessoas
let pessoas = [
    {nome: 'Antônio', idade: 25},
    {nome: 'José', idade: 51},
    {nome: 'Maria', idade: 38}
];
// define uma função de comparação
function comparePor(prop) {
    return function (a, b) {
        let x = a[prop],
            y = b[prop];
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1
        } else {
            return 0;
        }
    }
}
// ordena por nome usando a função retornada por comparePor()
pessoas.sort(comparePor('nome'));

```
&nbsp;

Por último, podemos mencionar que podemos usar funções com operadores condicionais, como if por exemplo:
```javascript
let teste = (fn1() === fn2());
```
&nbsp;
