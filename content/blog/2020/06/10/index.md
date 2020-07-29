---
title: "Usando o AWS S3 com NodeJS"
date: "2020-06-10"
description: "Como fazer upload e download de arquivos na Amazon S3 usando NodeJS."
category: "post"
---

![aws-s3](s3.png)

Muitas aplicações têm como requisito o armazenamento de arquivos. Podem ser arquivos para download ou a necessidade de gurda de documentos enviados pelo usuário por exemplo. Hoje em dia existem vários provedores de armazenamento em nuvem como [AWS S3](https://aws.amazon.com/pt/s3/), [Google Cloud Storage](https://cloud.google.com/storage), [Azure Storage](https://azure.microsoft.com/pt-br/services/storage/) etc.

A Amazon disponibiliza bibliotecas em várias linguagens para que os desenvolvedores usem os serviços da AWS através de seus sistemas.

Vamos ver um rápido exemplo em [NodeJs](https://nodejs.org/) de como fazer download e upload de arquivos para um bucket S3 utilizando o [SDK AWS para Javascript](https://github.com/aws/aws-sdk-js).

## O que é S3 ##
S3 ou *Simple Storage Service* é um serviço de armazenamento de objetos por meio de serviços REST, focado em performance e escalabilidade. Assim, o serviço oferece alta disponibilidade e permite que clientes de todos os tamanhos e com diversas necessidades usufruam do serviço. Os casos de uso possíveis vão desde backup a guarda de documentos para sites e aplicativos.

Para o armazenamento, a Amazon usa o conceito de ***bucket***, que nada mais é que um recipiente para os objetos armazenados. Podem ser criados quantos buckets forem necessários e eles oferecem controle de acesso individual e logs de acesso. Também é possível escolher a região geográfica onde os objetos são armazenados.

Ao armazenar um objeto, é necessário criar uma chave (***key***) associada, para depois recuperá-lo.

## Vamos ao código ##

O primeiro passo é importar a biblioteca AWS e configurar as credenciais de acesso ao AWS.
 ```javascript
const aws = require('aws-sdk');

aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_ACCESS_SECRET,
});
```
#### Upload ####
Para o upload, criamos um objeto com os parâmetros que devem ser passados para a função **upload** da sdk. Devemos passar:
- Bucket: string que representa o nome do bucket (o bucket já deve ter sido criado)
- Body: um objeto do tipo [Readable Stream](https://nodejs.org/api/stream.html#stream_readable_streams). No caso estamos criando esse stream a partir do caminho físico do arquivo.
- Key: string que representa a chave. O arquivo criado vai ter o nome da chave e no caso abaixo estamos criando o arquivo na pasta 's3-demo'.

```javascript
const params = {
  Bucket: 'nomeDoBucket',
  Body : fs.createReadStream('./teste1.txt'),
  Key : `s3-demo/teste1.txt`
};
```

Para executar o upload primeiro criamos o objeto S3 chamando seu construtor e depois chamamos a [função](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property) disponível na interface [S3](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html). Se a operação for bem sucedida, recebemos no callback o objeto data com várias informações do objeto armazenado, incluindo um link direto para acesso.

```javascript
const s3 = new aws.S3();
s3.upload(params, function (err, data) {
  if (err) { 
    console.log("Erro: ", err);
  }

  // sucesso
  if (data) { 
    console.log("Uploaded em: ", data.Location);
    console.log("Chave: ", data.key);
  }
});
```
#### Download ####
Para o download precisamos passar como parâmetro o nome do bucket e a chave.

```javascript
const options = {
    Bucket: 'nomeDoBucket',
    Key: 's3-demo/teste1.txt'
  }
```
Para executar o download também fazemos uso da interface S3 para chamar a [função](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property). Se a operação for bem sucedida, recebemos o arquivo serializado, bastando criar um [Writable Stream](https://nodejs.org/api/stream.html#stream_writable_streams) e gravar o arquivo em disco.
```javascript
const s3 = new aws.S3();
const file = require('fs').createWriteStream('/tmp/test.csv');
s3.getObject(options).createReadStream().pipe(file);

fileStream.on('error', function (err) {
  console.error(err);
})
```

## Projeto Demo ##

O projeto [aws-node-demo](https://github.com/giovanibr/aws-node-demo) é uma aplicação NodeJS básica com [Express](https://expressjs.com/) que disponibiliza 2 endpoints para upload e download na AWS.

&nbsp;