import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';



export default class BridalPartyBottom extends Component {
  render() {
    return (
      <Parallax
        className="att-prx"
        offsetYMax={0}
        offsetYMin={0}
        offsetXMax={10}
        offsetXMin={-40}
        slowerScrollRate={false}
    >
    <div><h3>Personal Attendants</h3></div>
    
    </Parallax>
    )
  }
}