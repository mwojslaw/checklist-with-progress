import React from "react";
import { gql, graphql } from "react-apollo";

import CheckListItem from "./../CheckListItem";

export const checkListItemsQuery = gql`
    query CheckListItemsQuery {
        checkListItems {
            name
            status
            id
        }
    }
`;

const CheckList = (
    { data: {loading, error, checkListItems }}
) => {
        if(error)
            return <div>{error.message}</div>;

        if(loading)
            return <div>...</div>
            
        return <div>
            { 
                checkListItems.map(item => (
                    <CheckListItem {...item} />
                ))
            }
        </div>
    }

export default graphql(checkListItemsQuery)(CheckList);