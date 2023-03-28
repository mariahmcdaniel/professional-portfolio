import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const SplashPage = () => {
  return (
    <div id="splashCont" className="color-change-2x">
      <div className="row splashRow g-0">
        <div className="col splashCol">
        <h1 id="splashName">Mariah McDaniel</h1>
        </div>
        <div className="col splashCol g-0" id="splashBox">
          <Link to="/Portfolio" id="openPort">View My Portfolio</Link>
        </div>
      </div>
      {/* <img src="myphoto.jpg" alt="my photo" id="myphoto" /> */}
    </div>
  );
}

export default SplashPage;