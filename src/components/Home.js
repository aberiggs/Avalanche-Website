import 'react-slideshow-image/dist/styles.css'
import './css/Home.css';

import { Slide } from 'react-slideshow-image';

import Bleriot from './css/aircraft/1.png';
import P26 from './css/aircraft/2.png';
import FW190 from './css/aircraft/3.png';
import Skytrain from './css/aircraft/4.png';
import Cobra from './css/aircraft/5.png';
import F117 from './css/aircraft/6.png';
import FlightUnit from './css/aircraft/7.png';

const slideImages = [
  Bleriot,
  P26,
  FW190,
  Skytrain,
  Cobra,
  F117,
  FlightUnit
];

function Home() {
  return (
    <div className="Home">
      <Slideshow />
      <div className="Home-vid-div">
        <iframe width="800" height="600" src="https://www.youtube.com/embed/Hg7aMFy8a2c" className="Home-video"></iframe>
      </div>
      <div className="Home-content-div">
        <header className="Home-header">
          <h>The Rift</h>
          <p className="Home-paragraph">
            Humanity has suffered in a 100-year long war against the Pioscornians from Planet Rusantau, from the Andromeda Galaxy. Just on the brink of extinction from lack of resources, researchers have detected pings from The Pleiades in Antarctica. An expedition group was sent where The Machine was discovered, with 7 intricate key locks surrounding the base. Engraved in the ice details the capabilities of The Machine to be the saviour of humanity, once unlocked and controlled. Your mission is to travel through tiem, flying various planes to secure the keys that have been scattered across time periods and events to unlock The Machine and save humanity. Along the way, you will uncover clues to decipher where you must fly next. Your job is to attain these 7 keys to unlock and fly The Machine and defeat the Pioscornians.
          </p>
          <p className="Home-paragraph">
          The guardian is an a being without identity, who watches over the machine. Having left rifts throughout the world, you have the ability and opportunity to travel through space and time in an attempt to unlock the machine, and save humanity. Clues lead you to the various keys, as well as the rifts, and are your ticket to succeeding in your journey. As time progresses, you are going to need more sophisticated aircraft, and as such, you may find yourself with interesting tasks. Whether it's stealing an aircraft, flying a humanitarian mission, or fighting in war, this journey is going to indeed be a long one, that even with the rifts of the guardian, is not for the faint of heart. You may also find yourself stranded, without an open rift nearby, requiring you to drag yourself to your next destination.
          </p>

          <p className="Home-paragraph">Can you save humanity from annihilation?</p>
        </header>
      </div>
    </div>
    
  );
}

function Slideshow() {
  return(
    <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Slide 4</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>Slide 5</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              <span>Slide 6</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              <span>Slide 7</span>
            </div>
          </div>
        </Slide>
      </div>
  );
}

export default Home;
