import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../images/eucalyptusRight.png';


export default class EUCR extends Component {
  render() {
    return (
      <Parallax
        className="euc-prx"
        offsetYMax={20}
        offsetYMin={-15}
        slowerScrollRate={true}
        // offsetXMax={50}
        // offsetXMin={0}
    >
    <img src={require("../images/eucalyptusRight.png")} alt="" className="euc-right-prx"/>


    </Parallax>
    )
  }
}


