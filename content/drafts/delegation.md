---
title: "delegation"
date: "2020"
description: "delegation."
tags: ["oo", "monitoração"]
---

# Delegação #

**Delegação** em orientação a objetos é delegar a responsabilidade de uma instância para outra.


xxx
Suponha que queremos que uma classe B tenha a funcionalidade da classe A e a condição [is A]() é satisfeita, ou seja, B seja um tipo de A.

## Tipos de delegação ##
- Explicita - Pode ser implementada com qualquer linguagem
- Implícita - Usa recursos que a linguagem oferece para implementar a delegação

## Delegation com Kotlin ##
Kotlin oferece instrumentos nativos para implementação de delegação de classes e delegação de propriedades.

Essa característica da linguagem é interessante porque permite extender a funcionalidade da classe de uma forma mais fácil. Não é necessário implementar os métodos das interfaces manualmente.

Outro aspecto importante é que a delegação permite implementar **herança múltipla**.

### Delegação de Classes ###
Kotlin usa a palavra chave ***by*** para definir o **delegado**.

````kotlin
````
