import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from './Image';


export default class LeftDirectons extends Component {
  render() {
    return (
      <Parallax
        className="left-prx-dir"
        offsetYMax={20}
        offsetYMin={10}
        slowerScrollRate={true}
        // offsetXMax={50}
        // offsetXMin={0}
    >
    {/* <img src={require("../images/EucalyptusLeft.png")} alt="Eucalyptus" className="eucLImg"/> */}
    <Image src={require("../images/watertower.png")} alt="Water Tower" className="waterTower"/>


    </Parallax>
    )
  }
}


