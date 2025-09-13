

## Sobre o projeto

Este trabalho tem como objetivo apresentar um protótipo funcional de um sistema web, nesse caso, a parte da API, utilizando o framework NestJS, em Typescript. O sistema se comunica com a API do Mercado Livre para realizar suas funções, como o controle de vendas e a capacidade de publicar os produtos cadastrados, no escopo desse projeto, veículos, no marketplace em questão. 

O Diagrama abaixo demonstra brevemente essa comunicação:
<img width="629" height="734" alt="image" src="https://github.com/user-attachments/assets/d2f6e90b-a8f6-4b6b-98d3-70e1693c3429" />

# Integração:

O MercadoLivreController, possui um @Post() que busca o token de acesso ao Mercado Livre. Esse code é um token provisório que é recebido após o usuário se autenticar com o Mercado Livre. Após a requisição, é devolvido o token de acesso real, utilizado para futuras requisições;

```typescript
      const response = await axios.post(
        'https://api.mercadolibre.com/oauth/token',
        {
          grant_type: 'authorization_code',
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          code: code,
          redirect_uri: process.env.REDIRECT_URI,
        },
      );

```

# Publicação:

A publicação é feita em postAVehicleOnMercadoLivre, onde busca o veículo no banco, e adapta os dados para como o Mercado Livre espera.


## Instalação

Rode yarn para instalar as dependências, se não tiver o yarn:

```bash
npm install --global yarn
```

```bash
$ yarn
```

Após isso, é necessário criar um banco de dados no postgres, que foi o banco usado no projeto, e preencher um arquivo .env com base nas variáveis presentes em .env.example.

```env
#MERCADO LIVRE
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URI=

#DATABASE
TYPEORM_HOST=
TYPEORM_USERNAME=
TYPEORM_PASSWORD=
TYPEORM_DATABASE=

#BREVO
SEND_IN_BLUE_SENDER=
SEND_IN_BLUE_KEY=

#OUTROS
FRONT_END_URL=
```

CLIENT_ID e CLIENT_SECRET são variáveis para a integração com o Mercado Livre. Isso é pego através da central de desenvolvimento do Mercado Livre, enquanto REDIRECT_URI é a url que será redirecionada após a autenticação;


TYPEORM_HOST, TYPEORM_USERNAME, TYPEORM_PASSWORD, TYPEORM_DATABASE são para a conexão com o banco, abaixo um exemplo com localhost:

```env
TYPEORM_HOST=localhost
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=minha_senha
TYPEORM_DATABASE=meu_banco
```

## Rodar o projeto

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Versões utilizadas

Node: v18+
Nest: 11.0.10
Postgres: 16.10
