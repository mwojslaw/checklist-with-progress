const checkListItems = [
    {
        id: "1",
        name: "1",
        status: "notStarted"
    },
    {
        id: "2",
        name: "2",
        status: "notStarted"
    }
];

const resolvers = {
    Query: {
        checkListItemsByStatus: (root, args) =>
            checkListItems.filter(
                item => !args || !args.status || args.status === item.status
            )
    },
    Mutation: {
        changeCheckListItemStatus: (root, args) => {
            const { id, status } = args;

            const item = checkListItems.find(i => i.id === id);
            checkListItems[checkListItems.indexOf(item)] = {
                ...item,
                status
            };
        }
    }
};

module.exports = { resolvers };
