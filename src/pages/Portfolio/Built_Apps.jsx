import React from 'react';
import './style.css';
import yaheard from './ya-heard.png';
import simmer from './simmer.png';
import weather from './weather.png';
import planner from './planner.png';
import pw from './pw.png';
import note from './note.png';
import gitHub from './git.png';
import duet from './duet.png';
import viewApp from './viewApp.png';
import tech from './tech.png';
import portfolio from './portfolio.png' ;
import { Row, Col } from "react-bootstrap";

function ProjectDisplay() {
  const data = [
    {
      id: 1,
      name: 'My Portfolio',
      link: 'https://www.mariahmcdaniel.com/',
      img: portfolio,
      gitHub: 'https://github.com/mariahmcdaniel/professional-portfolio',
      info: "The portfolio that you are currently viewing!"
    },
    {
      id: 2,
      name: 'Duet',
      link: 'https://frozen-garden-71099.herokuapp.com/',
      img: duet,
      gitHub: 'https://github.com/mariahmcdaniel/duet',
      info: "A music centered social application that connects users to potential new friends or love interests. This app was built in collaboration with a team of developers/ music enthusiasts using the Deezer API, a MERN fullstack approach + Vite and it is deployed to Heroku."
    },
    {
      id: 3,
      name: 'Tech-Blog',
      link: 'https://rocky-cliffs-78660.herokuapp.com/',
      img: tech,
      gitHub: 'https://github.com/mariahmcdaniel/tech-blog',
      info: "A blog style application for sharing and commenting on tech-related text content. Built with ExpressJS, Handlebars, MySQL2/Sequelize and deployed to Heroku."
    },
    {
      id: 4,
      name: 'Ya-Heard',
      link: 'https://fathomless-woodland-16696.herokuapp.com/',
      img: yaheard,
      gitHub: 'https://github.com/Simplerer/ya-heard',
      info: "An application that provides a share space for recommendations to small/ local businesses in different cities. This app was built using the node.js, mySQL and Express.js "
    },

    {
      id: 5,
      name: 'Simmer-Down Secretary',
      link: 'https://mariahmcdaniel.github.io/simmer-down-secretary/',
      img: simmer,
      gitHub: 'https://github.com/mariahmcdaniel/simmer-down-secretary',
      info: 'A fun application that allows you to select your current mood from a series of gifs before it presents you with a movie and several drink options based on your choice (for users that are 21+ only). This app was built with html, css and javascript combined with data from the Giphy API, TheCocktailDB and the OMDb API.',
    },

    {
      id: 6,
      name: 'Weather Dashboard',
      link: 'https://mariahmcdaniel.github.io/five-day-forecast-dashboard/',
      img: weather,
      gitHub: 'https://github.com/mariahmcdaniel/five-day-forecast-dashboard',
      info: 'This is a simple application that uses the OpenWeather API to populate a weather dashboard in which a user can search for a city and then receive the current 5-day weather forecast for that location.',
    },

    {
      id: 7,
      name: 'Hourly Day Planner',
      link: 'https://mariahmcdaniel.github.io/hourly-day-planner/',
      img: planner,
      gitHub: 'https://github.com/mariahmcdaniel/hourly-day-planner',
      info: 'An application that allows a user to create a daily schedule that will save their events to local storage. This app uses Day.js and a class altering function in order to color code time blocks based on whether they are in the past, present or future',
    },

    {
      id: 8,
      name: 'Password Generator',
      link: 'https://mariahmcdaniel.github.io/random-password-generator/',
      img: pw,
      gitHub: 'https://github.com/mariahmcdaniel/random-password-generator',
      info: 'A minimalistic application built with "Vanilla-JS" that generates a random password based on user specified criteria.'
    },
    {
      id: 9,
      name: 'Note Taker App',
      link: 'https://hidden-fjord-54822.herokuapp.com/',
      img: note,
      gitHub: 'https://github.com/mariahmcdaniel/take-note',
      info: 'This application allows a user to write and save notes. It was created using a simple database that is connected to the back end using Express.js and it is deployed to Heroku.',
    }
  ];

  const projects = data.map(
    (project, i) => {
      return (
        <Row key={i} className="justify-content-md-center projectCont">
          <Col className="col-md-9 col-sm-12 g-0 projectCol">
            <div key={project.id} className="card border-primary">
              <div key={project.name} className="card-header">
                <h5 className="projectTitle">{project.name}</h5>
              </div>
              <div key={project.id.toString()} className="card-body">
                <div key={project.img.toString()} className="row imgRow d-flex">
                  <div key={i+30} className="col-5 d-flex">
                    <a key={project.name.toUpperCase()} href={project.link} target="_blank" rel="noreferrer">
                      <img
                        className="projectImg"
                        src={project.img}
                        alt={project.name} />
                    </a>
                  </div>
                  <div key={i+10} className="col-md-5 col-sm-7 infoCol">
                    <p className="projectInfo">{project.info}</p>
                  </div>
                </div>
                <div key={i+20} className="repoRow row g-0">
                  <div key={i+40} className="repoCol col-3 card-text text-nowrap">
                    <a href={project.link} target="_blank" rel="noreferrer" className="appLink"><img
                    src={viewApp}
                    alt={project.name} /> Open App</a>
                    <a href={project.gitHub} target="_blank" rel="noreferrer" className="gitHubLink"><img
                      src={gitHub}
                      alt={project.name} /> Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row >
      );
    }
  );


  return projects;


}
export default function Built_Apps() {
  return (
    <div className="projectCont row d-flex justify-content-center">
          <h1 className="d-flex col-2"id="projectsH1">Web Applications</h1>
      <ProjectDisplay />
    </div>
  );
}