import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import '../index.css';
import {apicall} from '../api/api.js';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchTerm: '',
      isPending: true
    }
  }

  onSearchChange = (evt) => {
    console.log(evt.target.value);
    this.setState({
      searchTerm: evt.target.value
    });
  }

  componentDidMount() {
    setTimeout(() => {
      apicall('https://jsonplaceholder.typicode.com/users')
        .then(data => {
          this.setState({
            robots: data,
            isPending: false
          })
        });
    }, 3000);
  }

  render() {
    const {searchTerm, robots, isPending} = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="center">
        <h1> Demo Robo App </h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          {isPending ? <h2>Loading...</h2> : <CardList robots={filterRobots} />}
        </Scroll>
      </div>
    );
  }
}

export default App;
