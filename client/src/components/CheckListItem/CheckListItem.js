import React from "react";

import {
    gql,
    graphql
} from "react-apollo";
import { checkListItemsQuery } from "./../CheckList";

const checkListItemStatus = Object.freeze({
    notStarted: "notStarted",
    inProgress: "inProgress",
    done: "done"
})

const changeCheckListItemState = gql`
    mutation changeCheckListItemStatus($id: ID, $status: String) {
        changeCheckListItemStatus(id: $id, status: $status){
            id
            status
        }
    }
`; 

const CheckListItem = ({id, name, status, mutate}) => {

    const changeStatus = (id, status) => mutate({
        variables: {
            id,
            status
        },
        refetchQueries: [ { query: checkListItemsQuery }]
    });

    return (
        <div>
            <div>{name} - {status}</div>
            <div>
                {
                    Object.keys(checkListItemStatus).map(key => (
                        <button onClick={() => changeStatus(id, checkListItemStatus[key])}>{checkListItemStatus[key]}</button>
                    ))
                }
            </div>
        </div>
    );
}

export default graphql(changeCheckListItemState)(CheckListItem);