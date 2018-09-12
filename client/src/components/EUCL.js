import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import '../images/EucalyptusLeft.png'


export default class EUCL extends Component {
  render() {
    return (
      <Parallax
        className="euc-left-prx"
        offsetYMax={10}
        offsetYMin={-10}
        slowerScrollRate={true}
        // offsetXMax={50}
        // offsetXMin={0}
    >
    <img src={require("../images/EucalyptusLeft.png")} alt="Eucalyptus" className="eucLImg"/>


    </Parallax>
    )
  }
}


