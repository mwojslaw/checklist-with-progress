import React from "react";
import { gql, graphql } from "react-apollo";

import CheckListItem from "./../CheckListItem";

export const checkListItemsByStatusQuery = gql`
    query checkListItemsByStatus($status: String) {
        checkListItemsByStatus(status: $status) {
            name
            status
            id
        }
    }
`;

const CheckList = ({ data: { loading, error, checkListItemsByStatus } }) => {
    if (error) return <div>{error.message}</div>;

    if (loading) return <div>...</div>;

    return (
        <div>
            {checkListItemsByStatus.map(item => (
                <CheckListItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default graphql(checkListItemsByStatusQuery)(CheckList);
