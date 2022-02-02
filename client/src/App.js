import React, {Component} from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

//components
import BookList from "./components/BookList";

// apollo settle:
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList />
          <p>Made by Akos with love.</p>
        </div>
      </ApolloProvider>
    );
  }
  
}

export default App;
