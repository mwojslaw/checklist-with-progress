
const checkListItems = [
    {
        id: 1,
        name: "1",
        status: "notStarted"
    },
    {
        id: 2,
        name: "2",
        status: "notStarted"
    }
]

const resolvers = {
    Query: {
        checkListItems: () => checkListItems
    },
    Mutation: {
        changeCheckListItemStatus: (root, args) => {
           const { id, status } = args;

           const item = checkListItems.find(item => item.id == id);
           
           checkListItems[checkListItems.indexOf(item)] = {
               ...item,
               status
           };
        },
    }
};

module.exports = { resolvers };
  