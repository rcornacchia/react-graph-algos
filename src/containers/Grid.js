import React, { Component } from 'react';
import Row from '../components/Row';

class Grid extends Component {
  render() {
    const { matrix } = this.props;
    const rows = matrix.map((row, i) => {
      return (<Row key={i} row={row} />);
    });
    console.log(rows);
    
    return (
      <div>
        { rows }
      </div>
    )
  }
}

export default Grid;