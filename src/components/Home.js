import 'react-slideshow-image/dist/styles.css'
import './css/Home.css';

import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bl%C3%A9riot_XI_Thulin_A_Mikael_Carlson_OTT_2013_08.jpg/800px-Bl%C3%A9riot_XI_Thulin_A_Mikael_Carlson_OTT_2013_08.jpg',
  'http://www.aviation-history.com/boeing/p26-8a.jpg',
  '',
  'https://upload.wikimedia.org/wikipedia/commons/7/7f/C47_Skytrain_-_Duxford_D-Day_Show_2014_%28cropped%29.jpg',
  'https://www.history.navy.mil/content/history/museums/nnam/explore/collections/aircraft/a/ah-1j-seacobra/first-ah-1j-seacobra-in-flight/_jcr_content/mediaitem/image.img.jpg/1597273652525.jpg',
  'https://www.10wallpaper.com/wallpaper/1920x1080/1205/F_117_Nighthawk-Military_aircraft_wallpaper_1920x1080.jpg',
  'https://cdn.discordapp.com/attachments/562350911511330841/821267296927875072/yorha_no_2_type_b_nier_and_1_more_drawn_by_robert_kim__84653b9ebc054d7a43b37632e969dce5.png'
];

function Home() {
  return (
    <div className="Home">
      <Slideshow />
      <header className="Home-header">
        <h>Team Avalanche</h>
        <p className="Home-paragraph">
          This site is currently under contruction
        </p>
        <a
          className="Home-link"
          href="https://docs.google.com/document/d/14IB35g7mlI2LDgrvd4C-YaABmOifI51rSgaAwI6Gdqs/edit#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Instructions Link (test link)
        </a>
      </header>
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
