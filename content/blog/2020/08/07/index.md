---
title: "Delegation Pattern em Kotlin"
date: "2020-08-07"
description: "Como funciona o <i>delegation pattern</i> ou padrão de delegação e como a linguagem Kotlin ajuda na sua utilização."
category: "post"
tags: ["kotlin", "delegation", "oo", "design pattern"]
---

![kotlin-logo](kotlin.png)

## O que é Delegação? ##

[**Delegação**](https://en.wikipedia.org/wiki/Delegation_pattern) é um padrão de arquitetura do software orientado a objetos. Seu objetivo é estender a funcionalidade de uma classe delegando essa função para outro objeto que implemente a mesma interface.

<!-- Suponha que queremos que uma classe B tenha a funcionalidade da classe A e a condição [is A]() é satisfeita, ou seja, B seja um tipo de A. -->

### Tipos de delegação ###
- Explicita - Pode ser implementada com qualquer linguagem
- Implícita - Usa recursos que a linguagem oferece para implementar a delegação

## Delegação com Kotlin ##
Kotlin oferece instrumentos nativos para implementar delegação, tanto de classes como de propriedades.

Essa característica da linguagem é interessante porque permite estender a funcionalidade da classe de uma forma menos trabalhosa. Não é necessário implementar os métodos das interfaces manualmente.

<!-- Outro aspecto importante é que a delegação permite implementar **herança múltipla**. -->

### A palavra reservada ***by*** ###
Kotlin usa a palavra reservada [***by***](https://kotlinlang.org/docs/reference/keyword-reference.html) para definir a **classe delegada**.

### Exemplo de delegação de classe ###
Para análise e estudo, veremos um exemplo de delegação de classe em Kotlin e em Java implementado de várias formas.

#### Delegação sem usar ***by*** ####

Vamos criar uma uma interface **IFacade** de uma [fachada](https://en.wikipedia.org/wiki/Facade_pattern), um data class **Connection** que contem dados de conexão e uma classe **IntegrationX** que implementa o método de conexão dessa interface:

````kotlin
interface IFacade {
    fun connect(connection: Connection)
}

data class Connection(val addr: String)

class IntegrationX(connection: Connection) : IFacade {
    override fun connect(connection: Connection) {
        println("connected to " + connection.addr)
    }
}
````

Abaixo vamos utilizar o padrão de delegação para estender a classe **IntegrationX1**, sem utilizar os recursos que a linguagem Kotlin nos oferece.

````kotlin
class IntegrationX1(private val integrationX: IFacade) : IFacade {
    override fun connect() {
        integrationX.connect()
    }
}
````

Reparem em dois pontos fundamentais:
- a classe **delegante (IntegrationX1)** e a classe **delegada (IntegrationX)** implementam a mesma interface.
- a classe **delegante (IntegrationX1)** faz referencia a classe **delegada (IntegrationX)**. 
- a classe **delegante (IntegrationX1)** implementa o método da interface, mas quem executa é a classe **delegada (IntegrationX)**.

#### Como ficaria a implementação em Java ####
Escrevendo um pouco mais de código, teríamos a mesma classe escrita em Java. Usaremos ela para comparar com o código da nossa próxima classe implementada com a palavra reservada ***by***.

````java
public class IntegrationX1 implements IFacade {

    private final IntegrationX integrationX;

    public IntegrationX1(IntegrationX integrationX) {
        this.integrationX = integrationX;
    }

    public void connect() {
        this.integrationX.connect();
    }
}
````

#### Delegação com ***by*** ####
A classe IntegrationX2 implementa o padrão de delegação utilizando o recurso que a linguagem Kotlin nos oferece. O código fica menor, mais limpo e elegante.

````kotlin
class IntegrationX2(connection: Connection) : IFacade by IntegrationX(connection)
````

Ao gerarmos o *bytecode* e decompilarmos o código, veremos que a classe gerada se assemelha muito com a classe de exemplo IntegrationX1.

````java
public final class IntegrationX2 implements IFacade {
   // $FF: synthetic field
   private final IntegrationX $$delegate_0;

   public IntegrationX2(@NotNull Connection connection) {
      Intrinsics.checkParameterIsNotNull(connection, "connection");
      super();
      this.$$delegate_0 = new IntegrationX(connection);
   }

   public void connect() {
      this.$$delegate_0.connect();
   }
}
````
O que o compilador fez foi:
- colocar o delegado **IntegrationX** em um campo **private final** da classe delegante **IntegrationX2**.
- implementar todos os métodos da interface **IFacade** chamando o delegado **IntegrationX** em cada uma.

## Conclusão ##
Particularmente eu não acho muito intuitivo o código da classe **IntegrationX2** usando a palavra-chave **by**, por isso é importante entender qual a intenção e o que está acontecendo por trás.

## Referências ##
- [Kotlin Delegation](https://kotlinlang.org/docs/reference/delegation.html)
