# 💊 Projeto Final - Front-end do Sistema de E-commerce de Farmácia

## 📌 Sobre o Projeto

Este projeto foi desenvolvido utilizando **React com Vite**, com o objetivo de criar o front-end de um sistema de comércio eletrônico para uma farmácia.

A aplicação consome o backend local desenvolvido no **Bloco 02**, utilizando o recurso **Categoria** da API da Farmácia.

O projeto permite o gerenciamento de categorias de produtos, com funcionalidades de **listagem**, **cadastro**, **atualização** e **exclusão** de categorias.

A aplicação foi construída seguindo boas práticas de desenvolvimento front-end, com organização de componentes, rotas, services, models e estilização utilizando **Tailwind CSS**.

---

## 🚀 Tecnologias Utilizadas

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **Phosphor Icons**
- **React Spinners**
- **Node.js**
- **npm**
- **Git e GitHub**

---

## 📂 Estrutura do Projeto

    src/
     ├── components/
     │   ├── categorias/
     │   │   ├── cardcategorias/
     │   │   │   └── CardCategorias.tsx
     │   │   ├── deletecategoria/
     │   │   │   └── DeleteCategoria.tsx
     │   │   ├── formcategoria/
     │   │   │   └── FormCategoria.tsx
     │   │   └── listarcategorias/
     │   │       └── ListaCategorias.tsx
     │   ├── footer/
     │   │   └── Footer.tsx
     │   └── navbar/
     │       └── Navbar.tsx
     ├── models/
     │   └── Categoria.ts
     ├── pages/
     │   └── home/
     │       └── Home.tsx
     ├── services/
     │   └── CategoriaService.ts
     ├── App.tsx
     ├── main.tsx
     └── index.css

---

## ⚙️ Funcionalidades

### ✅ Componentes principais

- **Home**
- **Navbar**
- **Footer**

### ✅ CRUD Completo de Categoria

- **Listar todas as categorias**
- **Buscar categoria por ID**
- **Criar categoria**
- **Atualizar categoria**
- **Deletar categoria**

---

## ⭐ Funcionalidades Extras

- Navegação entre páginas com **React Router DOM**
- Consumo de API com **Axios**
- Uso de loading com **React Spinners**
- Ícones com **Phosphor Icons**
- Estilização com **Tailwind CSS**
- Interface responsiva com **Flexbox** e **Grid**
- Organização em componentes reutilizáveis
- Service para centralizar as requisições HTTP
- Interface TypeScript para representar o Model Categoria

---

## 🔗 Rotas da Aplicação

| Rota | Descrição |
|---|---|
| `/` | Página Home |
| `/categorias` | Listar todas as categorias |
| `/cadastrarcategoria` | Cadastrar uma nova categoria |
| `/editarcategoria/:id` | Atualizar uma categoria existente |
| `/deletarcategoria/:id` | Deletar uma categoria existente |

---

## 🔗 Consumo da API

O projeto consome o backend local da Farmácia através da URL:

    http://localhost:4000

Recurso utilizado:

    /categoria

### 📌 Categoria

| Método | Rota | Descrição |
|---|---|---|
| GET | `/categoria` | Listar todas as categorias |
| GET | `/categoria/:id` | Buscar categoria por ID |
| POST | `/categoria` | Criar categoria |
| PUT | `/categoria/:id` | Atualizar categoria |
| DELETE | `/categoria/:id` | Deletar categoria |

---

## 🧩 Interface Categoria

A interface **Categoria** foi criada para representar os dados recebidos e enviados para a API.

    export default interface Categoria {
        id?: number
        nome: string
        descricao: string
    }

---

## 🧪 Testes

Os testes da aplicação foram realizados manualmente no navegador, validando o funcionamento das rotas e do consumo da API.

Foram testadas as seguintes funcionalidades:

- Acesso à página **Home**
- Navegação pela **Navbar**
- Listagem de categorias
- Cadastro de categoria
- Atualização de categoria
- Exclusão de categoria
- Integração com o backend local
- Validação dos métodos **GET**, **POST**, **PUT** e **DELETE**

---

## 🛠️ Como executar o projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado:

- **Node.js**
- **npm**
- **Git**
- Backend da Farmácia rodando localmente

---

### Clonar o repositório

    git clone https://github.com/SEU_USUARIO/projeto_final_bloco_03.git

### Entrar na pasta do projeto

    cd projeto_final_bloco_03

### Instalar dependências

    npm install

### Rodar o projeto

    npm run dev

A aplicação será executada localmente.

Normalmente o endereço será:

    http://localhost:5173

---

## 📌 Backend

Para que o front-end funcione corretamente, o backend da Farmácia precisa estar rodando localmente na porta:

    http://localhost:4000

O backend utilizado neste projeto foi desenvolvido no **Bloco 02** utilizando **NestJS**.

Caso o backend esteja rodando em outra porta, será necessário alterar a `baseURL` no arquivo:

    src/services/CategoriaService.ts

Exemplo:

    const api = axios.create({
        baseURL: "http://localhost:4000"
    })

---

## 🌿 Branches do Projeto

O projeto foi desenvolvido em etapas, utilizando branches:

| Branch | Descrição |
|---|---|
| `01_Componente_Home_navbar_footer` | Criação dos componentes Home, Navbar e Footer |
| `02_Rotas` | Configuração das rotas da aplicação |
| `03_CRUD_Categoria` | Implementação do CRUD de Categoria com consumo da API |

---

## 📚 Conceitos Aplicados

Durante o desenvolvimento deste projeto, foram praticados os seguintes conceitos:

- Criação de projeto React com Vite
- Criação de componentes React
- Organização de pastas no projeto
- Estilização com Tailwind CSS
- Uso de Flexbox
- Uso de Grid
- Configuração de rotas com React Router DOM
- Navegação com `Link`
- Uso de Hooks
- Uso de `useState`
- Uso de `useEffect`
- Uso de `useParams`
- Uso de `useNavigate`
- Consumo de API com Axios
- Criação de Service
- Criação de Interface com TypeScript
- Renderização de listas com `map`
- CRUD completo consumindo backend local

---

## 📌 Observações

Este projeto foi desenvolvido para fins educacionais como parte do Projeto Final do **Bloco 03**.

O projeto não possui autenticação de usuário.

O projeto não possui deploy.

Para utilizar todas as funcionalidades, é necessário que o backend da Farmácia esteja rodando localmente.

---

## 👩‍💻 Desenvolvido por

**Samara Ferreira Costa**  
Turma Javascript - Generation Brasil.
