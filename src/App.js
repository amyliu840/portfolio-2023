import React, { Component } from 'react';
import AboutMe from './About-me';
import Experience from './Experience';
import Project from './Project';
import './App.css';


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
  

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
        <nav className="header-nav-wrapper">
          <a href="#about-me">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#project">Project</a>
        </nav>          
        <div class="name-container">
          <h1>Hello, this is Amy Liu</h1>
          <h3>Senior Frontend Engineer</h3>
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