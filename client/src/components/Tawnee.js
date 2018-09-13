import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from './Image';


export default class Tawnee extends Component {
  render() {
    return (
      <Parallax
        className="baby-tawnee-prx"
        offsetYMax={20}
        offsetYMin={-20}
        // offsetXMax={0}
        // offsetXMin={5}
        slowerScrollRate={true}
    >
    <Image src={require("../images/liltawnee.jpg")} alt="Young Tawnee"/>


    </Parallax>
    )
  }
}