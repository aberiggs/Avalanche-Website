import './css/About.css';

function About(){
    return(
        <div className="Content-page">
            <h1> Hello, we are team Avalanche.</h1>
            <h2>Let's talk about this website.</h2>
            <br></br>
            <p>This website was developed by team member Abe Riggs IV (also known as Sprocket), with the framework created by Facebook, React. It's what is known as a single page application, and as you may have noticed, it requires no extra loading when you click on other parts of the website. This is because everything is already preloaded when you open the page.</p>
            <br></br>
            <p>One thing to note is that mobile support isn't too great as of now, and would need to be worked on in the future. Sorry mobile friends 😢</p>
            <br></br>
            <p>That's enough about our site for now! Visit <a href="https://github.com/aberiggs/Avalanche-Website" target="_blank" rel="noreferrer noopener">the github repository</a> if you wish to look deeper at the hard work behind our site. If you have any questions, don't be afraid to contact Abe at aberiggsiv@gmail.com. Thank you!</p>
        </div>
    );
}

export default About;