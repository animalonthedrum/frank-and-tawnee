import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';



export default class EUCB extends Component {
  render() {
    return (
      <Parallax
        className="euc-left-bottom"
        offsetYMax={10}
        offsetYMin={-100}
        slowerScrollRate={true}
        // offsetXMax={50}
        // offsetXMin={0}
    >
     <img src={require("../images/eucBottom.png")} alt="Leaf" className="euc-bottom"/>


    </Parallax>
    )
  }
}


