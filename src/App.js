import React, { Component } from 'react';
import Grid from './containers/Grid';
import './App.css';


class App extends Component {
  render() {
    const matrix = [[0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]];

    const start = [0, 0];
    const rows = matrix.length;
    const cols = matrix[0].length;
    const end = [0, 3];
    const q = [start];

    while(q.length) {
      let curr;
      const [x, y] = curr = q.pop();
      
      // mark cell as visited
      matrix[x][y] = 2;
      if (curr === end) console.log('Escaped!');
      else {

      }
    }

    return <Grid matrix={matrix} />;
  }
}

export default App;