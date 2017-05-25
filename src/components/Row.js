import React, { Component } from 'react';
import Cell from './Cell';
import './Row.css';

class Row extends Component {
  render() {
    const { row } = this.props;
    const cells = row.map((cell, i) => <Cell key={i}
                                             val={cell}/>);

    return (
      <div className="row">
        { cells }
      </div>
    )
  }
}

export default Row;