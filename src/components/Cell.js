import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  render() {
    const { val } = this.props;
    let className;

    switch(val) {
      case 0:
        className = 'zero';
        break;
      case 1:
        className = 'one';
        break;
      case 2:
        className = 'two';
        break;
    }

    return <div className={className}></div>;
  }
}

export default Cell