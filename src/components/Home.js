import 'react-slideshow-image/dist/styles.css'
import './css/Home.css';

import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://i.pximg.net/img-master/img/2018/12/26/17/19/58/72310740_p0_master1200.jpg',
  'https://cdn.discordapp.com/attachments/562350911511330841/821267296927875072/yorha_no_2_type_b_nier_and_1_more_drawn_by_robert_kim__84653b9ebc054d7a43b37632e969dce5.png',
  'https://i.pximg.net/img-master/img/2021/03/14/05/10/28/88432676_p0_master1200.jpg'
];

function Home() {
  return (
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
        </Slide>
      </div>
      /*
    <div className="Home">
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
    */
  );
}

export default Home;
