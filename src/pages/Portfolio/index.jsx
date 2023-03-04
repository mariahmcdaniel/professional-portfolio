import React from 'react';
import './style.css';
import yaheard from './yaheard.png';
import simmer from './simmer.png';
import weather from './weather.png';
import planner from './planner.png';
import pw from './pw.png';
import note from './note.png';
import gitHub from './git.png';

function ProjectDisplay() {
  const data = [
    {
      id: 1,
      name: 'Ya-Heard',
      link: 'https://fathomless-woodland-16696.herokuapp.com/',
      img: yaheard,
      gitHub: 'https://github.com/Simplerer/ya-heard',
    },

    {
      id: 2,
      name: 'Simmer-Down Secretary',
      link: 'https://mariahmcdaniel.github.io/simmer-down-secretary/',
      img: simmer,
      gitHub: 'https://github.com/mariahmcdaniel/simmer-down-secretary',
    },

    {
      id: 3,
      name: 'Weather Dashboard',
      link: 'https://mariahmcdaniel.github.io/five-day-forecast-dashboard/',
      img: weather,
      gitHub: 'https://github.com/mariahmcdaniel/five-day-forecast-dashboard',
    },

    {
      id: 4,
      name: 'Hourly Day Planner',
      link: 'https://mariahmcdaniel.github.io/hourly-day-planner/',
      img: planner,
      gitHub: 'https://github.com/mariahmcdaniel/hourly-day-planner',
    },

    {
      id: 5,
      name: 'Password Generator',
      link: 'https://mariahmcdaniel.github.io/random-password-generator/',
      img: pw,
      gitHub: 'https://github.com/mariahmcdaniel/random-password-generator',
    },
    {
      id: 6,
      name: 'Note Taker App',
      link: 'https://hidden-fjord-54822.herokuapp.com/',
      img: note,
      gitHub: 'https://github.com/mariahmcdaniel/take-note',
    }
  ];

  const projects = data.map(
    (project) => {
      return (
        <div className="row justify-content-md-center projectCont">
          <div className="col-8 projectCol">
            <div key={project.id} className="card border-primary">
              <div className="card-header">
                <h5 className="projectTitle">{project.name}</h5>
              </div>
              <div className="card-body">
                <div className="row imgRow">
                  <div className="col-7">
                  <a href={project.link}>
                    <img
                      className="projectImg"
                      src={project.img}
                      alt={project.name} />
                  </a>
                </div>
                <div className="col-2 infoCol">
                  <p className="projectInfo">PROJECT INFO</p>
                </div>
              </div>
              <div className="repoRow row g-0">
                <div className="repoCol col-3 card-text text-nowrap">
                  <a href={project.gitHub} className="gitHubLink"><img
                    src={gitHub}
                    alt={project.name} /> Repository</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div >
      );
}
  );


return projects;


}
export default function Portfolio() {
  return (
    <div className="projectCont">
      <ProjectDisplay />
    </div>
  );
}