var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        pasarVariables(numDice: Int!, numSides: Int): [Int],
        holaMundo: String,
        hello: String
    }
`);

var root = {
    pasarVariables: ({numDice, numSides}) => {
        var output = [];
        for (var i = 0; i < numDice; i++) {
          output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        return output;
    },
    hello: () => {
        return 'Hello world!'
    },
    holaMundo: () => {
        return 'Hello world!'
    }
}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));