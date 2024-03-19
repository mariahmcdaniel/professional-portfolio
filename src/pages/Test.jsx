import React from 'react';
import './style.css';
import fleur from './fleur.mp4';
import fleur2 from './fleur.webm';
import logo24 from './2024LOGO500.png';

export default function Test() {
    return (
        <div className='row d-flex align-items-center testCont g-0'>
            <h1 id='featTesth1'>Features Test Page</h1>
            <div id='vidDiv' className='col-12 d-flex justify-content-center'>
            <video autoPlay muted loop playsInline>
                <source src={fleur2} type="video/webm" />
                <source src={fleur} type="video/mp4" />
            </video>
            </div>
            <div className='col-12 d-flex justify-content-center'>
            <img id='logo24' src={logo24} alt='gemineye of the tiger logo'/>
            </div>
        </div>
    );
}


