import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../images/eucRight2.png';


export default class EUCR extends Component {
  render() {
    return (
      <Parallax
        className="euc-r2-prx"
        offsetYMax={150}
        offsetYMin={0}
        slowerScrollRate={true}
        // offsetXMax={50}
        // offsetXMin={0}
    >
    <img src={require("../images/eucRight2.png")} alt="Euc"/>


    </Parallax>
    )
  }
}


