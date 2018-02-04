
const checkListItems = [
    {
        name: "1"
    },
    {
        name: "2"
    }
]

const resolvers = {
    Query: {
        checkListItems: () => checkListItems
    },
};

module.exports = { resolvers };
  