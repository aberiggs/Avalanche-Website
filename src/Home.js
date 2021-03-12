import logo from './poggers.png';
import './css/Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SPROCKET CAN'T DEVELOP WEBSITES POGGERS
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          POG
        </a>
      </header>
    </div>
  );
}

export default Home;
