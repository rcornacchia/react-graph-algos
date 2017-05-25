import React, { Component } from 'react';
import Grid from './containers/Grid';
import './App.css';


class App extends Component {
  render() {
    const matrix = [[0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]];

    return <Grid matrix={matrix} />;
  }
}

export default App;