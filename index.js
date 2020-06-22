
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Config from './Config';
import gql from 'graphql-tag';

import App from './App';


const client = new ApolloClient({
  link: new HttpLink({ uri: Config.wordpressUrl + Config.graphqlEndpoint }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);


/*import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
 constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let postsURL = "https://newlifenewworld.com/wp-json/wp/v2/posts";
    fetch(postsURL)
    .then(response => response.json())
    .then(response => {
        this.setState({
          posts: response
        })
    })
  }  

render() {
    let posts = this.state.posts.map((posts, index) => {
      return <div key={index}>
      <p>{posts.title.rendered}</p>
      </div>
    });
return (
      <div>
        {posts}
      </div>
    )
  }
}


render(<App />, document.getElementById('root'));
*/