import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      searchTerm: '',
    }
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    this.setState({ users })
  }

  render() {
    const { searchTerm, users } = this.state
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm)
    )

    return (
      <div className="App">
        <h1>Fancy Users :)</h1>
        <SearchBox
          placeholder="search users here"
          onChange={e => {
            const value = e.target.value
            this.setState({ searchTerm: value }, () =>
              console.log('Updating searchtearm with', this.state.searchTerm)
            )
          }}
        />
        <CardList users={filteredUsers} />
      </div>
    )
  }
}

export default App
