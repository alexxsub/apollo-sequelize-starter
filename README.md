# <a href='https://graphql.org//'><img src='https://graphql.org/img/logo.svg' height='100' alt='GraphQL'>GraphQL</a>

# Simple starter for Express graphql + sequilize 

Simple  Express API GraphQL and ORM Sequilize PostgreSQL backend

## Clone src on your PC
```bash
git clone https://github.com/alexxsub/apollo-sequelize-starter.git
cd apollo-sequelize-starter
git checkout express-graphql
```
## Install dependencies
```bash
npm i
```
### Install PostgreSQL

easy way for MacOs (https://postgresapp.com/)  


### Start backend 
edit config 'config/config.json'  login and password

to create DB and tables, add demo data
```bash
npm run setup
```
to run graphql API server
```bash
npm run server
```

open url in browser to GraphQL playground [http://localhost:3000/graphql](http://localhost:3000/graphql)
<br>
Run query to show.
```bash
{
  Books{
    id
    title
    author
  }
}
```

### Development

after changing models make migration script
```bash
npm run makemigration
```

migrate models to alter tables
```bash
npm run migrate
```
