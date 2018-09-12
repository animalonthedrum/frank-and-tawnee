import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';



export default class Box extends Component {
  render() {
    return (
      <Parallax
        className="left-card-box"
        offsetYMax={5}
        offsetYMin={0}
        offsetXMax={0}
        offsetXMin={5}
        slowerScrollRate={true}
    />
    )
  }
}