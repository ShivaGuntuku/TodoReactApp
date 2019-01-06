import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Test with React',
        completed: true
      },
      {
        id: 2,
        title: 'Build React Application',
        completed: false
      },
      {
        id: 3,
        title: 'Update on the server',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={markComplete}/>
      </div>
    );
  }
}

export default App;
