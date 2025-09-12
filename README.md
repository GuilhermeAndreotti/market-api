

## Sobre o projeto

Este trabalho tem como objetivo apresentar um protótipo funcional de um sistema web, utilizando a linguagem de programação JavaScript e seu superconjunto TypeScript, tanto no lado do cliente quanto no lado do servidor. O sistema se comunica com a API (Application Programming Interface) do Mercado Livre para realizar suas funções, como o controle de vendas e a capacidade de publicar os produtos cadastrados no marketplace em questão.

## Instalação

```bash
$ yarn install
```
Após isso, é necessário criar um banco de dados no postgres, que foi o banco usado no projeto, e preencher um arquivo .env com base nas variáveis presentes em .env.example.

## Rodar o projeto

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Versões 

Node: v18+
Nest: 11.0.10
