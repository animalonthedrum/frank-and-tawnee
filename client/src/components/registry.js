import React, { Component } from 'react';
import EUCB from './EUCB';


export class Registry extends Component {
  render() {
    return (
      <div className='registry-container'>
        <h1>Registry</h1>
        <p>Your presence at our wedding is the greatest gift of all,
        <br/>
        but for those who’d like to honor us with gifts, we’ve registered at the following :
        </p>
        <div className="shop-container">
        <a target='_blank' rel="noopener noreferrer" href="https://www.target.com/gift-registry/gift/7b439f34dab2405bbf23120d8003c459">         
        <img src={require("../images/target.png")} alt="Target Store" className="gifts"/>
        </a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.zola.com/registry/frankandtawnee">        
        <img src={require("../images/zola.jpg")} alt="Honey Fund" className="gifts"/>
        </a>
        <a target='_blank' rel="noopener noreferrer" href="https://sugarbowlgiftshop.com/">
        <img src={require("../images/sugarBowl.png")} alt="Sugar Bowl" className="gifts"/>
        </a>
        </div>
        <div className="hashtag">
        <div className="vert-container">
          <div className="vert-left"></div>
            <div className="vert-right"></div>
        </div>
            <h4>Share the love</h4>
            <a className="htag" target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/explore/tags/frankandtawnee/">#frankandtawnee</a>
            <div className="vert-container-bottom">
          <div className="vert-left"></div>
            <div className="vert-right"></div>
        </div>
            <p className='ending'>We are excited and can't
            <br/>
            wait to see you!
            </p>
            {/* <a href='/rsvp' className='link'>RSVP</a> */}
        <EUCB/>
            
        </div>
      </div>
    )
  }
}

export default Registry
