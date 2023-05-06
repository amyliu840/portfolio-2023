import React, { Component } from 'react';
import AboutMe from './About-me';
import Experience from './Experience2';
import Project from './Project';
import './App.css';
import Typical from 'react-typical'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'about-me'
    }

    this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => {
    this.ListeningStateChangedEvent({ activeItem: name.toLowerCase() });
  }

  ListeningStateChangedEvent = ({ activeItem }) => {
    const activeElement = document.querySelector(`#${activeItem}`);
    activeElement.animate({ scrollTop: activeElement.offsetTop }, 200);
  }

  onScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }

  render() {
    return (
      <div className="App">
        <nav className="header-nav-wrapper">
          <div className='nav-link-container'>
            {['about-me', 'experience', 'project'].map(item => (
              <div style={{ padding: '1rem' }}><a href={`#${item}`} key={item}>
                {item.replace('-', ' ').toUpperCase()}
              </a></div>
            ))}
          </div>
        </nav>
        <div className="name-container">
          <h1>Hello, this is Amy Liu</h1>
          <Typical
            steps={['Senior', 1000, 'Senior Frontend Engineer', 700]}
            loop={Infinity}
            wrapper="p"
          />
          <a href="https://www.linkedin.com/in/amy-xi-l-0745703a/" target="_blank" className='linkedin-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" /></svg>
          </a>
          <span className='scroll-down' onClick={this.onScrollDown}></span>
        </div>
        <AboutMe />
        <Experience />
        <Project />
        <footer>Powered By <a href="https://www.pexels.com" target="_blank">Pexels</a>, <a href="https://create-react-app.dev/" target="_blank">Creat React App</a> and <a href="https://react.semantic-ui.com/" target="_blank">Semantic UI React</a></footer>
      </div>
    );
  }
}

export default App;