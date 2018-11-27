import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from './Image';


export default class Entrance extends Component {
  render() {
    return (
      <Parallax
        className="top-prx-dir"
        offsetYMax={20}
        offsetYMin={10}
        slowerScrollRate={true}
        // offsetXMax={50}
        // offsetXMin={0}
    >
    {/* <img src={require("../images/EucalyptusLeft.png")} alt="Eucalyptus" className="eucLImg"/> */}
    <Image src={require("../images/entrance.png")} alt="Entrance" className="entrance"/>


    </Parallax>
    )
  }
}


