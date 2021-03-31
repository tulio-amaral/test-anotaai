# 🔧 Installation

**You will need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/tulio-amaral/test-anotaai```

**Install dependencies**

```yarn install```

**You will need to have a Postgres server setup so you can start the server. For this project I used:**

```
    port: 5432,
    username: postgres,
    password: docker,
```

**You will also need to create 2 diferents database. One is used to run the server and the other is for the tests. For this project I used:**

```
desafio_anotaai
desafio_anotaai_test
```

**Run migration**

```yarn typeorm migration:run```

PS.: Without running the migrations you will not be able to start the server.

# 🚀 Scripts
**Run server**

```yarn dev:server```

**Run tests**

```yarn test```

# 🚩 Instructions

Base URL for this project is **http://localhost:3333**. So every request should be sent to this address.

- To create a product, send a post request to **<strong>BaseURL/products</strong>** with a JSON containing the following properties:

```
{
  "title": "Some title",
  "description": "Some description",
  "price": any number
}
```

- To create a category, send a post request to **<strong>BaseURL/categories</strong>** with a JSON containing the following properties:

```
{
  "title": "Some title",
}
```
-To associate a category to a product, send a put request to **<strong>BaseURL/products/associate/:id</strong>** :id being the product id with a JSON containing the following properties:

```
{
  "category_id": "the category id"
}
```

- To find a category or product by its name, send a get request to **<strong>BaseURL/{wanted}/search/title?title={name}</strong>** wanted being either categories or products and name, the title you are looking for.

# 🐛 Bugs or issues
If you have any problems executing this project, please contact me here or at tuliosantos@gee.inatel.br