import React, { Component } from 'react';
import './App.css';
import projects from './assets/projects';
import map from 'lodash/map';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="contact-info">
          <h1>Finn Thye</h1>
          <h2>React Developer</h2>
          <a href="https://www.linkedin.com/in/piqueen/">LinkedIn</a>
          <a href="https://github.com/piqueen1">GitHub</a>
        </div>
        <div className="projects">
          {map(projects, (project) => (
            <div className="project" key={project.id}>
              {project.title}
              {project.description}
              {map(project.keyPoints, (keyPoint) => (
                <div className="keyPoint" key={keyPoint.id}>
                  {keyPoint.value}
                </div>
              ))}
              {map(project.technologies, (technology) => (
                <div className="technology" key={technology.id}>
                  Technology: {technology.value}
                </div>
              ))}
              <img src={project.image} alt="Project" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
