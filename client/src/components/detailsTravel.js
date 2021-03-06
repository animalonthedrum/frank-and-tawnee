import React, { Component } from 'react';
import EUCL from './EUCL';
import EUCR2 from './EUCR-2';
import LeftDirections from './LeftDirections';
import Entrance from './Entrance';

export class DetailsTravel extends Component {
  render() {
    return <div className="dt-container">
        <div className="directions-container">
          <div className="directions">
            <h2>Directions</h2>
            <p>
              PAIKKA is located in the Vandalia Tower complex at 550
              Vandalia St. in Saint Paul, MN. Follow Vandalia St. to Wabash
              Ave on the North side to find the large parking lot under the
              water tower. Enter at the Vandalia Annex Entrance and walk all
              the way down the hall.{" "}
            </p>
          </div>
          <div className="direction-images">
            <img src={require("../images/map.png")} alt="Map" className="MapImg" />
            {/* <div className="direction-prx">
              <LeftDirections/>
              <Entrance />
              </div> */}
          </div>
        </div>

        <div className="left-container">
          <EUCL />
          {/* <img src={require("../images/EucalyptusLeft.png")} alt="Leaf" className="euc-left"/> */}
          <h1>
            The <br /> Details
          </h1>
          <p>Both the ceremony and reception will be held at Paikka.</p>
          <p>
            Please note that you are welcome to park vehicles in the Paikka
            parking lot overnight. If you’re not driving, or plan to leave
            your vehicle, we recommend using Lyft or Uber for rides to and
            from the venue.
          </p>
          <p>
            The ceremony will begin at 7pm with a cocktail/appetizer
            reception to follow. If you’d like to grab a bite before the
            party starts, here are a few great spots in the area:
          </p>
          <p className="restr">
            <a target="_blank" rel="noopener noreferrer" href="http://www.thebdp.com/locations/">
              Blue Door Pub St. Paul,{" "}
            </a>

            <a target="_blank" rel="noopener noreferrer" href="http://augustinesmn.com/location/">
              Augustine’s
            </a>
          </p>

          <p className="restr">
            <a target="_blank" rel="noopener noreferrer" href="http://www.caffebiaggio.com/map">
              Café Biaggio,{" "}
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.graduatehotels.com/minneapolis/restaurant/the-beacon/">
              The Beacon Public House
            </a>
          </p>
          <p>
            Lake Monster Brewing is also right next door and hosts a food truck on site. Take a look at their schedule <a className="here" target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/embed?src=ukncttkug7ioli9ls99t2qtlj8%40group.calendar.google.com">
              {" "}
              here
            </a>
          </p>
          <p>We can’t wait to see you!</p>
        </div>
        <div className="right-container">
          <h2>Order of Events</h2>
          <p className="time">6:30pm</p>
          <p>Doors Open</p>
          <p className="time">7:00pm</p>
          <p>Ceremony</p>
          <p className="time">7:30pm</p>
          <p>Cocktails + Appetizers</p>
          <p className="time">8:30pm</p>
          <p>Live Music + Dance</p>
          <p className="time">12:00am</p>
          <p>Last Call</p>
          <EUCR2 />
          {/* <img src={require("../images/eucRight2.png")} alt="Leaf" className="euc-right2"/>      */}
        </div>
        <div className="accdate">
          <h3 className="acc-title">Accomodations</h3>
          <p className="acc-block">
            A BLOCK OF ROOMS HAS BEEN RESERVED UNDER
            <br />
            DENNEY/REBHUHN
          </p>
          <div className="hotelCard">
            <div className="leftCard">
              <div className="textBlock">
                <h4>
                  Hampton Inn <br />& Suites
                </h4>
                <div className="stars left">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p>Free Parking, Pool, Breakfast</p>
                <p>
                  2812 University Ave SE <br /> Minneapolis, MN 55414
                </p>
                <a className="number" href="tel:1-612-259-8797">
                  (612) 259-8797
                </a>
              </div>
              <a target="_blank" rel="noopener noreferrer" href="http://group.hamptoninn.com/Rebhuhn-Denney-Wedding" className="link">
                Book Now
              </a>
            </div>
            <div className="rightCard">
              <div className="textBlock">
                <h4>
                  DOUBLETREE
                  <br />
                  HILTON - UNIVERSITY
                </h4>
                <div className="stars right">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p>Paid Valet Parking, Pool</p>
                <p>
                  511 Huron Blvd. SE
                  <br />
                  Minneapolis, MN 55414
                </p>
                <a className="number" href="tel:1-844-327-3827">
                  (844) 327-3827
                </a>
              </div>
              <a target="_blank" rel="noopener noreferrer" href="https://doubletree.hilton.com/en/dt/groups/personalized/M/MSPUNDT-RD5-20181130/index.jhtml" className="link">
                Book Now
              </a>
            </div>
          </div>
          <p className="accDetails">
            Rooms will be held until October 31st, 2018. <br />
            Other Recommendations include:
            <br />
            <a href="https://www.graduatehotels.com/minneapolis/">
              The Graduate Minneapolis,
            </a> <a href="https://www.bestwestern.com/en_US/book/hotels-in-saint-paul/best-western-plus-como-park-hotel/propertyCode.24130.html">
              Best Western Como Park
            </a>
          </p>
        </div>
      </div>;
  }
}

export default DetailsTravel

