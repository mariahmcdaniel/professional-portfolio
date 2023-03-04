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
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque quas reprehenderit laudantium deleniti dignissimos autem ipsam modi recusandae consectetur culpa alias doloribus fugiat, molestias delectus molestiae accusamus nisi? Ratione."
    },

    {
      id: 2,
      name: 'Simmer-Down Secretary',
      link: 'https://mariahmcdaniel.github.io/simmer-down-secretary/',
      img: simmer,
      gitHub: 'https://github.com/mariahmcdaniel/simmer-down-secretary',
      info: 'dolor sit amet consectetur adipisicing elit. Beatae eaque quas reprehenderit laudantium deleniti dignissimos autem ipsam modi molestias delectus molestiae accusamus nisi? Ratione.',
    },

    {
      id: 3,
      name: 'Weather Dashboard',
      link: 'https://mariahmcdaniel.github.io/five-day-forecast-dashboard/',
      img: weather,
      gitHub: 'https://github.com/mariahmcdaniel/five-day-forecast-dashboard',
      info: 'Beatae eaque quas reprehenderit laudantium deleniti dignissimos autem ipsam modi recusandae consectetur culpa alias doloribus fugiat, Beatae eaque quas reprehenderit laudantium deleniti dignissimos autem ipsam modi recusandae consectetur culpa alias doloribus fugiat,',
    },

    {
      id: 4,
      name: 'Hourly Day Planner',
      link: 'https://mariahmcdaniel.github.io/hourly-day-planner/',
      img: planner,
      gitHub: 'https://github.com/mariahmcdaniel/hourly-day-planner',
      info: 'Recusandae consectetur culpa alias doloribus fugiat, Beatae eaque quas reprehenderit laudantium deleniti dignissimos autem ipsam modi recusandae consectetur culpa alias doloribus fugiat.',
    },

    {
      id: 5,
      name: 'Password Generator',
      link: 'https://mariahmcdaniel.github.io/random-password-generator/',
      img: pw,
      gitHub: 'https://github.com/mariahmcdaniel/random-password-generator',
      info: 'Dolor sit, amet consectetur adipisicing elit. Ipsa laudantium ex tenetur nam, consectetur veniam totam veritatis vero est cum dolores neque ab dignissimos velit quae corporis consequuntur? Expedita, itaque.'
    },
    {
      id: 6,
      name: 'Note Taker App',
      link: 'https://hidden-fjord-54822.herokuapp.com/',
      img: note,
      gitHub: 'https://github.com/mariahmcdaniel/take-note',
      info: 'Ipsa laudantium ex tenetur nam, consectetur veniam totam veritatis vero est cum dolores neque ab dignissimos velit quae corporis consequuntur?Beataerecusandae consectetur culpa alias doloribus fugiat,',
    }
  ];

  const projects = data.map(
    (project, i) => {
      return (
        <div key={i} className="row justify-content-md-center projectCont">
          <div className="col-md-9 col-sm-12 projectCol">
            <div key={project.id} className="card border-primary">
              <div key={project.name} className="card-header">
                <h5 className="projectTitle">{project.name}</h5>
              </div>
              <div key={project.id.toString()} className="card-body">
                <div key={project.img.toString()} className="row imgRow d-flex">
                  <div key={i+30} className="col-5 d-flex">
                    <a key={project.name.toUpperCase()} href={project.link}>
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