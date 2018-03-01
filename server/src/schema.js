const { 
    makeExecutableSchema
} = require('graphql-tools');

const { resolvers } = require('./resolvers');

const typeDefs = `
    type CheckListItem {
        name: String
        status: String
        id: ID
    }
    type Query {
        checkListItemsByStatus(status: String): [CheckListItem]
    }
    type Mutation {
        changeCheckListItemStatus(id: ID, status: String): CheckListItem
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = { schema };