import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';



export default class OSPRX extends Component {
  render() {
    return (
      <Parallax
        className="prx-title"
        offsetYMax={20}
        offsetYMin={0}
        slowerScrollRate={true}
        // offsetXMax={50}
        // offsetXMin={0}
    >
      <h1 className="title os-title">Our Story</h1>


    </Parallax>
    )
  }
}


