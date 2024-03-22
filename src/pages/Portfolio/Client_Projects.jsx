import React from 'react';
import './style.css';
import carolinaJoy from './farm-logo.png';
import faColl from './facollectibles-logo-500px.png';
import geminIT from './MMlogoBlackWht.jpg';
import psLogoBlue from './PS-PortraitSticker-BrighterBlue-3399ff.png';
import psLogoRed from './500pxPS-PortraitSticker-Red.png';
import AnntonysOld from './AnntonysOldLogo.png';
import AnntonysNew from './1200px-700res-TM-Revised-Logo.png';
import PSpaint from './selfp.png';
import pslogoBW from './sticker-portrait-B&W.png';
import artgal from './ArtistGalLogo.png';
import Carousel from '../../components/Carousel';
import gemVid1 from './gemlogotrans.mp4';
import gemVid2 from './gemlogotrans.webm';

export default function Client_Projects() {

  return (
    <div id="clientprojCont">
        <h2 className='portH2' id="LogoDesignh2">Logo Design</h2>
        <h3>From Physical Artwork</h3>
        <div id='gemVidDiv' className='col-12 d-flex justify-content-center'>
            <video autoPlay muted loop playsInline>
                <source src={gemVid2} type="video/webm" />
                <source src={gemVid1} type="video/mp4" />
            </video>
            </div>
        <div className='logosec row d-flex justify-content-center'>
        <img className="logoimg" src={PSpaint} alt="custom logo"/>
        <img className="logoimg" src={psLogoBlue} alt="custom logo"/>
        <img className="logoimg" src={psLogoRed} alt="custom logo"/>
        <img className="logoimg" src={pslogoBW} alt="custom logo"/>
        <img className="logolong" src={artgal} alt="custom logo"/>
        </div>

        <h3>Update Established Branding</h3>
        <div className='logosec row d-flex justify-content-center'>
        <img className="logolong" src={AnntonysOld} alt="custom logo"/>
        <img className="logolong" src={AnntonysNew} alt="custom logo"/>
        </div>
        <h3>Personalized Custom Designs</h3>
        <div className='logosec row d-flex justify-content-center'>
      <img className="logoimg" src={carolinaJoy} alt="custom logo for a farm"/>
      <img className="logoimg" src={geminIT} alt="custom logo"/>
      <img className="logoimg" src={faColl} alt="custom logo"/>
      </div>
        <h2 className='portH2'>Project Example In Depth</h2>
        <br/>
        <button
        id="agSiteBtn"
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.theartistgal.com/';
        }}>
        View Live Site - TheArtistGal.com
      </button>
        <Carousel />
    </div>
  );
}