const app = require('express')(),
 { ApolloServer, gql } = require('apollo-server-express'),
 db =require('./server/models')
// cors =  requuire('cors')

const  typeDefs = require('./server/types'),
    resolvers = require('./server/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:{db}
 
})




server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)