---
title: "O que é o Deno?"
date: "2020-06-25"
description: "O que é o Deno, o novo <i>runtime</i> para Javascript e Typescript?"
category: "post"
---

![deno](deno.png)

## O que é Deno? ##
[Deno](https://deno.land/) é o novo projeto do criador do [NodeJs](https://nodejs.org/). [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) vem desde o fim de 2018 trabalhando nesse novo *runtime* para **javascript** e **typescript**, que muitos apontam como o possível sucessor do Node.

## Motivação ##
NodeJs é um projeto lançado em 2009, quando o universo do Javascript era bem diferente. A linguagem javascript mudou muito de lá pra cá, como com a criação de *promisses* e *async/await*. [Typescript](https://pt.wikipedia.org/wiki/TypeScript) então só surgiu em 2012.

Com novas tecnologias e o avanço de linguagens de programação somadas a experiencia conquistada durante anos no projeto NodeJs, é natural que existam arrependimentos, mesmo num projeto de indiscutível sucesso.

Em junho de 2018 Ryan Dahl deu uma [palestra](https://www.youtube.com/watch?v=M3BM9TB-8yA) onde relatava coisas que ele gostaria de ter feito diferente no NodeJs.

## Características ##
A [versão 1.0](https://deno.land/v1) do novo *runtime* foi lançada em maio. Abaixo destaco alguns pontos.

### *Core* ###

- Deno foi escrito em **Rust**, Node em C++
- Deno usa o *event loop* **Tokyo**, desenvolvido em Rust
- Deno suporta **Typescript** nativamente
- Deno usa **V8** como runtime, assim como Node

### Segurança ###
Uma das características mais importantes no Deno foi a segurança. Ao contrário do Node, o código Deno executa em uma ***sandbox***, ou seja, em tempo de execução o programa não tem acesso aos recursos da máquina.

É necessário dar permissão para que o programa escrito em Deno tenha acesso ao sistema de arquivos, à rede, às variáveis de ambiente e permissão para executar programas externos. Ao tentar acessar um dos recursos, o sistema pedirá permissão desde que uma da seguintes flags não tenha sido utilizada ao executar o programa:

- para o sistema de arquivos, **--allow-write** 
- para rede, **--allow-net**
- para as variáveis de ambiente, **--allow-env**
- para executar programas externos, **--allow-run**

### Modules ###
Deno importa bibliotecas por URLs. Isso permite que os programas sejam distribuídos sem a necessidade de um repositório central de programas, como npm, maven, etc. Ou seja, com Deno, não temos mais **npm** nem **node_modules**.

Quando a aplicação é inicializada, o *runtime* daz download de todas as bibliotecas utilizadas.
As bibliotecas baixadas são colocadas em um **cache** para agilizar as proximas execuções. Para forçar um novo download, foi criada a flag **--reload**.

### Assincronismo ###
A promessa é de que com Deno seja mais fácil trabalhar com código assíncrono, já que a sua implementação foi pensada com isso em mente, ao contrário do node.

## Limitações ##
A publicação da versão 1.0 deixa claro que existem limitações de uso para projetos que necessitam de soluções mais maduras.

- Comparado com Node, a performance de processamento HTTP pode ser inferior.

- A performance do compilador pode ser outro gargalo, já que o Deno utiliza o compilador de Typescript da Microsoft. Um novo compilador escrito em Rust está nos objetivos futuros.

- Ainda está em desenvolvimento uma interface para criação de extensões.

- Apesar de serem escritos em javascript, os pacotes escritos para Node ainda não são totalmente compatíveis. Para atingir esse objetivo, uma [camada de compatibilidade](https://deno.land/std/node/) está sendo desenvolvida.

## Conclusão ##
Ainda é cedo para projetar o futuro do Deno. Ao mesmo tempo que muitos celebraram o lançamento, também houve muita controvérsia.

NodeJs tem mais de 10 anos de desenvolvimento, milhares de desenvolvedores trabalhando na sua evolução e no seu ecossistema. Não existe motivo para troca e escolhe-lo para um novo projeto critico seria um risco.

É importante acompanhar novas tecnologias e ver se elas passarão no "teste" do tempo. E mesmo que não passem, elas podem apontar novas tendencias. Por exemplo, abandonar o NPM e não usar nenhum gerenciador de bibliotecas e todas as suas vantagens, é uma mudança de impacto. Como as comunidades de desenvolvedores vão reagir e se adaptar? Qual o custo-beneficio?

Cada mudança é uma oportunidade de aprendizado. Por enquanto, vale a pena acompanhar.

&nbsp;