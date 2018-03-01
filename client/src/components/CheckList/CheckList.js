import React from "react";
import { gql, graphql } from "react-apollo";
import CheckListItem, { checkListItemStatus } from "./../CheckListItem";
import Progress from "./../Progress";

export const checkListItemsByStatusQuery = gql`
    query checkListItemsByStatus($status: String) {
        checkListItemsByStatus(status: $status) {
            name
            status
            id
        }
    }
`;

const isDone = item => item.status === checkListItemStatus.done;

const CheckList = ({ data: { loading, error, checkListItemsByStatus } }) => {
    if (error) return <div>{error.message}</div>;

    if (loading) return <div>...</div>;

    const done = checkListItemsByStatus.filter(isDone).length;
    const total = checkListItemsByStatus.length;
    return (
        <div>
            <Progress done={done} total={total} />
            {checkListItemsByStatus.map(item => (
                <CheckListItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default graphql(checkListItemsByStatusQuery)(CheckList);
