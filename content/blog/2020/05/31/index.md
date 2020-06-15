---
title: "Implementando filas de tarefas com Bull"
date: "2020-05-31"
description: "Gerenciando filas assíncronas em projetos NodeJS com Bull."
---

![bull](bull.png)

&nbsp;

Um tutorial passando pelos pontos básicos da utilização da biblioteca [Bull](https://github.com/OptimalBits/bull) para gerenciar filas de tarefas assíncronas em aplicações [NodeJs](https://nodejs.org/).

## O que é Bull? ##

[Bull](https://github.com/OptimalBits/bull) é uma biblioteca NodeJS que implementa um rápido e confiável gerenciador de filas de tarefas (*job*).

#### Filas ####

Fila é uma estrutura de dados muito utilizada no desenvolvimento de aplicações e é definida de forma simples como: o primeiro elemento que entra na fila é o primeiro que sai. O termo que utilizamos em inglês para esse algoritmo é [FIFO](https://pt.wikipedia.org/wiki/FIFO) (*first In, first out*).

Filas de tarefas assíncronas são muito utilizadas em arquiteturas de sistemas como forma de delegar tarefas para outros processos e liberar a execução do processo principal. Em aplicações web, o cliente fica aguardando uma requisição http e o servidor pode utilizar uma fila de tarefas para responder a requisição, delegando tarefas demoradas, como envio de emails, para outros sistemas que irão consumir as tarefas da fila.

<!-- Vantagem do uso de filas: processamento assíncrono, paralelismo, falhas... -->

#### Redis ####

[Redis](https://redis.io/) é um banco de dados *NoSQL* muito popular e performático que armazena os dados numa estrutura chave-valor. O Bull utiliza Redis como infraestrutura para controlar e persistir as filas. Assim é necessário o endereço de uma instância Redis no ar.

Não é necessário entender como Bull usa e persiste as filas no Redis, tudo fica abstraído.

## Tutorial ##
Nesse tutorial, vamos ver os pontos fundamentais do código relativos ao uso do Bull. Para ver a aplicação completa, veja o projeto [bull-demo](https://github.com/giovanibr/bull-demo).

#### Criação da fila ####

O primeiro passo é criar a própria fila de tarefas.

Importe a biblioteca e instancie uma nova fila passando nos parâmetros o endereço do seu servidor Redis. O construtor **Queue** aceita muitos parâmetros opcionais para customizar o comportamento da fila. Para mais detalhes, veja [REFERENCE.md#queue](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queue).
```javascript
const Queue = require('bull');

const minhaFila = new Queue('minhaFila', {
    redis: {
        host: "127.0.0.1",
        port: "6379"
    },
    prefix: 'bulldemo';
});
```

#### Adicionando trabalhos a fila ####

O segundo passo é definir a inclusão da tarefa na fila. 

A fila criada tem um método **queue.add()** para adicionar tarefas. Esse método recebe um objeto específico de negócio (um email a ser enviado ou um lote a ser processado por exemplo) e também pode receber opções onde é possível programar o comportamento da tarefa na fila como tempo de espera, um numero de tentativas no caso de erro, etc. Para ver mais opções, consultar [REFERENCE.md#queueadd](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd). 

```javascript
const options = {
    delay: 10000, // 10 seg in ms
    attempts: 5,
};

const dadosJob = {
	"numero": 12345
};

minhaFila.add(dadosJob, options);
```

#### Definição do consumidor ####

O terceiro passo é definir quem vai tratar as tarefas da fila.

O consumidor é definido por uma função que vai ser chamada toda vez que uma tarefa for retirada da fila de acordo com as configurações. Essa função recebe como parâmetros a tarefa **job**, e o *callback* opcional **done**.

A instancia da tarefa contêm todos os dados relativos a sua execução. Os dados que foram passados na criação da tarefa podem ser acessados pela propriedade **job.data**. Para ver todas as propriedades e métodos do objeto, ver [REFERENCE.md#job](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#job).

O *callback* **done** permite concluir a tarefa com êxito ou com erro, dependendo do que vai ser feito com os dados passados.
```javascript
function (job, done) {
    //progresso
    job.progress(100);

    // chamada de sucesso 
    done(null, "Feito");

    // ou chamada de erro
    done(new Error('Deu erro!'));

    // ou erro não tratado, Bull reage do msm jeito
    throw new Error('Erro inesperado');
}
```


A função também pode trabalhar com *promisses* ao invés do *callback*. 
```javascript
function (job) {
    return new Promise(function(resolve, reject) {
        // sucesso 
        //resolve("Feito");

        // erro
        reject(new Error('Deu erro!'));

        erro não tratado, Bull reage do msm jeito
        throw new Error('Erro inesperado');
    });
}
```

#### Definição dos *event listeners* ####
O último passo é definir callbacks para os eventos da fila.

A fila emite eventos que são muito úteis. Podemos programar ações para cada etapa no ciclo de vida da tarefa (esperando, ativa, finalizada). Podemos também definir o que vai ser feito no caso de erro. 

Para uma lista com todos os eventos, consultar [REFERENCE.md#events](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#events).
```javascript
//   caminho feliz [waiting, active, completed]
minhaFila.on('waiting', job => {
    console.log('Job recebido!');
});

minhaFila.on('active', function(job, jobPromise){
    console.log(`Job começou`);
})

minhaFila.on('completed', function(job, result) {
    console.log(`${result}, job finalizado com sucesso`);
    // remove job da fila
    job.remove();
});

minhaFila.on('failed', function(job, error){
    console.log(`Job falhou`, error);
    // retry
    job.retry();
});
```

## Projeto Demo ##

O projeto [bull-demo](https://github.com/giovanibr/bull-demo) está funcional e imprime no console todos as etapas do ciclo de vida da tarefa. Ele é uma aplicação NodeJS básica com [Express](https://expressjs.com/) com um endpoint POST, que recebe os dados da tarefa e coloca na fila.

&nbsp;