const app = require('express')(),
    { graphqlHTTP } = require('express-graphql'),
    db =require('./server/models'),
    typeDefs = require('./server/types'),
    resolvers = require('./server/resolvers');

const { makeExecutableSchema } = require('@graphql-tools/schema');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/graphql', graphqlHTTP({
    schema,
    context:{db},
    graphiql: true,
}));

app.listen(3000, () => {
    console.info('Listening on http://localhost:3000/graphql')
});