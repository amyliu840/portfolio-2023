import React, { Component } from 'react';
import AboutMe from './About-me';
import Experience from './Experience';
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


  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
          <nav className="header-nav-wrapper">
            <a href="#about-me">{'About Me'.toUpperCase()}</a>
            <a href="#experience">{'Experience'.toUpperCase()}</a>
            <a href="#project">{'Projects'.toUpperCase()}</a>
          </nav>
          <div class="name-container">
            <h1>Hello, this is Amy Liu</h1>
            <Typical
              steps={['Senior', 1000, 'Senior Frontend Engineer', 700]}
              loop={Infinity}
              wrapper="p"
            />
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