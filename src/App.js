import React, { Component } from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  Content = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((data, index) => {
        return (
          <Route key={index} path={data.path} component={data.main} exact={data.exact} />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {this.Content(routes)}
        </div>
      </Router>
    );
  }

}

export default App;
