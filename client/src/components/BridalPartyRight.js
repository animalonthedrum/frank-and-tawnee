import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';



export default class BridalPartyRight extends Component {
  render() {
    return (
      <Parallax
        className="bridal-prx"
        offsetYMax={0}
        offsetYMin={0}
        offsetXMax={130}
        offsetXMin={-100}
        
    >
     <h3>Bridesmaids</h3>
    </Parallax>
    )
  }
}