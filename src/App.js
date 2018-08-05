import React, { Component } from 'react';
import './App.css';
import Lista from './component/Lista';
import { Route, Switch } from 'react-router-dom';
import PersonDetail from './component/PersonDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.aleatoryPersons();
    this.aleatoryPersons = this.aleatoryPersons.bind(this);
  }

  aleatoryPersons() {
    fetch(
      'https://randomuser.me/api/?results=50'
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        const persons = json.results;
        this.setState({
          data: persons
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path='/PersonDetail/:id'
            render={props => <PersonDetail match={props.match} data={this.state.data}/>}
          />
          <Route
            exact path='/' 
            render={() => <Lista data={this.state.data}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
