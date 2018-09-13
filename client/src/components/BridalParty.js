import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';



export default class BridalParty extends Component {
  render() {
    return (
      <Parallax
        className="bridal-prx"
        offsetYMax={0}
        offsetYMin={0}
        offsetXMax={130}
        offsetXMin={-130}
        slowerScrollRate={false}
    >
     <div><h3>Groomsmen</h3></div>
    </Parallax>
    )
  }
}