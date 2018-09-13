import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from './Image';



export default class Frank extends Component {
  render() {
    return (
      <Parallax
        className="baby-frank-prx"
        offsetYMax={125}
        offsetYMin={0}
        slowerScrollRate={true}
        // offsetXMax={0}
        // offsetXMin={-10}
    >
    {/* <img src={require("../images/babyFrank.png")} alt="Young Frank"/> */}
    <Image src={require("../images/babyFrank.png")} alt="Young Frank"/>


    </Parallax>
    )
  }
}