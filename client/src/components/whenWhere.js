import React, { Component } from 'react';
import EUCR from './EUCR.js';
import Box from './Box.js';



export class WhenWhere extends Component {
  render() {
    return (
      <div className="ww-container">
      <h2 className="wwTitle">Ceremony & Reception</h2>
        <div className="left-container">
        <Box/> 
         {/* <img src={require("../images/when-where.png")} alt="" className="homeHero"/> */}
         <div className="card">
                  
           <p>Saturday</p>
           <p>December</p>
           <p>01</p>
           <p>2018</p>
         </div> 
        </div>
        <div className="right-container">
        <div className="where">
          <p>Ceremony & Reception</p>
          </div>
          <div className="card">
          <a target='_blank' rel="noopener noreferrer" href="https://www.paikkamn.com/">PAIKKA</a>
          <p>AT SEVEN O’CLOCK</p>
          <p> IN THE EVENING</p>
          <a  className="paikkaLoc" target='_blank' rel="noopener noreferrer" href="https://www.google.com/maps/place/PAIKKA/@44.9573741,-93.1933717,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32cb31073d435:0xe26e8aa8ee3c8cdf!8m2!3d44.9573741!4d-93.191183">
          550 VANDALIA ST. #165 <br/>
          SAINT PAUL, MINNESOTA
          </a>
          </div>
          </div>
        
          <EUCR/>
          <img src={require("../images/when-where.png")} alt="Paikka" className="mobileImage"/>
        </div>
    )
  }
}

export default WhenWhere

