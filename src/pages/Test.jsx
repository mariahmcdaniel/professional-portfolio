import React from 'react';
import './style.css';
import fleur from './fleur.mp4';
import fleur2 from './fleur.webm';

export default function Test() {
    return (
        <div className='row testCont g-0'>
            <video autoPlay muted loop playsinline>
                <source src={fleur2} type="video/webm" />
                <source src={fleur} type="video/mp4" />
            </video>
        </div>
    );
}


