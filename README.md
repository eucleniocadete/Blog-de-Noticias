# 📰 Blog de Notícias

Projeto desenvolvido com o objetivo de melhorar as habilidades em **Node.js**, aplicando a **arquitetura MVC (Model-View-Controller)** para organizar o código de forma escalável e modular. Apesar de ainda não conter todas as funcionalidades de um site completo de notícias, já conta com cadastro, login, filtro de notícias, publicação e busca.

---

## 📁 Estrutura do Projeto

A estrutura do projeto segue o padrão MVC:

```
Blog-de-Noticias/
├── back-end/
│   ├── node_modules/
│   ├── src/
│   │   ├── app/
│   │   │   ├── controller/
│   │   │   │   └── appController.js
│   │   │   ├── model/
│   │   │   │   ├── conexao.js
│   │   │   │   └── consulta.js
│   │   │   └── views/
│   │   │       └── appViews.js
│   │   ├── app.js
│   │   ├── routes.js
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
│
├── front-end/
│   ├── cadastro/
│   │   ├── app.js
│   │   ├── index.html
│   │   └── style.css
│   ├── login/
│   │   ├── login.css
│   │   ├── login.html
│   │   └── login.js
│   ├── img/
│   ├── app.js
│   ├── index.html
│   └── style.css
```

---

## 🚀 Tecnologias Utilizadas

### 🖥 Front-end

- HTML
- CSS
- JavaScript

### 🛠 Back-end

- Node.js
- Express
- MySQL
- CORS
- Day.js

---

## ⚙️ Instalação e Execução Local

> Requisitos:
>
> - Node.js e npm instalados
> - Servidor local como **XAMPP** com **phpMyAdmin** para o MySQL

### 1. Clone o repositório:

```bash
git clone https://github.com/eucleniocadete/Blog-de-Noticias.git
cd Blog-de-Noticias/back-end
```

### 2. Instale as dependências (caso necessário):

```bash
npm install mysql
npm install dayjs
npm install cors
npm install --save-dev nodemon
```

### 3. Configure e importe o banco de dados MySQL:

- Use o **phpMyAdmin** com o **XAMPP**
- Crie o banco com as tabelas esperadas pelo backend (login, noticias, etc)

### 4. Inicie o servidor:

```bash
npm run blog
```

---

## 🔗 Rotas da API

| Método | Rota                       | Descrição                              |
| ------ | -------------------------- | -------------------------------------  |
| POST   | `/login`                   | Autenticação de usuários               |
| POST   | `/cadastro`                | Cadastro de novos usuários             |
| GET    | `/noticias`                | Lista todas as notícias                |
| GET    | `/noticias_filtro/:filtro` | Lista notícias filtradas por categoria |
| POST   | `/publicar`                | Publica uma nova notícia               |
| POST   | `/pesquisar`               | Pesquisa por título                    |

---

## 📌 Observações

- Projeto com fins educacionais
- Baseado na arquitetura **MVC**
- Futuras melhorias: autenticação com JWT, comentários, sistema de categorias

---

## 🧑‍💻 Autor

Feito com dedicação por **Euclénio Cadete**\
🔗 [Perfil no GitHub](https://github.com/eucleniocadete)

---
