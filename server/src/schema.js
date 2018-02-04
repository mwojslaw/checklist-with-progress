const { 
    makeExecutableSchema,
    addMockFunctionsToSchema
} = require('graphql-tools');

const { resolvers } = require('./resolvers');

const typeDefs = `
    type CheckListItem {
        name: String
    }
    type Query {
        checkListItems: [CheckListItem]
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
addMockFunctionsToSchema({ schema });
module.exports = { schema };