import React, { Component } from "react";
import {
    ApolloClient,
    ApolloProvider,
    createNetworkInterface
} from 'react-apollo';

import CheckList from "./components/CheckList";

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });

const client = new ApolloClient({
    networkInterface
});

class App extends Component{
    render(){
        return (
            <div>
                <ApolloProvider client={client}>
                    <CheckList />
                </ApolloProvider>
            </div>
        );
    }
}

export default App;

