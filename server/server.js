
 
const express = require("express");
const { 
    graphqlExpress,
    graphiqlExpress,
  } = require('graphql-server-express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { schema } = require('./src/schema')  ;

const PORT = 4000;

const server = express();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));

server.use('/graphql', cors(), bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));