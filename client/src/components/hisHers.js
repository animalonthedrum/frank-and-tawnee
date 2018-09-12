import React, { Component } from 'react';
import BridalParty from './BridalParty';
import BridalPartyRight from './BridalPartyRight';
import BridalPartyBottom from './BridalPartyBottom';



export class HisHers extends Component {
  render() {
    return (
      <div className="hh-container">
      <div className="hh-top">
        <h2>Wedding <br/> Party</h2>
        <div className="bridalParty">
            <div className="groom">
            <BridalParty/>
                <h3 className="hidden">Groomsmen</h3>
                <div className="photos">
                <div className="grid">
                <img src={require("../images/jondenney.jpg")} alt="Jon Denney" className="groomsMen"/>
                <h4>Jon Denney</h4>
                <p>Best Man</p>
                </div>
                <div className="grid">
                <img src={require("../images/garrettLofgren.jpg")} alt="Garrett Lofgren" className="groomsMen"/>
                <h4>Garrett Lofgren</h4>
                <p>Groomsman</p>
                </div>
                <div className="grid">
                <img src={require("../images/tannerSteinhoff.jpg")} alt="Tanner Steinhoff" className="groomsMen"/>
                <h4>Tanner Steinhoff</h4>
                <p>Groomsman</p>
                </div>
                <div className="grid">
                <img src={require("../images/calRebhuhn.jpg")} alt="Cal Rebhuhn" className="bmaids"/>
                <h4>Cal Rebhuhn</h4>
                <p>Groomsman</p>
                </div>
            </div>
            </div>
            <div className="bride">
            <BridalPartyRight/>
            <h3 className="hidden">Bridesmaids</h3>
            <div className="photos">
                <div className="grid">
                <img src={require("../images/brittnyRebhuhn.jpg")} alt="BRITTNY REBHUHN" className="bmaids"/>
                <h4>BRITTNY REBHUHN</h4>
                <p>Maid of Honor</p>
                </div>
                <div className="grid">
                <img src={require("../images/bradyRebhuhn.jpg")} alt="Brady Rebhuhn" className="bmaids"/>
                <h4>Brady Rebhuhn</h4>
                <p>Maid of Honor</p>
                </div>
                <div className="grid">
                <img src={require("../images/courtneyMiddendorf.jpg")} alt="Courtney Middendorf" className="bmaids"/>
                <h4>Courtney Middendorf</h4>
                <p>Bridesmaid</p>
                </div>
                <div className="grid">
             
                <img src={require("../images/katyReiling.jpg")} alt="Katy Reiling" className="bmaids"/>
                <h4>Katy Reiling</h4>
                <p>Bridesmaid</p>
                </div>
            </div>


            </div>
            </div>
            </div>
            <div className="hh-bottom">
            <div className="attendants">
               <BridalPartyBottom/>
               <h3 className="hidden">Attendants</h3>
                <div className="a-photos">
                <div className="grid">
                <img src={require("../images/gretaSeiffert.jpg")} alt="Greta Seiffert" className="bmaids"/>
                <h4>Greta Seiffert</h4>
                <p>Personal Attendant</p>
                </div>
                <div className="grid">
                <img src={require("../images/kristaClaudia.jpg")} alt="Krista and Claudia Simmerf" className="bmaids"/>
                <h4>Krista & Claudia Simmerf</h4>
                <p>Personal Attendants</p>
                </div>
                <div className="grid">
                <img src={require("../images/ringbearer.jpg")} alt="Braxton Denney" className="bmaids"/>
                <h4>Braxton Denney</h4>
                <p>Ringbearer</p>
                </div>
                <div className="grid">
                <img src={require("../images/flowergirl.jpg")} alt="Scarlett Denney" className="bmaids"/>
                <h4>Scarlett Denney</h4>
                <p>Flower Girl</p>
                </div>
                </div>
            </div>
        </div>
    
      </div>
    )
  }
}

export default HisHers;
