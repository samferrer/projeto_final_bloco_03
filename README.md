# Projeto Final Bloco 03 - Farmácia

Projeto desenvolvido como atividade final do Bloco 03, com o objetivo de construir o front-end de uma aplicação de farmácia utilizando React, Vite, TypeScript, Tailwind CSS e Axios.

A aplicação consome o recurso **Categoria** da API backend desenvolvida no Bloco 02.

---

## Descrição do Projeto

Este projeto é o front-end de um sistema de farmácia, desenvolvido para consumir uma API local criada com NestJS.

Nesta aplicação, é possível realizar o CRUD completo de categorias:

- Listar categorias
- Cadastrar uma nova categoria
- Atualizar uma categoria existente
- Deletar uma categoria

O projeto foi desenvolvido sem autenticação de usuário e sem deploy, funcionando localmente.

---

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Phosphor Icons
- React Spinners

---

## Funcionalidades

### Home

Página inicial da aplicação, contendo uma apresentação do sistema da farmácia.

### Navbar

Componente de navegação com links para:

- Home
- Categorias
- Cadastrar Categoria

### Footer

Rodapé da aplicação com informações do projeto e redes sociais.

### Categorias

Funcionalidades implementadas:

- Listagem de todas as categorias cadastradas
- Cadastro de nova categoria
- Atualização de categoria existente
- Exclusão de categoria

---

## Rotas da Aplicação

| Rota | Descrição |
|---|---|
| `/` | Página Home |
| `/categorias` | Lista todas as categorias |
| `/cadastrarcategoria` | Cadastra uma nova categoria |
| `/editarcategoria/:id` | Atualiza uma categoria existente |
| `/deletarcategoria/:id` | Deleta uma categoria existente |

---

## Consumo da API

O projeto consome o backend local da Farmácia através da URL:

```ts
http://localhost:4000
