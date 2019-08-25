import React, { Component } from 'react'

import './arrow.style.scss';

export default class ArrowCarousel extends Component {
  
  render() {
    if (this.props.arrowType === 'right') {
      return (
        <div className="arrow-wrapper">
          <i className="fas fa-angle-right"></i>
        </div>
      )
    }
    if (this.props.arrowType === 'left') {
      return (
        <div className="arrow-wrapper">
          <i className="fas fa-angle-left"></i>
        </div>
      )
    }
  }
}
