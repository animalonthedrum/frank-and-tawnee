import React, { Component } from 'react';
import Frank from './Frank';
import Tawnee from './Tawnee';

export class OurStory extends Component {
  render() {
    return (
      <div className="os-container">
        <div className="os-left">
        <Frank/>
        <Tawnee/>

        </div>
        <div className="os-right">
        <h2>Our Story</h2>
        <div className="textBlock">
        <p>We were both graduates of Iowa State University, but we didn’t meet in class or in the dorms. Not at side-by-side tailgates or under the Campanile.
        </p>
        <p>
        Instead, we met as post grads, over a friend’s haircut that happened to be taking place in Frank’s apartment without furniture.  I sat on the floor watching the season finale of House.  Frank sat next to me, making relentless attempts to impress me with his design books.
        </p>
        <p>
        Shortly after, my career took me to Seattle and Frank’s to Minneapolis.  Time went by, and I decided to look him up while I was in town.  We met over lunch, sharing stories from our new cities.  And we simply never stopped talking.  What followed was a year of cross-country flights, nightly phone calls and Skype chats that lead to a final decision to call Minneapolis our home. 
        </p>
        <p>Five years of memories later we’ve traveled to new countries, binged weeks of crime-dramas, and given our cat, Maxwell, precisely one million kisses. 
        </p>
        </div>
        </div>
      </div>
    )
  }
}

export default OurStory
