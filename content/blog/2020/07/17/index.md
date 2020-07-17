---
title: "O que é JWT?"
date: "2020-07-17"
description: "O que é JWT ou JSON Web Token? O que é JWS? Conceitos, utilização e vantagens."
tags: ["jwt", "autenticação", "autorização"]
---

# O que é JWT? #

[Json Web Tokens](https://en.wikipedia.org/wiki/JSON_Web_Token) é uma especificação ([RFC 7519](https://tools.ietf.org/html/rfc7519)) muito popular, que define uma forma compacta, auto-contida e *URL Safe* de transmitir dados de forma segura, usando JSON.

JWTs podem ser usados para:
- "Afirmar" a identidade de um usuário entre partes interessadas
- "Afirmar" direitos de um usuário entre partes interessadas
- Transferir dados com segurança entre partes interessadas por um canal não seguro
- Garantir a identidade de um usuário, uma vez que o destinatário confia na parte que afirma

O cenário de utilização mais comum para *JWTs* é garantir a autorização de clientes no acesso a *APIs REST* de maneira simples e segura.

## Por que JWTs são tão populares? ##
JWT permite difundir e verificar a identidade de um usuário. O protocolo [Open ID Connect](https://en.wikipedia.org/wiki/OpenID_Connect) por exemplo, que é muito popular, utiliza JWTs.

Assim que o usuário é autenticado, ele recebe um token JWT, que deve ser enviado em todas as requisições subsequentes. Numa arquitetura web, isso normalmente é feito usando ***local storage*** ou ***cookies*** e é enviado no header **Authorization**.

Esse esquema de autorização baseada em tokens permite ao servidor autorizar ou não a requisição, validando o token. A autenticidade do token pode ser verificada porque ele é **assinado digitalmente**.

### O que é JWS? ###

JWS, ou **JSON Web Signature**, é muitas vezes confundido com JWT. Segundo a especificação ([RFC7515](https://tools.ietf.org/html/rfc7515)), JWS é o token JWT assinado digitalmente. 

O conteúdo dos dois componentes que formam o JWT (header e payload) passam pelo algoritmo de assinatura digital, gerando o terceiro componente do token, sua assinatura.

## Componentes de um JWT/JWS ##

O conteúdo do JWT é um *payload* JSON contendo quaisquer informações que permitam o servidor conceder a autorização posteriormente.

O JWT é divido em 3 segmentos, cada parte codificado em [**BASE64URL**](https://en.wikipedia.org/wiki/Base64):

- ***header*** - descreve o algoritmo criptográfico usado para assinar o token e pode conter outros campos adicionais
- ***payload*** - pode conter qualquer informação, no formato de *claims*
- ***signature*** (JWS) - assinatura digital, codificado com o algoritmo declarado no *header*, que permite validar o JWT

### Claims ###

O *payload* do JWT é formado por ***claims***, que nada mais são do que afirmações sobre o usuário autenticado.

*Claims* podem ser customizadas de acordo com o seu caso, mas existem as predefinidas de acordo com a [RFC 7519](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#rfc.section.4).

*Claims* padronizadas:
- iss - *issuer*, emissor
- exp - *expiration*, data de expiração (*timestamp*)
- iat - *issued at*, data de emissão (*timestamp*)
- nbf - *not before*, data de ativação
- jti - identificador único, evita que o token seja reutilizado
- sub - *subject*, assunto
- aud - *audience*, audiência

Exemplo de *header*:
````
{
  "alg": "HS256",
  "typ": "JWT"
}
````

Exemplo de *payload*:
````
{
  "sub": "blog",
  "name": "Giovani Racca",
  "iss": "pensandoemcodigos.net"
}
````

Exemplo de um JWS:
````
eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTUwMTA0MzAsImV4cCI6MTU5NTAxMDczMCwiaXNzIjoicGVuc2FuZG9lbWNvZGlnb3MubmV0Iiwic3ViIjoiYmxvZyJ9.jUJ8bLTZgBEiGBiRRE2qGGnVfdhNKN18CzgEl17Q8xzJbB5vEQPh2vFTgKpkbgXK0YNBfIj9t-Yj92PF6J6ixA
````

### jwt.io ###

[jwt.io](https://jwt.io/) é uma ferramenta muito útil para visualizar os componentes JWS.

## Vantagens do JWT/JWS ##

- *stateless* - o servidor não precisa salvar nenhuma informação de sessão do usuário, todas as informações já estão contidas no token
- desacoplamento - a geração dos tokens é desacoplada da validação
- flexibilidade - como a especificação do payload é aberta, a especificação de papeis e permissões no controle de acesso fica muito flexível
- tamanho - JWTs são pequenos, sendo ideias para serem transmitidos em requisições HTTP

## Referências ##
- [Get Started with JSON Web Tokens](https://auth0.com/learn/json-web-tokens/)
- [Introduction to JSON Web Tokens](https://jwt.io/introduction/)
- [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token)