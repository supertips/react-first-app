import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    this.setState({ posts });
  }

  render() {
    return (
      <div className="App">
        <CardList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
