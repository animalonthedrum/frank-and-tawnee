import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from './Image';



export default class EUCL2 extends Component {
  render() {
    return (
      <Parallax
        className="euc-os-prx"
        offsetYMax={80}
        offsetYMin={0}
        slowerScrollRate={true}
        // offsetXMax={50}
        // offsetXMin={0}
    >
    {/* <img src={require("../images/eucOurStory.png")} alt="Eucalyptus" className="eucL-os"/> */}
    <Image src={require("../images/eucOurStory.png")} alt="Eucalyptus" className="eucL-os"/>


    </Parallax>
    )
  }
}


