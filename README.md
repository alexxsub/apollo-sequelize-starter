# <a href='https://www.apollographql.com/'><img src='https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png' height='100' alt='Apollo Server'></a>

# Simple starter for Apollo graphql + sequilize 

Simple  Apollo+Express API GraphQL and ORM Sequilize PostgreSQL backend

## Clone src on your PC
```bash
git clone https://github.com/alexxsub/apollo-sequelize-starter.git
cd apollo-sequelize-starter
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

open url in browser to GraphQL playground [http://localhost:4000/graphql](http://localhost:4000/graphql)
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
